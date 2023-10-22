import myzod, { Infer } from "myzod";
import { idSchema } from "../common";

export const getCalendarRequest = myzod.object({
  user_id: idSchema,
  date: myzod.string(),
});

export const getCalendarResponse = myzod.object({
  id: idSchema,
  start_date: myzod.date(),
  hour: myzod.string(),
  note: myzod.string(),
  user_id: idSchema,
  created_at: myzod.date(),
  updated_at: myzod.date(),
});

export type GetCalendarRequest = Infer<typeof getCalendarRequest>;
export type GetCalendarResponse = Infer<typeof getCalendarResponse>;
