import myzod, { Infer } from "myzod";
import {
  editResponseSchema,
  idSchema,
  onlyIdSchema,
  removeResponseSchema,
} from "../common";
import {
  boardSchema,
  columnSchema,
  commentSchema,
  ticketSchema,
  userSchema,
  wholeBoardSchema,
} from "./utils";

export const getBoardRequest = myzod.object({
  id: idSchema,
});

export const getBoardResponse = wholeBoardSchema;

export const updateBoardRequest = wholeBoardSchema;

export const updateBoardResponse = myzod.object({
  result: myzod.boolean(),
});

const createColumnRequest = myzod.pick(columnSchema, ["title", "board_id"]);

export const createColumnResponse = columnSchema;

export const removeColumnRequest = myzod.object({
  id: idSchema,
});

export const removeColumnResponse = myzod.object({
  deleted: myzod.boolean(),
});

export const createTicketRequest = myzod.pick(ticketSchema, [
  "title",
  "description",
  "prio",
  "column_id",
  "user_id",
]);

export const createTicketResponse = ticketSchema;

export const getBoardsWithPaginationRequest = myzod.object({
  user_id: idSchema,
  limit: myzod.number(),
  offset: myzod.number(),
  search_value: myzod.string(),
});

export const getBoardsWithPaginationResponse = boardSchema.and(
  myzod.object({
    columns: myzod.array(
      columnSchema.and(
        myzod.object({
          tickets: myzod.array(ticketSchema),
        })
      )
    ),
  })
);

export const createBoardRequest = myzod.object({
  title: myzod.string(),
  description: myzod.string(),
  user_id: idSchema,
});

export const createBoardResponse = myzod.object({
  id: idSchema,
  title: myzod.string(),
  user_id: idSchema,
  created_ta: myzod.date(),
  updated_at: myzod.date(),
});

export const editBoardRequest = myzod.object({
  id: idSchema,
  title: myzod.string(),
  description: myzod.string(),
});

export const editBoardResponse = editResponseSchema;

export const removeBoardRequest = onlyIdSchema;

export const removeBoardResponse = removeResponseSchema;

export const editTicketRequest = myzod.object({
  id: idSchema,
  title: myzod.string(),
  description: myzod.string(),
  prio: myzod.literals("high", "medium", "low"),
});

export const editTicketResponse = editResponseSchema;

export const removeTicketRequest = onlyIdSchema;

export const removeTicketResponse = removeResponseSchema;

export const getTicketRequest = onlyIdSchema;

export const getTicketResponse = myzod.array(
  ticketSchema.and(
    myzod.object({
      comments: commentSchema.and(myzod.object({ user: userSchema })),
    })
  )
);

export const getColumnRequest = onlyIdSchema;

export const getColumnResponse = myzod.object({
  id: idSchema,
  title: myzod.string(),
  board_id: idSchema,
});

export const editColumnRequest = myzod.object({
  id: idSchema,
  title: myzod.string(),
});

export const editColumnResponse = editResponseSchema;

export const confirmShareTokenRequest = myzod.object({
  token: myzod.string(),
  user_id: idSchema,
});

export const confirmShareTokenResponse = myzod.object({
  result: myzod.string(),
});

export const createShareTokenRequest = myzod.object({
  board_id: idSchema,
});

export const createShareTokenResponse = myzod.object({
  result: myzod.string(),
});

export type GetBoardRequest = Infer<typeof getBoardRequest>;
export type GetBoardResponse = Infer<typeof getBoardResponse>;
export type UpdateBoardRequest = Infer<typeof updateBoardRequest>;
export type UpdateBoardResponse = Infer<typeof updateBoardResponse>;
export type CreateColumnRequest = Infer<typeof createColumnRequest>;
export type CreateColumnResponse = Infer<typeof createColumnResponse>;
export type RemoveColumnRequest = Infer<typeof removeColumnRequest>;
export type RemoveColumnResponse = Infer<typeof removeColumnResponse>;
export type CreateTicketRequest = Infer<typeof createTicketRequest>;
export type CreateTicketResponse = Infer<typeof createTicketResponse>;
export type GetBoardsWithPaginationRequest = Infer<
  typeof getBoardsWithPaginationRequest
>;
export type GetBoardsWithPaginationResponse = Infer<
  typeof getBoardsWithPaginationResponse
>;
export type CreateBoardRequest = Infer<typeof createBoardRequest>;
export type CreateBoardResponse = Infer<typeof createBoardResponse>;
export type EditBoardRequest = Infer<typeof editBoardRequest>;
export type EditBoardResponse = Infer<typeof editBoardResponse>;
export type RemoveBoardRequest = Infer<typeof removeBoardRequest>;
export type RemoveBoardResponse = Infer<typeof removeBoardResponse>;
export type EditTicketRequest = Infer<typeof editTicketRequest>;
export type EditTicketResponse = Infer<typeof editTicketResponse>;
export type RemoveTicketRequest = Infer<typeof removeTicketRequest>;
export type RemoveTicketResponse = Infer<typeof removeTicketResponse>;
export type GetTicketRequest = Infer<typeof getTicketRequest>;
export type GetTicketResponse = Infer<typeof getTicketResponse>;
export type GetColumnRequest = Infer<typeof getColumnRequest>;
export type GetColumnResponse = Infer<typeof getColumnResponse>;
export type EditColumnRequest = Infer<typeof editColumnRequest>;
export type EditColumnResponse = Infer<typeof editColumnResponse>;
export type ConfirmShareTokenRequest = Infer<typeof confirmShareTokenRequest>;
export type ConfirmShareTokenResponse = Infer<typeof confirmShareTokenResponse>;
export type CreateShareTokenRequest = Infer<typeof createShareTokenRequest>;
export type CreateShareTokenResponse = Infer<typeof createShareTokenResponse>;
