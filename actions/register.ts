"use server";

import * as z from "zod"
import { RegisterSchema } from "@/schemes";

import bcrypt from "bcryptjs"
import { db } from "@/lib/db";
import { getUserByEmail } from "@/data/user";

export const register = async (values: z.infer<typeof RegisterSchema>) => {
    const validatedFeilds = RegisterSchema.safeParse(values)

    if(!validatedFeilds.success){
        return {error: "Invalid Field!"}
    }

    const {name, email, password} = validatedFeilds.data

    const hashPassword = await bcrypt.hash(password, 10)

    const existingUser = await getUserByEmail(email)

    if(existingUser){
        return { error : "Email already in use!"}
    }

    await db.user.create({
        data: {
            name,
            email,
            password: hashPassword
        }
    })

// Todo email sent

    return {success: "User created!"}
}