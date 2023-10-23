import { Infer } from "myzod";
import {
  createNoteRequestSchema,
  editNoteRequestSchema,
  getCalendarRequestSchema,
  getNoteRequestSchema,
  getNotesByDateRequestSchema,
  removeNoteRequestSchema,
} from "../schemas";

export type GetCalendarRequest = Infer<typeof getCalendarRequestSchema>;
export type CreateNoteRequest = Infer<typeof createNoteRequestSchema>;
export type EditNoteRequest = Infer<typeof editNoteRequestSchema>;
export type GetNotesByDateRequest = Infer<typeof getNotesByDateRequestSchema>;
export type GetNoteRequest = Infer<typeof getNoteRequestSchema>;
export type RemoveNoteRequest = Infer<typeof removeNoteRequestSchema>;
