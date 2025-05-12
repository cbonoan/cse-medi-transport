import { z } from "zod";

export const SUPPORTED_FORMATS = [
  "application/pdf",
  "application/msword",
  "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
];

export type ApplicationFormData = {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  experience: string;
  availability: string;
  resume: File | null;
};

export const applicationSchema = z.object({
  firstName: z.string().min(1, "First name is required"),
  lastName: z.string().min(1, "Last name is required"),
  email: z.string().email("Please enter a valid email"),
  phone: z.string().regex(/^[0-9]{10}$/, "Phone number must be 10 digits"),
  experience: z.string().min(1, "Experience is required"),
  availability: z.string().min(1, "Availability is required"),
  resume: z.union([z.instanceof(File), z.null()]).superRefine((file, ctx) => {
    if (file === null) {
      ctx.addIssue({
        code: z.ZodIssueCode.custom,
        message: "Resume is required",
      });

      return z.NEVER;
    }

    if (file.size > 2000000) {
      ctx.addIssue({
        code: z.ZodIssueCode.custom,
        message: "The file is too large",
      });

      return z.NEVER;
    }

    if (!SUPPORTED_FORMATS.includes(file.type)) {
      ctx.addIssue({
        code: z.ZodIssueCode.custom,
        message: "Unsupported File Format",
      });

      return z.NEVER;
    }
  }),
});
