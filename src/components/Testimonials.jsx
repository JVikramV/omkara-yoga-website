export default function Testimonials() {

  const testimonials = [
    {
      name: "Shivagami",
      text: "Thankyou Mam for the tremendous weightloss session.💓🥰 It was very challenging... it felt like my core was shaken. DRT was so relaxing in your mesmerizing voice Mam💓.",
    },
    {
      name: "Jayanth Vikram",
      text: "Thank you mam for that amazing Core strengthening Weight loss session. Tremendously incredible. Loved the challenging exercise. Deep relaxation technique gave the right finish! 😊🙏😃",
    },
    {
      name: "Minu Sathiadasan",
      text: `Great therapy session focusing on hair loss mam. 😍
Suryanamaskar with kapalabathi was phenomenal. 🤩
It was tough to breathe in many of the asanas and the core muscles were singing by the end of 3 rounds! 😮‍💨
The entire session was well curated.
Could feel the blood flow to the head region at the end of every asana.
Thanks again for yet another wonderful class mam 😍`,
    },
    {
      name: "Shanti Soundarrajan",
      text: "Total game-changer for my knee today. The targeted pressure point work was spot on — definitely making this a weekly staple. Thanks a lot @Savita yoga.",
    },
  ];

  return (
    <section className="py-24 bg-white overflow-hidden">

      <h2 className="text-4xl font-bold text-center text-omkaraPurple mb-14">
        Student Testimonials
      </h2>

      {/* Moving Container */}
      <div className="relative w-full overflow-hidden">

        <div className="flex gap-8 animate-scroll">

          {[...testimonials, ...testimonials].map((t, index) => (
            <div
              key={index}
              className="
                min-w-[420px]
                max-w-[420px]
                bg-omkaraLavender
                p-8
                rounded-2xl
                shadow-lg
                hover:-translate-y-2
                hover:shadow-xl
                transition
              "
            >
              <p className="text-omkaraText mb-6 italic whitespace-pre-line leading-relaxed">
                "{t.text}"
              </p>

              <h4 className="font-semibold text-omkaraDeep">
                — {t.name}
              </h4>
            </div>
          ))}

        </div>

      </div>

    </section>
  );
}