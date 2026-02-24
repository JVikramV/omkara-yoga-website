export default function Schedule() {
  const batches = [
    {
      name: "Morning Batch",
      time: "5:45 AM IST",
    },
    {
      name: "Midday Batch",
      time: "11:30 AM IST",
    },
    {
      name: "Evening Batch",
      time: "5:00 PM IST",
    },
  ];

  return (
    <section className="py-24 bg-omkaraLavender text-center px-6">

      {/* Heading */}
      <h2 className="text-4xl font-bold text-omkaraPurple mb-4">
        Class Schedule
      </h2>

      {/* Days Info */}
      <p className="text-lg text-omkaraText mb-12">
        Classes conducted from <span className="font-semibold">Monday to Friday</span>
      </p>

      {/* Batch Cards */}
      <div className="max-w-5xl mx-auto grid md:grid-cols-3 gap-8">

        {batches.map((batch, index) => (
          <div
            key={index}
            className="
              bg-white
              p-8
              rounded-2xl
              shadow-lg
              hover:-translate-y-2
              hover:shadow-xl
              transition
            "
          >
            <h3 className="text-2xl font-semibold text-omkaraDeep mb-3">
              {batch.name}
            </h3>

            <p className="text-lg text-omkaraText">
              {batch.time}
            </p>

            <p className="text-sm text-gray-500 mt-3">
              Monday – Friday
            </p>
          </div>
        ))}

      </div>

    </section>
  );
}