import myzod from "myzod";
import { idSchema } from "../common";

export const calendarBaseSchema = myzod.object({
  id: idSchema,
  start_date: myzod.date(),
  note: myzod.string(),
  is_done: myzod.boolean(),
  user_id: idSchema,
  created_at: myzod.date(),
  updated_at: myzod.date(),
});
