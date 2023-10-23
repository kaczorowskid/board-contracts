import myzod from "myzod";
import {
  boardSchema,
  columnSchema,
  commentSchema,
  ticketSchema,
  userSchema,
} from "../common";
import { idSchema } from "../../common";

export const getBoardsWithPaginationResponseSchema = myzod.object({
  rows: myzod.array(
    boardSchema.and(
      myzod.object({
        columns: myzod.array(
          columnSchema.and(
            myzod.object({
              tickets: myzod.array(ticketSchema),
            })
          )
        ),
      })
    )
  ),
  count: myzod.number(),
});

export const getTicketResponseSchema = ticketSchema.and(
  myzod.object({
    comments: myzod.array(
      commentSchema.and(myzod.object({ user: userSchema }))
    ),
  })
);

export const getColumnResponseSchema = myzod.object({
  id: idSchema,
  title: myzod.string(),
  board_id: idSchema,
});
