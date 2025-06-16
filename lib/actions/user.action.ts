"use server"

import { ID, Query } from "node-appwrite"
import { createAdminClient, createSessionClient } from "../appwrite.config"
import { cookies } from "next/headers"
import { SignUpParams } from "@/constants/types";

const {
    NEXT_PUBLIC_DATABASE_ID: DATABASE_ID,
    NEXT_PUBLIC_USER_ID: USER_COLLECTION_ID,
} = process.env;


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

        return newUser;
    } catch (error) {
        console.error('Error', error);
        throw error;
    }
}