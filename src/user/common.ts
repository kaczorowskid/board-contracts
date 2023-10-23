import myzod from "myzod";
import { idSchema } from "../common";

export const userBaseSchema = myzod.object({
  id: idSchema,
  email: myzod.string(),
  is_active: myzod.boolean(),
  first_name: myzod.string(),
  last_name: myzod.string(),
  updated_at: myzod.date(),
  created_at: myzod.date(),
});
