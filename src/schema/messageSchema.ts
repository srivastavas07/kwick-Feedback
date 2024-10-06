import {z} from "zod";
export const messageSchema = z.object({
    content: z.string().min(1,"Message cannot be empty").max(280,"Message cannot be more than 280 characters"),
    feedbackType: z.string().min(1,"Feedback type cannot be empty").max(10,"Type can only be neutral, positive, negative.")
})