import myzod, { Infer } from "myzod";
import {
  editResponseSchema,
  idSchema,
  onlyIdSchema,
  removeResponseSchema,
} from "../common";

export const getCalendarRequest = myzod.object({
  user_id: idSchema,
  date: myzod.string(),
});

export const getCalendarResponse = myzod.object({
  id: idSchema,
  start_date: myzod.date(),
  hour: myzod.string(),
  note: myzod.string(),
  user_id: idSchema,
  created_at: myzod.date(),
  updated_at: myzod.date(),
});

export const createNoteRequest = myzod.object({
  user_id: idSchema,
  start_date: myzod.string(),
  hour: myzod.string(),
  note: myzod.string(),
});

export const createNoteResponse = myzod.object({
  id: idSchema,
  start_date: myzod.date(),
  hour: myzod.string(),
  note: myzod.string(),
  user_id: idSchema,
  created_at: myzod.date(),
  updated_at: myzod.date(),
});

export const editNoteRequest = myzod.object({
  id: idSchema,
  start_date: myzod.string(),
  hour: myzod.string(),
  note: myzod.string(),
});

export const editNoteResponse = editResponseSchema;

export const getNotesByDateRequest = myzod.object({
  user_id: idSchema,
  date: myzod.string().nullable(),
});

export const getNotesByDateResponse = myzod.object({
  id: idSchema,
  start_date: myzod.date(),
  hour: myzod.string(),
  note: myzod.string(),
  user_id: idSchema,
  created_at: myzod.date(),
  updated_at: myzod.date(),
});

export const getNoteRequest = onlyIdSchema;

export const getNoteResponse = myzod.object({
  id: idSchema,
  start_date: myzod.date(),
  hour: myzod.string(),
  note: myzod.string(),
  user_id: idSchema,
  created_at: myzod.date(),
  updated_at: myzod.date(),
});

export const removeNoteRequest = onlyIdSchema;

export const removeNoteResponse = removeResponseSchema;

export type GetCalendarRequest = Infer<typeof getCalendarRequest>;
export type GetCalendarResponse = Infer<typeof getCalendarResponse>;
export type CreateNoteRequest = Infer<typeof createNoteRequest>;
export type CreateNoteResponse = Infer<typeof createNoteResponse>;
export type EditNoteRequest = Infer<typeof editNoteRequest>;
export type EditNoteResponse = Infer<typeof editNoteResponse>;
export type GetNotesByDateRequest = Infer<typeof getNotesByDateRequest>;
export type GetNotesByDateResponse = Infer<typeof getNotesByDateResponse>;
export type GetNoteRequest = Infer<typeof getNotesByDateResponse>;
export type GetNoteResponse = Infer<typeof getNotesByDateResponse>;
export type RemoveNoteRequest = Infer<typeof removeNoteRequest>;
export type RemoveNoteResponse = Infer<typeof removeNoteResponse>;
