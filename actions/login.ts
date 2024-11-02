"use server";

import * as z from "zod"
import { LoginSchema } from "@/schemes";

export const login = async (values: z.infer<typeof LoginSchema>) => {
    const validatedFeilds = LoginSchema.safeParse(values)

    if(!validatedFeilds.success){
        return {error: "Invalid Field!"}
    }

    return {success: "Email Sent!"}
}