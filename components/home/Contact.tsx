"use client";

import { useState } from "react";
import emailjs from "@emailjs/browser";
import { useTranslations } from "next-intl";

export default function Contact() {
  const t = useTranslations("contact");
  const [form, setForm] = useState({
    name: "",
    phone: "",
    service: "",
    message: "",
  });

  const sendEmail = (e: React.FormEvent) => {
    e.preventDefault();

    emailjs
      .send(
        "service_t5xfhme",
        "template_p45jvas",
        {
          name: form.name,
          phone: form.phone,
          service: form.service,
          message: form.message,
          email: "novareminfo@gmail.com",
        },
        "ktJrWSi1iXzVqoP9k"
      )
      .then(() => {
        alert(t("success"));
        setForm({
        name: "",
        phone: "",
        service: "",
        message: "",
      });
      })
      .catch((error) => {
        console.log(error);
        alert(t("error"));
      });
  };

  return (
    <section id="contact" className="py-24 bg-gray-100">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-5xl font-black text-center">
  {t("title")}
</h2>

<p className="text-center text-gray-600 mt-4 mb-12">
  {t("subtitle")}
</p>

        <div className="max-w-2xl mx-auto bg-white rounded-3xl p-8 shadow-xl">
           <form onSubmit={sendEmail} className="space-y-6">

  <input
    type="text"
    placeholder={t("name")}
    required
    value={form.name}
    onChange={(e) =>
      setForm({ ...form, name: e.target.value })
    }
    className="w-full rounded-2xl border border-gray-300 p-4 focus:outline-none focus:border-[#D4A017]"
  />

  <input
    type="tel"
    placeholder={t("phone")}
    required
    value={form.phone}
    onChange={(e) =>
      setForm({ ...form, phone: e.target.value })
    }
    className="w-full rounded-2xl border border-gray-300 p-4 focus:outline-none focus:border-[#D4A017]"
  />

  <select
    required
    value={form.service}
    onChange={(e) =>
      setForm({ ...form, service: e.target.value })
    }
    className="w-full rounded-2xl border border-gray-300 p-4 focus:outline-none focus:border-[#D4A017]"
  >
    <option value="">{t("select")}</option>
    <option value={t("service1")}>{t("service1")}</option>
    <option value={t("service2")}>{t("service2")}</option>
    <option value={t("service3")}>{t("service3")}</option>
    <option value={t("service4")}>{t("service4")}</option>
    <option value={t("service5")}>{t("service5")}</option>
    <option value={t("service6")}>{t("service6")}</option>
  </select>

  <textarea
    rows={6}
    placeholder={t("message")}
    value={form.message}
    onChange={(e) =>
      setForm({ ...form, message: e.target.value })
    }
    className="w-full rounded-2xl border border-gray-300 p-4 resize-none focus:outline-none focus:border-[#D4A017]"
  />

  <button
    type="submit"
    className="w-full rounded-2xl bg-[#D4A017] hover:bg-[#b98b12] transition-all duration-300 py-4 text-lg font-bold text-white shadow-lg"
  >
    {t("button")}
  </button>

</form>
        </div>
      </div>
    </section>
  );
}