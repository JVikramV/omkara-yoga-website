import guru from "../assets/guru.png";

export default function About() {
  return (
    <section className="py-24 bg-white px-6">

      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-14 items-center">

        {/* Guru Image */}
        <div className="flex justify-center">
          <img
            src={guru}
            alt="Yoga Guru"
            className="w-[300px] md:w-[380px] rounded-3xl shadow-xl"
          />
        </div>

        {/* Content */}
        <div>

          <h2 className="text-4xl font-bold text-omkaraPurple mb-6">
            About Omkara Yoga
          </h2>

          <p className="text-lg text-omkaraText mb-8">
            Founded in <span className="font-semibold">2010</span>,
            Omkara Yoga Studio is dedicated to spreading authentic
            yogic practices that nurture physical wellness,
            mental clarity and spiritual balance.
          </p>

          {/* Experience Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">

            <div className="bg-omkaraLavender p-5 rounded-xl text-center shadow-md">
              <h3 className="text-2xl font-bold text-omkaraDeep">
                Est. 2010
              </h3>
              <p className="text-sm text-omkaraText">
                Omkara Yoga Founded
              </p>
            </div>

            <div className="bg-omkaraLavender p-5 rounded-xl text-center shadow-md">
              <h3 className="text-2xl font-bold text-omkaraDeep">
                30+ Years
              </h3>
              <p className="text-sm text-omkaraText">
                Practising Experience
              </p>
            </div>

            <div className="bg-omkaraLavender p-5 rounded-xl text-center shadow-md">
              <h3 className="text-2xl font-bold text-omkaraDeep">
                20+ Years
              </h3>
              <p className="text-sm text-omkaraText">
                Teaching Experience
              </p>
            </div>

          </div>

        </div>

      </div>

    </section>
  );
}