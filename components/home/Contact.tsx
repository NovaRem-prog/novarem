"use client";

import { useState } from "react";
import emailjs from "@emailjs/browser";

export default function Contact() {
  const [form, setForm] = useState({
    name: "",
    phone: "",
    service: "Ремонт квартири",
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
        alert("Заявку відправлено!");
        setForm({
          name: "",
          phone: "",
          service: "Ремонт квартири",
          message: "",
        });
      })
      .catch((error) => {
        console.log(error);
        alert("Помилка відправки.");
      });
  };

  return (
    <section id="contact" className="py-24 bg-gray-100">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-5xl font-black text-center">
          Зв'яжіться з нами
        </h2>

        <p className="text-center text-gray-600 mt-4 mb-12">
          Залиште заявку і ми зв'яжемося з вами найближчим часом.
        </p>

        <div className="max-w-2xl mx-auto bg-white rounded-3xl p-8 shadow-xl">
          <form onSubmit={sendEmail} className="space-y-5">
            <input
              type="text"
              placeholder="Ваше ім'я"
              required
              value={form.name}
              onChange={(e) =>
                setForm({ ...form, name: e.target.value })
              }
              className="w-full rounded-xl border p-4"
            />

            <input
              type="tel"
              placeholder="Ваш телефон"
              required
              value={form.phone}
              onChange={(e) =>
                setForm({ ...form, phone: e.target.value })
              }
              className="w-full rounded-xl border p-4"
            />

            <select
              value={form.service}
              onChange={(e) =>
                setForm({ ...form, service: e.target.value })
              }
              className="w-full rounded-xl border p-4"
            >
              <option>Ремонт квартири</option>
              <option>Ремонт будинку</option>
              <option>Ремонт офісу</option>
              <option>Комерційний об'єкт</option>
              <option>Демонтажні роботи</option>
              <option>Інше</option>
            </select>

            <textarea
              rows={5}
              placeholder="Опишіть ваш проєкт"
              value={form.message}
              onChange={(e) =>
                setForm({ ...form, message: e.target.value })
              }
              className="w-full rounded-xl border p-4"
            />

            <button
              type="submit"
              className="w-full rounded-xl bg-black py-4 text-white text-lg font-semibold"
            >
              Отримати консультацію
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}