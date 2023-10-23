import myzod from "myzod";
import { idSchema, onlyIdSchema } from "../../common";

export const registerUserRequestSchema = myzod.object({
  email: myzod.string(),
  password: myzod.string(),
});

export const loginUserRequestSchema = myzod.object({
  email: myzod.string(),
  password: myzod.string(),
});

export const getUserRequestSchema = onlyIdSchema;

export const resetPasswordUserRequestSchema = myzod.object({
  email: myzod.string(),
});

export const setNewPasswordUserRequestSchema = myzod.object({
  token: myzod.string().nullable(),
  password: myzod.string(),
  oldPassword: myzod.string(),
});

export const confirmAccountUserRequestSchema = myzod.object({
  token: myzod.string().nullable(),
});

export const authorizeUserRequestSchema = myzod.object({});

export const updateUserRequestSchema = myzod.object({
  id: idSchema,
  first_name: myzod.string(),
  last_name: myzod.string(),
});

export const updatePasswordRequestSchema = myzod.object({
  id: idSchema,
  old_password: myzod.string(),
  new_password: myzod.string(),
});
