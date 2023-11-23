import myzod from "myzod";
import { idSchema, onlyIdSchema } from "../../common";
import validator from "validator";

export const registerUserRequestSchema = myzod.object({
  email: myzod.string().withPredicate(validator.isEmail, "expected email"),
  password: myzod.string().min(3).max(40),
  first_name: myzod.string().min(3).max(25),
  last_name: myzod.string().min(3).max(25),
});

export const loginUserRequestSchema = myzod.object({
  email: myzod.string().withPredicate(validator.isEmail, "expected email"),
  password: myzod.string().min(3).max(40),
});

export const getUserRequestSchema = onlyIdSchema;

export const resetPasswordUserRequestSchema = myzod.object({
  email: myzod.string().withPredicate(validator.isEmail, "expected email"),
});

export const setNewPasswordUserRequestSchema = myzod.object({
  token: myzod.string().nullable(),
  password: myzod.string().min(3).max(40),
  oldPassword: myzod.string().min(3).max(40),
});

export const confirmAccountUserRequestSchema = myzod.object({
  token: myzod.string().nullable(),
});

export const authorizeUserRequestSchema = myzod.object({
  token: myzod.string().optional(),
});

export const updateUserRequestSchema = myzod.object({
  id: idSchema,
  first_name: myzod.string().min(3).max(25),
  last_name: myzod.string().min(3).max(25),
});

export const updatePasswordRequestSchema = myzod.object({
  id: idSchema,
  old_password: myzod.string().min(3).max(40),
  new_password: myzod.string().min(3).max(40),
});
