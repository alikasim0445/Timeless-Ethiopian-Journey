// Booking.jsx
import { FaWhatsapp } from "react-icons/fa";
export default function Booking() {
    return (
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-emerald-100" id="bookings">
        <h3 className="text-3xl md:text-4xl font-bold text-center text-emerald-800 mb-8">Book Your Virtual Tour</h3>
        <form className="max-w-xl mx-auto grid gap-4 bg-white p-8 rounded-xl shadow-md">
          <input
            className="p-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-emerald-500"
            type="text"
            placeholder="Full Name"
            required
          />
          <input
            className="p-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-emerald-500"
            type="email"
            placeholder="Email Address"
            required
          />
          <input
            className="p-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-emerald-500"
            type="text"
            placeholder="Preferred Date"
          />
          <button
            className="bg-emerald-700 text-white py-3 rounded-md hover:bg-emerald-800 transition"
            type="submit"
          >
            Get Appointment
          </button>
        </form>
        <div className="text-center mt-6 text-gray-700">
        

<div className="flex flex-col sm:flex-row justify-center items-center gap-2">
  <a href="tel:+251972201169" className="whitespace-nowrap">
    📞 Call Center: +251972201169
  </a>
  <a href="tel:+251939317774" className="whitespace-nowrap">
    📞 Call Center: +251939317774
  </a>
  <span className="hidden sm:inline">|</span> {/* Separator, hidden on small screens */}
  <a href="https://wa.me/2510972201169" className="whitespace-nowrap flex items-center gap-1">
    <FaWhatsapp />
    WhatsApp: +251972201169
  </a>
  <a href="https://wa.me/251939317774" className="whitespace-nowrap flex items-center gap-1">
    <FaWhatsapp />
    WhatsApp: +251939317774
  </a>
</div>

</div>
      </section>
    );
  }