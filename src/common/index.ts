import myzod from "myzod";
import validator from "validator";

export const idSchema = myzod
  .string()
  .withPredicate(validator.isUUID, "default_site_id must be an uuid");

export const onlyIdSchema = myzod.object({
  id: idSchema,
});

export const paginationSchema = myzod.object({
  user_id: idSchema,
  limit: myzod.number(),
  offset: myzod.number(),
  search_value: myzod.string(),
});

export const updateResponseSchema = myzod.object({
  result: myzod.boolean(),
});

export const removeResponseSchema = myzod.object({
  deleted: myzod.boolean(),
});

export const editResponseSchema = myzod.object({
  edited: myzod.boolean(),
});

export const resultResponseSchema = myzod.object({
  result: myzod.string(),
});
