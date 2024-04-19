import { z } from "zod";

export const formSchemaUser = z.object({
  nama: z
    .string({ invalid_type_error: "Tolong masukan nama" })
    .min(1, { message: "nama setidaknya 1 karakter" }),

  email: z
    .string({ invalid_type_error: "Tolong masukan email" })
    .email({ message: "Masukan email yang valid" }),
  gender: z
    .string({ invalid_type_error: "Tolong masukan gender" })
    .min(1, { message: "gender setidaknya 1 karakter" }),
  status: z
    .string({ invalid_type_error: "Tolong masukan status" })
    .min(1, { message: "status setidaknya 1 karakter" }),
});
