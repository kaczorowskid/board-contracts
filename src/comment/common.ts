import myzod from "myzod";
import { idSchema } from "../common";

export const commentBaseSchema = myzod.object({
  id: idSchema,
  text: myzod.string(),
  ticket_id: idSchema,
  updated_at: myzod.date(),
  created_at: myzod.date(),
});
