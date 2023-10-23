import { Infer } from "myzod";
import { commentBaseSchema } from "../common";
import { removeResponseSchema } from "../../common";

export type CreateCommentResponse = Infer<typeof commentBaseSchema>;
export type RemoveCommentResponse = Infer<typeof removeResponseSchema>;
