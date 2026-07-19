"use client";

import { useTranslations } from "next-intl";

export default function Process() {
  const t = useTranslations("process");

  const steps = [
    t("step1"),
    t("step2"),
    t("step3"),
    t("step4"),
    t("step5"),
    t("step6"),
  ];

  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-5xl font-black">
          {t("title")}
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
          {steps.map((step, index) => (
            <div
              key={step}
              className="rounded-3xl border p-8 hover:shadow-xl transition-all duration-300"
            >
              <div className="text-5xl font-black text-yellow-600">
                {String(index + 1).padStart(2, "0")}
              </div>

              <h3 className="mt-4 text-2xl font-bold">
                {step}
              </h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}