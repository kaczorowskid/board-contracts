import myzod from "myzod";

export const idSchema = myzod.string();

export const onlyIdSchema = myzod.object({
  id: idSchema,
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
