"use client";

import { useTranslations } from "next-intl";

export default function Footer() {
  const t = useTranslations("footer");

  return (
    <footer className="bg-[#1F1F1F] text-white py-16 border-t border-[#D4A017]/20">
      <div className="max-w-7xl mx-auto px-6">

        <h2 className="text-4xl font-black text-[#D4A017]">
          NovaRem
        </h2>

        <p className="mt-4 text-gray-300 max-w-md leading-7">
          {t("description")}
        </p>

        <div className="mt-10 border-t border-white/10 pt-6 text-gray-400">
          © 2026 NovaRem • {t("rights")}
        </div>

      </div>
    </footer>
  );
}