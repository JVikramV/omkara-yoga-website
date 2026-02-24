export default function Navbar() {
  return (
    <nav className="fixed w-full bg-white shadow-md z-50">
      <div className="max-w-7xl mx-auto flex justify-between items-center p-4">

        <h1 className="text-2xl font-bold text-omkaraPurple">
          Omkara Yoga
        </h1>

        <a
          href="#contact"
          className="bg-omkaraPurple text-white px-5 py-2 rounded-full hover:bg-omkaraDeep transition"
        >
          Join Class
        </a>

      </div>
    </nav>
  );
}