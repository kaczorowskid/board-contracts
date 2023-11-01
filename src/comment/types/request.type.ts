import { Infer } from "myzod";
import {
  createCommentRequestSchema,
  removeCommentRequestSchema,
} from "../schemas";
import { commentBaseSchema } from "../common";

export type CreateCommentRequest = Infer<typeof createCommentRequestSchema>;
export type RemoveCommentRequest = Infer<typeof removeCommentRequestSchema>;
export type CommentBaseRequest = Infer<typeof commentBaseSchema>;
