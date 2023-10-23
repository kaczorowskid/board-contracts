import { Infer } from "myzod";
import {
  loginUserResponseSchema,
  registerUserResponseSchema,
} from "../schemas";
import { userBaseSchema } from "../common";
import { resultResponseSchema } from "../../common";

export type RegisterUserResponse = Infer<typeof registerUserResponseSchema>;
export type LoginUserResponse = Infer<typeof loginUserResponseSchema>;
export type GetUserResponse = Infer<typeof userBaseSchema>;
export type ResetPasswordUserResponse = Infer<typeof resultResponseSchema>;
export type SetNewPasswordUserResponse = Infer<typeof resultResponseSchema>;
export type ConfirmAccountUserResponse = Infer<typeof resultResponseSchema>;
export type AuthorizeUserResponse = Infer<typeof userBaseSchema>;
export type UpdateUserResponse = Infer<typeof userBaseSchema>;
export type UpdatePasswordResponse = Infer<typeof resultResponseSchema>;
