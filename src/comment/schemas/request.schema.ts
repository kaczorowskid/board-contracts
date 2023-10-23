import myzod from "myzod";
import { idSchema, onlyIdSchema } from "../../common";

export const createCommentRequestSchema = myzod.object({
  text: myzod.string(),
  ticket_id: idSchema,
  user_id: idSchema,
});

export const removeCommentRequestSchema = onlyIdSchema;
