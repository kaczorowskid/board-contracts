import myzod from "myzod";
import { idSchema } from "../common";

export const calendarBaseSchema = myzod.object({
  id: idSchema,
  start_date: myzod.date(),
  hour: myzod.string(),
  note: myzod.string(),
  user_id: idSchema,
  created_at: myzod.date(),
  updated_at: myzod.date(),
});
