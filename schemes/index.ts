import * as z from 'zod'

export const LoginSchema = z.object({
    email: z.string(
        // {invalid_type_error: "Must be a string"}
    ).email(
        // {message: "Email is required", }
    ),
    password: z.string().min(1, {
        message: "Password is required"
    })
});