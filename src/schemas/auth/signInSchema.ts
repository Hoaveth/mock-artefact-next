import { z } from 'zod';

export const SignInSchema = z.object({
  email: z.string().email(),
  password: z
    .string()
    .min(3, { message: 'Must be 3 or more characters long' })
    .max(20, { message: 'Must be 20 or less characters long' }),
});

export type SignInSchemaType = z.infer<typeof SignInSchema>;
