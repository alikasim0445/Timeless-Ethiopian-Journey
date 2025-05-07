// Booking.jsx
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
          <pre><a href="tel:+251704008874">📞 Call Center: +251704008874  </a> | WhatsApp: +251704008874</pre>
        </div>
      </section>
    );
  }