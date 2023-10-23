import myzod from "myzod";
import { userBaseSchema } from "../common";

export const registerUserResponseSchema = userBaseSchema.and(
  myzod.object({
    password: myzod.string().optional(),
  })
);

export const loginUserResponseSchema = userBaseSchema.and(
  myzod.object({
    password: myzod.string().optional(),
    token: myzod.string().optional(),
  })
);
