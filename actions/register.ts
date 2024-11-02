"use server";

import * as z from "zod"
import { RegisterSchema } from "@/schemes";

export const register = async (values: z.infer<typeof RegisterSchema>) => {
    const validatedFeilds = RegisterSchema.safeParse(values)

    if(!validatedFeilds.success){
        return {error: "Invalid Field!"}
    }

    return {success: "Email Sent!"}
}