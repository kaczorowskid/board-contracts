import myzod, { Infer } from "myzod";
import { idSchema, onlyIdSchema } from "../common";

export const registerUserRequest = myzod.object({
  email: myzod.string(),
  password: myzod.string(),
});

export const registerUserResponse = myzod.object({
  id: idSchema,
  email: myzod.string(),
  is_active: myzod.boolean(),
  first_name: myzod.string(),
  last_name: myzod.string(),
  password: myzod.string().optional(),
});

export const loginUserRequest = myzod.object({
  email: myzod.string(),
  password: myzod.string(),
});

export const loginUserResponse = myzod.object({
  id: idSchema,
  email: myzod.string(),
  is_active: myzod.boolean(),
  first_name: myzod.string(),
  last_name: myzod.string(),
  password: myzod.string().optional(),
  token: myzod.string().optional(),
});

export const getUserRequest = onlyIdSchema;

export const getUserResponse = myzod.object({
  id: idSchema,
  email: myzod.string(),
  is_active: myzod.boolean(),
  first_name: myzod.string(),
  last_name: myzod.string(),
});

export const resetPasswordUserRequest = myzod.object({
  email: myzod.string(),
});

export const resetPasswordUserResponse = myzod.object({
  result: myzod.string(),
});

export const setNewPasswordUserRequest = myzod.object({
  token: myzod.string().nullable(),
  password: myzod.string(),
  oldPassword: myzod.string(),
});

export const setNewPasswordUserResponse = myzod.object({
  result: myzod.string(),
});

export const confirmAccountUserRequest = myzod.object({
  token: myzod.string().nullable(),
});

export const confirmAccountUserResponse = myzod.object({
  result: myzod.string(),
});

export const authorizeUserRequest = myzod.object({});

export const authorizeUserResponse = myzod.object({
  id: idSchema,
  email: myzod.string(),
  is_active: myzod.boolean(),
  first_name: myzod.string(),
  last_name: myzod.string(),
});

export const updateUserRequest = myzod.object({
  id: idSchema,
  first_name: myzod.string(),
  last_name: myzod.string(),
});

export const updateUserResponse = myzod.object({
  id: idSchema,
  email: myzod.string(),
  is_active: myzod.boolean(),
  first_name: myzod.string(),
  last_name: myzod.string(),
});

export const updatePasswordRequest = myzod.object({
  id: idSchema,
  old_password: myzod.string(),
  new_password: myzod.string(),
});

export const updatePasswordResponse = myzod.object({
  result: myzod.string(),
});

export type RegisterUserRequest = Infer<typeof registerUserRequest>;
export type RegisterUserResponse = Infer<typeof registerUserResponse>;
export type LoginUserRequest = Infer<typeof loginUserRequest>;
export type LoginUserResponse = Infer<typeof loginUserResponse>;
export type GetUserRequest = Infer<typeof getUserRequest>;
export type GetUserResponse = Infer<typeof getUserResponse>;
export type ResetPasswordUserRequest = Infer<typeof resetPasswordUserRequest>;
export type ResetPasswordUserResponse = Infer<typeof resetPasswordUserResponse>;
export type SetNewPasswordUserRequest = Infer<typeof setNewPasswordUserRequest>;
export type SetNewPasswordUserResponse = Infer<
  typeof setNewPasswordUserResponse
>;
export type ConfirmAccountUserRequest = Infer<typeof confirmAccountUserRequest>;
export type ConfirmAccountUserResponse = Infer<
  typeof confirmAccountUserResponse
>;
export type AuthorizeUserRequest = Infer<typeof authorizeUserRequest>;
export type AuthorizeUserResponse = Infer<typeof authorizeUserResponse>;
export type UpdateUserRequest = Infer<typeof updateUserRequest>;
export type UpdateUserResponse = Infer<typeof updateUserResponse>;
export type UpdatePasswordRequest = Infer<typeof updatePasswordRequest>;
export type UpdatePasswordResponse = Infer<typeof updatePasswordResponse>;
