import myzod, { Infer } from "myzod";
import { idSchema } from "../common";

export const userSchema = myzod.object({
  id: idSchema,
  email: myzod.string(),
  is_active: myzod.boolean(),
  first_name: myzod.string(),
  last_name: myzod.string(),
  created_at: myzod.date(),
  updated_at: myzod.date(),
});

export const commentSchema = myzod.object({
  id: idSchema,
  text: myzod.string(),
  ticket_id: idSchema,
  user_id: idSchema,
  created_at: myzod.date(),
  updated_at: myzod.date(),
});

export const ticketSchema = myzod.object({
  id: idSchema,
  title: myzod.string(),
  description: myzod.string(),
  prio: myzod.literals("high", "medium", "low"),
  order: myzod.number(),
  column_id: idSchema,
  user_id: idSchema,
  created_at: myzod.date(),
  updated_at: myzod.date(),
});

export const columnSchema = myzod.object({
  id: idSchema,
  title: myzod.string(),
  board_id: idSchema,
  created_at: myzod.date(),
  updated_at: myzod.date(),
});

export const boardSchema = myzod.object({
  id: idSchema,
  title: myzod.string(),
  description: myzod.string(),
  user_id: idSchema,
  created_at: myzod.date(),
  updated_at: myzod.date(),
});

export const wholeBoardSchema = boardSchema.and(
  myzod.object({
    columns: myzod.array(
      columnSchema.and(
        myzod.object({
          tickets: myzod.array(
            ticketSchema.and(
              myzod.object({
                comments: myzod.array(commentSchema),
              })
            )
          ),
        })
      )
    ),
  })
);
