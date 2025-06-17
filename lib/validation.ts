import { z } from "zod"

export const loginSchema = z.object({
    email: z.string().email("Invalid email address."),
    password: z
        .string()
        .min(8, "Password must be at least 8 characters")
        .max(50, "Password must be at most 50 characters"),
})
export const signSchema = z.object({
    name: z.string().min(2, { message: "Name must be at least 2 characters." })
        .max(50, { message: "Name must be atmost 50 characters." }),
    email: z.string().email("Invalid email address."),
    password: z
        .string()
        .min(8, "Password must be at least 8 characters")
        .max(50, "Password must be at most 50 characters"),
})

export const userDemographicsSchema = z.object({
    dob: z.date(),
    gender : z.enum(["male", "female", "other"]),
    phone: z
        .string()
        .refine((phone)=>/^\+\d{10,15}$/.test(phone), "Invalid phone number")
})
