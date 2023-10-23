import myzod from "myzod";
import { idSchema } from "../common";

export const recentBoardsSchema = myzod.object({
  data: myzod.array(
    myzod.object({
      id: idSchema,
      title: myzod.string(),
      description: myzod.string(),
      user_id: myzod.string(),
      created_at: myzod.date(),
      updated_at: myzod.date(),
    })
  ),
  count: myzod.number(),
});

export const recentTicketsSchema = myzod.object({
  data: myzod.array(
    myzod.object({
      id: idSchema,
      title: myzod.string(),
      description: myzod.string(),
      prio: myzod.string(),
      order: myzod.number(),
      column_id: idSchema,
      user_id: idSchema,
      created_at: myzod.date(),
      updated_at: myzod.date(),
      comments: myzod.unknown(),
    })
  ),
  count: myzod.number(),
});

export const calendarSchema = myzod.array(
  myzod.object({
    id: idSchema,
    start_date: myzod.string(),
    hour: myzod.string(),
    note: myzod.string(),
    user_id: idSchema,
    created_at: myzod.date(),
    updated_at: myzod.date(),
  })
);
