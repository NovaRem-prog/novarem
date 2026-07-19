"use client";

import Image from "next/image";
import { useTranslations } from "next-intl";

export default function Portfolio() {
  const t = useTranslations("portfolio");

  const projects = [
  "/images/portfolio/1.jpg",
  "/images/portfolio/2.jpg",
  "/images/portfolio/3.jpg",
  "/images/portfolio/4.jpg",
  "/images/portfolio/5.jpg",
  "/images/portfolio/6.jpg",
];

  return (
    <section
      id="portfolio"
      className="py-28 bg-[#FAF8F2]"
    >
      <div className="max-w-7xl mx-auto px-6">

        <div className="text-center">

          <h2 className="text-5xl md:text-6xl font-black">
            {t("title")}
          </h2>

          <p className="mt-5 text-xl text-gray-600">
            {t("subtitle")}
          </p>

        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-16">

          {projects.map((image) => (

  <div
    key={image}
    className="
      group
      overflow-hidden
      rounded-[40px]
      bg-white
      border
      border-white
      shadow-lg
      transition-all
      duration-500
      hover:-translate-y-2
      hover:shadow-2xl
    "
  >

    <div className="relative h-[400px] overflow-hidden">

      <Image
        src={image}
        alt="NovaRem portfolio"
        fill
        className="
          object-cover
          transition-transform
          duration-700
          group-hover:scale-105
        "
      />

    </div>

  </div>

))}

        </div>

        <div className="text-center mt-16">

          <a
  href="#contact"
  className="
    inline-flex
    items-center
    justify-center
    rounded-2xl
    bg-[#D4A017]
    hover:bg-[#b98b12]
    text-white
    font-bold
    text-lg
    px-10
    py-5
    shadow-xl
    transition-all
    duration-300
    hover:-translate-y-1
  "
>
  {t("consultation")}
</a>

        </div>

      </div>
    </section>
  );
}