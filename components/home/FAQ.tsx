export default function FAQ() {
  return (
    <section className="py-24">

      <div className="max-w-7xl mx-auto px-6">

        <h2 className="text-5xl font-black">
          Поширені питання
        </h2>

        <div className="mt-12 space-y-6">

          <div className="border rounded-2xl p-6">
            <h3 className="font-bold">
              Чи надаєте ви гарантію?
            </h3>

            <p className="mt-2 text-gray-600">
              Так, гарантія обговорюється та фіксується в договорі.
            </p>
          </div>

          <div className="border rounded-2xl p-6">
            <h3 className="font-bold">
              Чи працюєте ви з комерційними об'єктами?
            </h3>

            <p className="mt-2 text-gray-600">
              Так, ми працюємо як з житловими, так і з комерційними приміщеннями.
            </p>
          </div>

          <div className="border rounded-2xl p-6">
            <h3 className="font-bold">
              Чи можна замовити лише демонтаж?
            </h3>

            <p className="mt-2 text-gray-600">
              Так, виконуємо окремі демонтажні роботи.
            </p>
          </div>

        </div>

      </div>

    </section>
  );
}