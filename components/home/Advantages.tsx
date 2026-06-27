export default function Advantages() {
  const items = [
    "Фіксований кошторис",
    "Дотримання термінів",
    "Гарантія на роботи",
    "Повний цикл робіт",
  ];

  return (
    <section className="py-24 bg-black text-white">

      <div className="max-w-7xl mx-auto px-6">

        <h2 className="text-5xl font-black">
          Чому NovaRem
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">

          {items.map((item) => (
            <div
              key={item}
              className="rounded-3xl bg-white text-black p-8"
            >
              <h3 className="font-bold text-xl">
                {item}
              </h3>
            </div>
          ))}

        </div>

      </div>

    </section>
  );
}