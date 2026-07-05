import Image from "next/image";

export default function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 border-b border-gray-200 bg-white/90 backdrop-blur-lg">
      <div className="max-w-7xl mx-auto h-20 px-6 flex items-center justify-between">

        <Image
  src="/images/icons/logo.jpg"
  alt="NovaRem"
  width={180}
  height={60}
  className="h-14 w-auto"
/>

        <nav className="hidden lg:flex items-center gap-8 font-medium">

          <a href="#">
            Головна
          </a>

          <a href="#services">
            Послуги
          </a>

          <a href="#portfolio">
            Портфоліо
          </a>

          <a href="#contact">
            Контакти
          </a>

        </nav>

        <div className="flex items-center gap-4">

          <div className="hidden md:flex gap-2">
            <button className="font-bold">
              UA
            </button>

            <span>|</span>

            <button>
              EN
            </button>
          </div>

          <a
            href="#contact"
            className="rounded-xl bg-black px-5 py-3 text-white"
          >
            Консультація
          </a>

        </div>

      </div>
    </header>
  );
}