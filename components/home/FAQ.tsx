"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { useTranslations } from "next-intl";

export default function FAQ() {
  const t = useTranslations("faq");

  const questions = [
    {
      question: t("question1"),
      answer: t("answer1"),
    },
    {
      question: t("question2"),
      answer: t("answer2"),
    },
    {
      question: t("question3"),
      answer: t("answer3"),
    },
    {
      question: t("question4"),
      answer: t("answer4"),
    },
  ];

  const [open, setOpen] = useState<number | null>(0);

  return (
    <section className="py-28 bg-white">
      <div className="max-w-5xl mx-auto px-6">

        <div className="text-center">

          <h2 className="text-5xl md:text-6xl font-black">
            {t("title")}
          </h2>

          <p className="mt-5 text-lg text-gray-600">
            {t("subtitle")}
          </p>

        </div>

        <div className="mt-16 space-y-5">

          {questions.map((item, index) => (
            <div
              key={index}
              className="rounded-3xl border border-gray-200 bg-white shadow-sm overflow-hidden transition-all duration-300"
            >
              <button
                onClick={() =>
                  setOpen(open === index ? null : index)
                }
                className="w-full flex items-center justify-between p-7 text-left"
              >
                <span className="text-xl font-bold">
                  {item.question}
                </span>

                <ChevronDown
                  className={`transition-transform duration-300 ${
                    open === index ? "rotate-180" : ""
                  } text-[#D4A017]`}
                  size={28}
                />
              </button>

              <div
                className={`grid transition-all duration-300 ${
                  open === index
                    ? "grid-rows-[1fr]"
                    : "grid-rows-[0fr]"
                }`}
              >
                <div className="overflow-hidden">
                  <p className="px-7 pb-7 text-gray-600 leading-8">
                    {item.answer}
                  </p>
                </div>
              </div>
            </div>
          ))}

        </div>

      </div>
    </section>
  );
}