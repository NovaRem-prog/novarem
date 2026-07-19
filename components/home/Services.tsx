"use client";

import {
  Home,
  Building2,
  Hammer,
  Wrench,
  Paintbrush,
  Zap,
  Droplets,
  HardHat
} from "lucide-react";

import {useTranslations} from "next-intl";

export default function Services() {
  const t = useTranslations("services");

  const services = [
    {
      title: t("apartment"),
      description: t("apartmentDesc"),
      icon: Home
    },
    {
      title: t("house"),
      description: t("houseDesc"),
      icon: Building2
    },
    {
      title: t("commercial"),
      description: t("commercialDesc"),
      icon: Building2
    },
    {
      title: t("demolition"),
      description: t("demolitionDesc"),
      icon: Hammer
    },
    {
      title: t("rough"),
      description: t("roughDesc"),
      icon: HardHat
    },
    {
      title: t("electrical"),
      description: t("electricalDesc"),
      icon: Zap
    },
    {
      title: t("plumbing"),
      description: t("plumbingDesc"),
      icon: Droplets
    },
    {
      title: t("finishing"),
      description: t("finishingDesc"),
      icon: Paintbrush
    }
  ];

  return (
    <section
      id="services"
      className="py-28 bg-gradient-to-b from-white to-[#faf8f2]"
    >
      <div className="max-w-7xl mx-auto px-6">

        <div className="text-center">

          <h2 className="text-5xl md:text-6xl font-black">
            {t("title")}
          </h2>

          <p className="mt-5 max-w-3xl mx-auto text-lg text-gray-600 leading-8">
            {t("description")}
          </p>

        </div>

        <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-8 mt-20">

          {services.map((service) => {
            const Icon = service.icon;

            return (
              <div
                key={service.title}
                className="group rounded-3xl border border-gray-200 bg-white p-8 shadow-sm hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 flex flex-col"
              >
                <div className="w-16 h-16 rounded-2xl bg-[#D4A017]/10 flex items-center justify-center mb-6">

                  <Icon
                    size={32}
                    className="text-[#D4A017]"
                  />

                </div>

                <h3 className="text-2xl font-bold">
                  {service.title}
                </h3>

                <p className="mt-4 text-gray-600 leading-7 flex-1">
                  {service.description}
                </p>

                <div className="mt-8 font-semibold text-[#D4A017] group-hover:translate-x-2 transition-all">
                  →
                </div>

              </div>
            );
          })}

        </div>

      </div>
    </section>
  );
}