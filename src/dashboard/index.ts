import myzod, { Infer } from "myzod";
import { idSchema } from "../common";
import {
  calendarSchema,
  recentBoardsSchema,
  recentTicketsSchema,
} from "./common";

export const getDashboardRequest = myzod.object({
  user_id: idSchema,
  date: myzod.string().optional(),
});

export const getDashboardResponseSchema = myzod.object({
  recentBoards: recentBoardsSchema,
  recentTickets: recentTicketsSchema,
  calendar: calendarSchema,
});

export type GetDashboardRequest = Infer<typeof getDashboardRequest>;
export type GetDashboardResponse = Infer<typeof getDashboardResponseSchema>;
export type DashboardBaseRequest = Infer<typeof getDashboardResponseSchema>;
