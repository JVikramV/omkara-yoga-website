import surya from "../assets/sun.png";
import chandra from "../assets/chandra.png";
import therapy from "../assets/therapy.png";
import guru from "../assets/gurunamaskar.png";
import weightloss from "../assets/wl.png";

export default function Classes() {

  const sessions = [
    {
      name: "Surya Namaskar Session",
      image: surya,
    },
    {
      name: "Chandra Namaskar Session",
      image: chandra,
    },
    {
      name: "Yoga Therapy Session",
      image: therapy,
    },
    {
      name: "Guru Namaskar Session",
      image: guru,
    },
    {
      name: "Weight Loss Session",
      image: weightloss,
    },
  ];

  return (
    <section className="py-24 bg-omkaraLavender text-center">

      <h2 className="text-4xl font-bold text-omkaraPurple mb-14">
        Online Yoga Sessions
      </h2>

      <div className="max-w-6xl mx-auto flex flex-wrap justify-center gap-8 px-6">

        {sessions.map((session, index) => (
          <div
            key={index}
            className="relative w-[300px] h-[220px] rounded-2xl overflow-hidden shadow-xl group cursor-pointer"
          >

            {/* Background Image */}
            <img
              src={session.image}
              alt={session.name}
              className="absolute w-full h-full object-cover group-hover:scale-110 transition duration-500"
            />

            {/* Dark Overlay */}
            <div className="absolute inset-0 bg-black/40 group-hover:bg-black/30 transition"></div>

            {/* Text */}
            <div className="relative h-full flex items-center justify-center">
              <h3 className="text-white text-xl font-semibold px-4">
                {session.name}
              </h3>
            </div>

          </div>
        ))}

      </div>

    </section>
  );
}