import myzod from "myzod";
import { idSchema, onlyIdSchema, paginationSchema } from "../../common";
import { prioLiteral, wholeBoardSchema } from "../common";

export const getBoardRequestSchema = onlyIdSchema;
export const updateBoardRequestSchema = wholeBoardSchema;
export const createColumnRequestSchema = myzod.object({
  title: myzod.string().min(3).max(200),
  board_id: idSchema,
});
export const removeColumnRequestSchema = onlyIdSchema;
export const createTicketRequestSchema = myzod.object({
  title: myzod.string().min(3).max(200),
  description: myzod.string().max(500),
  prio: prioLiteral,
  column_id: idSchema,
  user_id: idSchema,
});
export const getBoardsWithPaginationRequestSchema = paginationSchema;
export const createBoardRequestSchema = myzod.object({
  title: myzod.string().min(3).max(200),
  description: myzod.string().max(500),
  user_id: idSchema,
});
export const editBoardRequestSchema = myzod.object({
  id: idSchema,
  title: myzod.string().min(3).max(200),
  description: myzod.string().max(500),
});
export const removeBoardRequestSchema = onlyIdSchema;
export const editTicketRequestSchema = myzod.object({
  id: idSchema,
  title: myzod.string().min(3).max(200),
  description: myzod.string().max(500),
  prio: prioLiteral,
});
export const removeTicketRequestSchema = onlyIdSchema;
export const getTicketRequestSchema = onlyIdSchema;
export const getColumnRequestSchema = onlyIdSchema;
export const editColumnRequestSchema = myzod.object({
  id: idSchema,
  title: myzod.string().min(3).max(200),
});
export const confirmShareTokenRequestSchema = myzod.object({
  token: myzod.string(),
  user_id: idSchema,
});
export const createShareTokenRequestSchema = myzod.object({
  board_id: idSchema,
});
