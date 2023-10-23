import { Infer } from "myzod";
import {
  authorizeUserRequestSchema,
  confirmAccountUserRequestSchema,
  getUserRequestSchema,
  loginUserRequestSchema,
  registerUserRequestSchema,
  resetPasswordUserRequestSchema,
  setNewPasswordUserRequestSchema,
  updatePasswordRequestSchema,
  updateUserRequestSchema,
} from "../schemas";

export type RegisterUserRequest = Infer<typeof registerUserRequestSchema>;
export type LoginUserRequest = Infer<typeof loginUserRequestSchema>;
export type GetUserRequest = Infer<typeof getUserRequestSchema>;
export type ResetPasswordUserRequest = Infer<
  typeof resetPasswordUserRequestSchema
>;
export type SetNewPasswordUserRequest = Infer<
  typeof setNewPasswordUserRequestSchema
>;
export type ConfirmAccountUserRequest = Infer<
  typeof confirmAccountUserRequestSchema
>;
export type AuthorizeUserRequest = Infer<typeof authorizeUserRequestSchema>;
export type UpdateUserRequest = Infer<typeof updateUserRequestSchema>;
export type UpdatePasswordRequest = Infer<typeof updatePasswordRequestSchema>;
