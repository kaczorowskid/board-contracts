import myzod from "myzod";
import { idSchema, onlyIdSchema } from "../../common";

export const getCalendarRequestSchema = myzod.object({
  user_id: idSchema,
  date: myzod.string(),
});

export const createNoteRequestSchema = myzod.object({
  user_id: idSchema,
  start_date: myzod.string(),
  is_done: myzod.boolean().optional(),
  note: myzod.string(),
});

export const editNoteRequestSchema = myzod.object({
  id: idSchema,
  start_date: myzod.string(),
  is_done: myzod.boolean().optional(),
  note: myzod.string(),
});

export const updateNoteStatusRequestSchema = myzod.object({
  id: idSchema,
  is_done: myzod.boolean(),
});

export const getNotesByDateRequestSchema = myzod.object({
  user_id: idSchema,
  date: myzod.string(),
});

export const getNoteRequestSchema = onlyIdSchema;
export const removeNoteRequestSchema = onlyIdSchema;
