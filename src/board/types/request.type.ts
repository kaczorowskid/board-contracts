import { Infer } from "myzod";
import {
  confirmShareTokenRequestSchema,
  createBoardRequestSchema,
  createColumnRequestSchema,
  createShareTokenRequestSchema,
  createTicketRequestSchema,
  editBoardRequestSchema,
  editColumnRequestSchema,
  editTicketRequestSchema,
  getBoardRequestSchema,
  getBoardsWithPaginationRequestSchema,
  getColumnRequestSchema,
  getTicketRequestSchema,
  removeBoardRequestSchema,
  removeColumnRequestSchema,
  removeTicketRequestSchema,
  updateBoardRequestSchema,
} from "../schemas";
import { wholeBoardSchema } from "../common";

export type GetBoardRequest = Infer<typeof getBoardRequestSchema>;
export type UpdateBoardRequest = Infer<typeof updateBoardRequestSchema>;
export type CreateColumnRequest = Infer<typeof createColumnRequestSchema>;
export type RemoveColumnRequest = Infer<typeof removeColumnRequestSchema>;
export type CreateTicketRequest = Infer<typeof createTicketRequestSchema>;
export type CreateBoardRequest = Infer<typeof createBoardRequestSchema>;
export type EditBoardRequest = Infer<typeof editBoardRequestSchema>;
export type RemoveBoardRequest = Infer<typeof removeBoardRequestSchema>;
export type EditTicketRequest = Infer<typeof editTicketRequestSchema>;
export type RemoveTicketRequest = Infer<typeof removeTicketRequestSchema>;
export type GetTicketRequest = Infer<typeof getTicketRequestSchema>;
export type GetColumnRequest = Infer<typeof getColumnRequestSchema>;
export type EditColumnRequest = Infer<typeof editColumnRequestSchema>;
export type GetBoardsWithPaginationRequest = Infer<
  typeof getBoardsWithPaginationRequestSchema
>;

export type ConfirmShareTokenRequest = Infer<
  typeof confirmShareTokenRequestSchema
>;
export type CreateShareTokenRequest = Infer<
  typeof createShareTokenRequestSchema
>;
export type BoardBaseRequest = Infer<typeof wholeBoardSchema>;
