import Image from "next/image";

const projects = [
  {
    title: "Ремонт квартири",
    image: "/images/portfolio/apartment-1.jpg",
  },
  {
    title: "Приватний будинок",
    image: "/images/portfolio/house-1.jpg",
  },
  {
    title: "Офіс",
    image: "/images/portfolio/office-1.jpg",
  },
  {
    title: "Комерційний об'єкт",
    image: "/images/portfolio/commercial-1.jpg",
  },
];

export default function Portfolio() {
  return (
    <section id="portfolio" className="py-24 bg-[#f8f8f8]">
      <div className="max-w-7xl mx-auto px-6">

        <h2 className="text-5xl font-black">
          Наші роботи
        </h2>

        <div className="grid lg:grid-cols-2 gap-8 mt-12">

          {projects.map((project) => (
            <div
              key={project.title}
              className="overflow-hidden rounded-3xl bg-white border"
            >
              <div className="relative h-[350px]">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover"
                />
              </div>

              <div className="p-6">
                <h3 className="text-2xl font-bold">
                  {project.title}
                </h3>
              </div>
            </div>
          ))}

        </div>

      </div>
    </section>
  );
}