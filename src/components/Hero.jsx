import { useEffect, useState } from "react";
import omkara from "../assets/omkara.jpg";

export default function Hero() {
  const [offset, setOffset] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setOffset(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-omkaraLavender px-6 text-center">

      {/* Glow */}
      <div className="absolute w-[500px] md:w-[750px] h-[500px] md:h-[750px]
      bg-gradient-to-r from-omkaraPurple via-purple-300 to-omkaraLavender
      opacity-20 blur-3xl rounded-full animate-pulse"></div>

      {/* Floating Om */}
      <img
        src={omkara}
        alt="Omkara"
        style={{
          transform: `translateY(${offset * 0.15}px)`
        }}
        className="
        absolute
        w-[280px]
        md:w-[650px]
        opacity-10
        object-contain
        "
      />

      {/* Content */}
      <div className="relative max-w-xl">

        <h1 className="
        text-4xl
        sm:text-5xl
        md:text-6xl
        font-bold
        text-omkaraPurple
        leading-tight
        mb-6">
          Omkara Yoga Studio
        </h1>

        <p className="
        text-base
        sm:text-lg
        text-omkaraText
        mb-8 px-2">
          Experience balance, peace and inner transformation
          through authentic online yoga sessions.
        </p>

        <a
 href="https://wa.me/919886591201?text=Hello%20I%20want%20to%20join%20Omkara%20Yoga"
 target="_blank"
 className="bg-omkaraDeep text-white px-8 py-3 rounded-full"
>
 Join Online Class
</a>

      </div>
    </section>
  );
}