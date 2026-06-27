export default function Hero() {
  return (
    <section className="min-h-screen pt-32 bg-gradient-to-br from-white via-[#f8f8f8] to-yellow-50">
      <div className="max-w-7xl mx-auto px-6">

        <div className="grid lg:grid-cols-2 gap-12 items-center">

          <div>

            <span className="inline-block rounded-full border px-4 py-2 text-sm font-medium">
              Будівництво • Ремонт • Демонтаж
            </span>

            <h1 className="mt-6 text-4xl md:text-6xl font-black leading-tight">
              Будівництво,
              <br />
              ремонт та демонтаж
              <br />
              під ключ
            </h1>

            <p className="mt-8 text-xl text-gray-600 max-w-xl">
              Повний комплекс будівельних і ремонтних робіт для квартир,
              будинків, офісів та комерційних об'єктів.
            </p>

            <div className="mt-10 flex flex-wrap gap-4">

              <button className="rounded-xl bg-black text-white px-8 py-4 shadow-lg">
                Розрахувати вартість
              </button>

              <button className="rounded-xl border px-8 py-4 bg-white">
                Наші роботи
              </button>

            </div>

          </div>

          <div>

            <div className="overflow-hidden rounded-3xl shadow-2xl">

              <video
                autoPlay
                muted
                loop
                playsInline
                className="w-full h-[500px] object-cover"
              >
                <source
                  src="/videos/reclam.mp4"
                  type="video/mp4"
                />
              </video>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
}