"use client";

import { useTranslations } from "next-intl";

export default function Hero() {
  const t = useTranslations("hero");

  return (
    <section className="relative overflow-hidden bg-[#FAF8F2] pt-28 lg:pt-36">

      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,#D4A01720,transparent_45%)]" />

      <div className="relative max-w-7xl mx-auto px-6">

        <div className="grid lg:grid-cols-2 gap-16 items-center min-h-[85vh]">

          <div>

            <span className="inline-flex items-center rounded-full border border-[#D4A017] bg-white px-5 py-2 text-sm font-semibold tracking-wide text-[#D4A017] shadow-sm">
              {t("badge")}
            </span>

            <h1 className="mt-8 text-5xl md:text-6xl xl:text-7xl font-black leading-[1.05] text-[#1F1F1F]">
              {t("title1")}
              <br />
              <span className="text-[#D4A017]">
                {t("title2")}
              </span>
              <br />
              {t("title3")}
            </h1>

            <p className="mt-8 max-w-xl text-lg md:text-xl leading-9 text-gray-600">
              {t("description")}
            </p>

            <div className="mt-12 flex flex-wrap gap-5">

              <button
                className="
                rounded-2xl
                bg-[#D4A017]
                hover:bg-[#b98b12]
                px-10
                py-5
                text-white
                font-bold
                text-lg
                shadow-xl
                transition-all
                duration-300
                hover:-translate-y-1
                "
              >
                {t("calculate")}
              </button>

              <button
                className="
                rounded-2xl
                border-2
                border-[#D4A017]
                bg-white
                hover:bg-[#D4A017]
                hover:text-white
                px-10
                py-5
                text-lg
                font-bold
                transition-all
                duration-300
                "
              >
                {t("portfolio")}
              </button>

            </div>

            

          </div>

          <div>

            <div className="relative overflow-hidden rounded-[40px] shadow-2xl">

              <video
                autoPlay
                muted
                loop
                playsInline
                className="w-full h-[650px] object-cover"
              >
                <source
                  src="/videos/reclam.mp4"
                  type="video/mp4"
                />
              </video>

              <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent" />
              <div className="absolute bottom-8 left-8 right-8 lg:right-auto lg:w-[320px] rounded-3xl bg-white/95 backdrop-blur-md p-6 shadow-2xl border border-white/40">

  <h3 className="text-xl font-bold text-[#1F1F1F] mb-5">
  {t("cardTitle")}
</h3>

  <div className="space-y-4">

    <div className="flex items-center gap-3">
      <div className="w-3 h-3 rounded-full bg-[#D4A017]" />
      <span className="text-gray-700 font-medium">
        {t("card1")}
      </span>
    </div>

    <div className="flex items-center gap-3">
      <div className="w-3 h-3 rounded-full bg-[#D4A017]" />
      <span className="text-gray-700 font-medium">
        {t("card2")}
      </span>
    </div>

    <div className="flex items-center gap-3">
      <div className="w-3 h-3 rounded-full bg-[#D4A017]" />
      <span className="text-gray-700 font-medium">
        {t("card3")}
      </span>
    </div>

  </div>

</div>

            </div>

          </div>

        </div>

      </div>

    </section>
  );
}