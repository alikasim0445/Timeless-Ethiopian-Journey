// Services.jsx
const services = [
    "Virtual Tours of historical landmarks",
    "AR apps with real-time cultural insights",
    "Custom itineraries with hybrid (virtual + physical) experiences",
    "Educational workshops and cultural events",
  ];
  
  export default function Services() {
    return (
      <section className="bg-white py-20 px-4 sm:px-6 lg:px-8" id="services">
        <h3 className="text-3xl md:text-4xl font-bold text-center text-emerald-700 mb-8">What We Do</h3>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-2 max-w-5xl mx-auto">
          {services.map((item, idx) => (
            <div key={idx} className="bg-emerald-50 p-6 rounded-2xl shadow-md hover:shadow-lg transition">
              <p className="text-lg font-medium text-gray-800">{item}</p>
            </div>
          ))}
        </div>
      </section>
    );
  }
  