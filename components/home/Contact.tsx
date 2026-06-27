export default function Contact() {
  return (
    <section id="contact" className="py-24 bg-black text-white">

      <div className="max-w-7xl mx-auto px-6">

        <h2 className="text-5xl font-black">
          Зв'язатися з нами
        </h2>

        <p className="mt-4 text-gray-400">
          Залиште заявку та отримайте консультацію.
        </p>

        <form className="mt-10 max-w-xl">

          <input
            type="text"
            placeholder="Ваше ім'я"
            className="w-full rounded-xl p-4 text-black mb-4"
          />

          <input
            type="tel"
            placeholder="Телефон"
            className="w-full rounded-xl p-4 text-black mb-4"
          />

          <textarea
            placeholder="Опишіть ваш проєкт"
            className="w-full rounded-xl p-4 text-black h-40"
          />

          <button
            type="submit"
            className="mt-6 rounded-xl bg-yellow-600 px-8 py-4"
          >
            Отримати консультацію
          </button>

        </form>

      </div>

    </section>
  );
}