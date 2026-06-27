export default function Reviews() {
  return (
    <section className="py-24 bg-[#f8f8f8]">

      <div className="max-w-7xl mx-auto px-6">

        <h2 className="text-5xl font-black">
          Відгуки клієнтів
        </h2>

        <div className="grid md:grid-cols-3 gap-6 mt-12">

          <div className="rounded-3xl bg-white p-8 border">
            <p>
              Роботи виконані якісно та вчасно.
              Повністю задоволені результатом.
            </p>
          </div>

          <div className="rounded-3xl bg-white p-8 border">
            <p>
              Від демонтажу до оздоблення все було
              організовано професійно.
            </p>
          </div>

          <div className="rounded-3xl bg-white p-8 border">
            <p>
              Команда відповідальна та завжди була
              на зв'язку під час ремонту.
            </p>
          </div>

        </div>

      </div>

    </section>
  );
}