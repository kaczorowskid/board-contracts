import myzod, { Infer } from "myzod";
import { idSchema } from "../common";

export const createCommentRequest = myzod.object({
  text: myzod.string(),
  ticket_id: idSchema,
  user_id: idSchema,
});

export const createCommentResponse = myzod.object({
  id: idSchema,
  text: myzod.string(),
  ticket_id: idSchema,
  updated_at: myzod.date(),
  created_at: myzod.date(),
});

export const removeCommentRequest = myzod.object({
  id: idSchema,
});

export const removeCommentResponse = myzod.object({
  deleted: myzod.boolean(),
});

export type CreateCommentRequest = Infer<typeof createCommentRequest>;
export type CreateCommentResponse = Infer<typeof createCommentResponse>;
export type RemoveCommentRequest = Infer<typeof removeCommentRequest>;
export type RemoveCommentResponse = Infer<typeof removeCommentResponse>;
