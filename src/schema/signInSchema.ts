import {z} from "zod";

export const signUpSchema = z.object({
    identifier:z.string(),
    password:z.string()
})
// identifier can be both username and email hence identifier variable is used.
