export default function Process() {
  const steps = [
    "Заявка",
    "Виїзд на об'єкт",
    "Кошторис",
    "Підписання договору",
    "Виконання робіт",
    "Здача об'єкта",
  ];

  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">

        <h2 className="text-5xl font-black">
          Як ми працюємо
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">

          {steps.map((step, index) => (
            <div
              key={step}
              className="rounded-3xl border p-8"
            >
              <div className="text-5xl font-black text-yellow-600">
                0{index + 1}
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