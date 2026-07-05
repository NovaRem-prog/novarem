export default function Contact() {
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

          <form
            action="https://formsubmit.co/novareminfo@gmail.com"
            method="POST"
            className="space-y-5"
          >
            <input
              type="text"
              name="name"
              placeholder="Ваше ім'я"
              required
              className="w-full rounded-xl border p-4"
            />

            <input
              type="tel"
              name="phone"
              placeholder="Ваш телефон"
              required
              className="w-full rounded-xl border p-4"
            />

            <select
              name="service"
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
              name="message"
              placeholder="Опишіть ваш проєкт"
              rows={5}
              className="w-full rounded-xl border p-4"
            />

            <input
              type="hidden"
              name="_subject"
              value="Нова заявка з сайту NovaRem"
            />

            <input
              type="hidden"
              name="_captcha"
              value="false"
            />

            <input
              type="hidden"
              name="_next"
              value="https://novarem.com.ua"
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