import { Infer } from "myzod";
import {
  boardSchema,
  columnSchema,
  ticketSchema,
  wholeBoardSchema,
} from "../common";
import {
  editResponseSchema,
  removeResponseSchema,
  resultResponseSchema,
  updateResponseSchema,
} from "../../common";
import {
  getBoardsWithPaginationResponseSchema,
  getColumnResponseSchema,
  getTicketResponseSchema,
} from "../schemas";

export type GetBoardResponse = Infer<typeof wholeBoardSchema>;
export type UpdateBoardResponse = Infer<typeof updateResponseSchema>;
export type CreateColumnResponse = Infer<typeof columnSchema>;
export type RemoveColumnResponse = Infer<typeof removeResponseSchema>;
export type CreateTicketResponse = Infer<typeof ticketSchema>;
export type CreateBoardResponse = Infer<typeof boardSchema>;
export type EditBoardResponse = Infer<typeof editResponseSchema>;
export type RemoveBoardResponse = Infer<typeof removeResponseSchema>;
export type EditTicketResponse = Infer<typeof editResponseSchema>;
export type RemoveTicketResponse = Infer<typeof removeResponseSchema>;
export type GetTicketResponse = Infer<typeof getTicketResponseSchema>;
export type GetColumnResponse = Infer<typeof getColumnResponseSchema>;
export type EditColumnResponse = Infer<typeof editResponseSchema>;
export type ConfirmShareTokenResponse = Infer<typeof resultResponseSchema>;
export type CreateShareTokenResponse = Infer<typeof resultResponseSchema>;
export type GetBoardsWithPaginationResponse = Infer<
  typeof getBoardsWithPaginationResponseSchema
>;
