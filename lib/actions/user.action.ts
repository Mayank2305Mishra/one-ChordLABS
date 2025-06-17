"use server"

import { ID, Query } from "node-appwrite"
import { createAdminClient, createSessionClient } from "../appwrite.config"
import { cookies } from "next/headers"
import { SignUpParams, LoginParams } from "@/constants/types";
import { parseStringify } from "../utils";

const {
    NEXT_PUBLIC_DATABASE_ID: DATABASE_ID,
    NEXT_PUBLIC_USER_ID: USER_COLLECTION_ID,
} = process.env;

export const getUserInfo = async ({ userId }: { userId: string }) => {
    try {
        const { database } = await createAdminClient();

        const user = await database.listDocuments(
            DATABASE_ID!,
            USER_COLLECTION_ID!,
            [Query.equal('userID', [userId])]
        )

        return parseStringify(user.documents[0]);
    } catch (error) {
        console.error('Error', error)
    }
}


export const signUp = async ({ password, ...userData }: SignUpParams) => {
    const { email, name } = userData;

    let newUserAccount;

    try {
        const { account, database } = await createAdminClient();

        newUserAccount = await account.create(
            ID.unique(),
            email,
            password,
            `${name}`
        );

        if (!newUserAccount) throw new Error('Error creating user')

        const newUser = await database.createDocument(
            DATABASE_ID!,
            USER_COLLECTION_ID!,
            ID.unique(),
            {
                name,
                email,
                userID: newUserAccount.$id,
                avatar: "https://github.com/shadcn.png",
            }
        )
        const session = await account.createEmailPasswordSession(email, password);
        (await cookies()).set("chord-session", session.secret, {
            path: "/",
            httpOnly: true,
            sameSite: "strict",
            secure: true,
        });

        return parseStringify(newUser);
    } catch (error) {
        console.error('Error', error);
        throw error;
    }
}

export const login = async ({ email, password }: LoginParams) => {
    try {
        const { account } = await createAdminClient();
        const session = await account.createEmailPasswordSession(email, password);

        (await cookies()).set("chord-session", session.secret, {
            path: "/",
            httpOnly: true,
            sameSite: "strict",
            secure: true,
        });

        const user = await getUserInfo({ userId: session.userId })

        return parseStringify(user);
    } catch (error) {
        console.error('Error', error);
    }
}

export async function getLoggedInUser() {
    try {
      const { account } = await createSessionClient();
      const result = await account.get();
  
      const user = await getUserInfo({ userId: result.$id})
  
      return parseStringify(user);
    } catch (error) {
      console.log(error)
      return null;
    }
  }