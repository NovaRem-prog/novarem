"use client";

import Image from "next/image";
import { useTranslations } from "next-intl";
import LanguageSwitcher from "./LanguageSwitcher";

export default function Header() {
  const t = useTranslations("header");

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-white/20 bg-white/80 backdrop-blur-xl shadow-sm">
      <div className="mx-auto flex h-24 max-w-7xl items-center justify-between px-6">

        {/* Logo */}

        <a
          href="#"
          className="flex items-center transition-transform duration-300 hover:scale-105"
        >
          <Image
            src="/images/icons/logo.jpg"
            alt="NovaRem"
            width={180}
            height={60}
            className="h-16 w-auto"
            priority
          />
        </a>

        {/* Navigation */}

        <nav className="hidden lg:flex items-center gap-10">

          <a
            href="#"
            className="font-semibold text-[#1F1F1F] transition hover:text-[#D4A017]"
          >
            {t("home")}
          </a>

          <a
            href="#services"
            className="font-semibold text-[#1F1F1F] transition hover:text-[#D4A017]"
          >
            {t("services")}
          </a>

          <a
            href="#portfolio"
            className="font-semibold text-[#1F1F1F] transition hover:text-[#D4A017]"
          >
            {t("portfolio")}
          </a>

          <a
            href="#contact"
            className="font-semibold text-[#1F1F1F] transition hover:text-[#D4A017]"
          >
            {t("contact")}
          </a>

        </nav>

        {/* Right side */}

        <div className="flex items-center gap-5">

          <LanguageSwitcher />

          <a
            href="#contact"
            className="
              rounded-2xl
              bg-[#D4A017]
              px-6
              py-3
              font-bold
              text-white
              shadow-lg
              transition-all
              duration-300
              hover:-translate-y-1
              hover:bg-[#b98b12]
              hover:shadow-xl
            "
          >
            {t("consultation")}
          </a>

        </div>

      </div>
    </header>
  );
}