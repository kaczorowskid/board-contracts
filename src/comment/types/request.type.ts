import { Infer } from "myzod";
import {
  createCommentRequestSchema,
  removeCommentRequestSchema,
} from "../schemas";

export type CreateCommentRequest = Infer<typeof createCommentRequestSchema>;
export type RemoveCommentRequest = Infer<typeof removeCommentRequestSchema>;
