import myzod, { Infer } from "myzod";

export const getCalendarRequest = myzod.object({
  user_id: myzod.string(),
  date: myzod.string(),
});

export const getCalendarResponse = myzod.object({
  id: myzod.string(),
  start_date: myzod.date(),
  hour: myzod.string(),
  note: myzod.string(),
  user_id: myzod.string(),
  created_at: myzod.date(),
  updated_at: myzod.date(),
});

export type GetCalendarRequest = Infer<typeof getCalendarRequest>;
export type GetCalendarResponse = Infer<typeof getCalendarResponse>;
