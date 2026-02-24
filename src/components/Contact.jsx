import { FaWhatsapp, FaInstagram, FaPhoneAlt, FaMapMarkerAlt } from "react-icons/fa";

export default function Contact() {
  return (
    <section
      id="contact"
      className="bg-omkaraPurple text-white py-20 px-6"
    >
      <div className="max-w-6xl mx-auto text-center">

        <h2 className="text-4xl font-bold mb-10">
          Contact Omkara Yoga Studio
        </h2>

        <div className="grid md:grid-cols-3 gap-10">

          {/* Location */}
          <div className="flex flex-col items-center">
            <FaMapMarkerAlt className="text-3xl mb-4" />
            <h3 className="text-xl font-semibold mb-2">Location</h3>
            <p className="opacity-90">
              Online Yoga Studio <br />
              Bengaluru, India
            </p>
          </div>

          {/* Phone */}
          <div className="flex flex-col items-center">
            <FaPhoneAlt className="text-3xl mb-4" />
            <h3 className="text-xl font-semibold mb-2">Call / WhatsApp</h3>

            <a
              href="tel:+919876543210"
              className="hover:underline"
            >
              +91 98765 43210
            </a>
          </div>

          {/* Instagram */}
          <div className="flex flex-col items-center">
            <FaInstagram className="text-3xl mb-4" />
            <h3 className="text-xl font-semibold mb-2">Instagram</h3>

            <a
              href="https://www.instagram.com/savitasatish8/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:underline"
            >
              @savitasatish8
            </a>
          </div>

        </div>

        {/* Footer Line */}
        <div className="mt-14 border-t border-white/30 pt-6 text-sm opacity-80">
          © {new Date().getFullYear()} Omkara Yoga Studio • All Rights Reserved
        </div>

      </div>
    </section>
  );
}