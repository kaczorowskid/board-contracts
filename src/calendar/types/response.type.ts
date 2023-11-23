import { Infer } from "myzod";
import { calendarBaseSchema } from "../common";
import {
  editResponseSchema,
  removeResponseSchema,
  updateResponseSchema,
} from "../../common";

export type GetCalendarResponse = Infer<typeof calendarBaseSchema>;
export type CreateNoteResponse = Infer<typeof calendarBaseSchema>;
export type EditNoteResponse = Infer<typeof editResponseSchema>;
export type GetNotesByDateResponse = Infer<typeof calendarBaseSchema>;
export type GetNoteResponse = Infer<typeof calendarBaseSchema>;
export type RemoveNoteResponse = Infer<typeof removeResponseSchema>;
export type UpdateNoteStatusResponse = Infer<typeof updateResponseSchema>;
