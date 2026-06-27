export default function Services() {
  const services = [
    "Ремонт квартир",
    "Ремонт будинків",
    "Комерційні приміщення",
    "Демонтажні роботи",
    "Чорнові роботи",
    "Електромонтаж",
    "Сантехнічні роботи",
    "Оздоблювальні роботи",
  ];

  return (
    <section id="services" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">

        <h2 className="text-5xl font-black">
          Повний комплекс робіт
        </h2>

        <p className="mt-4 text-gray-600">
          Виконуємо всі етапи ремонту та будівництва під ключ.
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">

          {services.map((service) => (
            <div
              key={service}
              className="rounded-3xl border p-8 hover:shadow-xl transition-all duration-300"
            >
              <h3 className="font-bold text-xl">
                {service}
              </h3>
            </div>
          ))}

        </div>

      </div>
    </section>
  );
}