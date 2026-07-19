"use client";

import {useLocale} from "next-intl";
import {usePathname, useRouter} from "@/i18n/navigation";

export default function LanguageSwitcher() {
  const locale = useLocale();
  const router = useRouter();
  const pathname = usePathname();

  const changeLanguage = (newLocale: "uk" | "en") => {
    router.replace(pathname, {locale: newLocale});
  };

  return (
    <div className="hidden md:flex gap-2">
      <button
        onClick={() => changeLanguage("uk")}
        className={locale === "uk" ? "font-bold" : ""}
      >
        UA
      </button>

      <span>|</span>

      <button
        onClick={() => changeLanguage("en")}
        className={locale === "en" ? "font-bold" : ""}
      >
        EN
      </button>
    </div>
  );
}