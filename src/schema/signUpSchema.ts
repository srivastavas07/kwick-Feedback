import { z } from "zod";

export const userNameValidation = z.string().min(3, "Atleast 3 charachters length required").max(20, "More than 20 characters not allowed.").regex(/^[a-zA-Z0-9_]+$/, "Username must not contain special charachters")
export const signInSchema = z.object({
    username: userNameValidation,
    email: z.string().email({ message: "Invalid email address" }),
    password: z.string().min(8, { message: "Atleast 8 charachters length required" }).max(16, { message: "More than 16 characters not allowed." }),
})