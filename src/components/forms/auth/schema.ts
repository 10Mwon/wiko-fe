import { useTranslations } from "next-intl";
import { z } from "zod";

export function useSignUpSchema() {
  const t = useTranslations("validation");
  return z
    .object({
      name: z.string().min(1, t("name_required")),
      nation: z.string().min(1, t("nation_required")),
      id: z
        .string()
        .min(6, t("id_min"))
        .max(16, t("id_max"))
        .regex(/^[a-z0-9]+$/, t("id_regex")),
      password: z.string().min(6, t("password_min")),
      passwordConfirm: z.string(),
    })
    .refine((data) => data.password === data.passwordConfirm, {
      message: t("passwordConfirm_match"),
      path: ["passwordConfirm"],
    });
}
