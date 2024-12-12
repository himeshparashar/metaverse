import { z } from "zod";

export const SignupSchema = z.object({
  username: z.string().email(),
  password: z.string().min(8),
  type: z.enum(["user", "admin"]),
});

export const SigninSchema = z.object({
  username: z.string().email(),
  password: z.string().min(8),
});

export const UpdateMetadataSchema = z.object({
  avatarId: z.string().min(1),
});

export const CreateSpaceSchema = z.object({
  name: z.string().min(1),
  dimensions: z.string().regex(/[0-9]{1,4}x[0-9]{1,4}/),
  mapId: z.string().min(1),
});

export const AddElementSchema = z.object({
  spaceId: z.string(),
  elementId: z.string(),
  x: z.number(),
  y: z.number(),
});

export const CreateElementSchema = z.object({
  imageUrl: z.string(),
  width: z.number(),
  height: z.number(),
  static: z.boolean(),
});

export const UpdateElementSchema = z.object({
  imageUrl: z.string(),
});

export const CreateAvatarSchema = z.object({
  name: z.string(),
  imageUrl: z.string(),
});

export const CreateMapSchema = z.object({
  thumbnailUrl: z.string(),
  dimensions: z.string().regex(/[0-9]{1,4}x[0-9]{1,4}/),
  defaultElementId: z.array(
    z.object({
      elementId: z.string(),
      x: z.number(),
      y: z.number(),
    })
  ),
});