import img1 from '../assets/abbajifar.jpeg';
import img2 from '../assets/facil.jpeg';
import img3 from '../assets/church in lalibela _ World Heritage Rock-Hewn….jpeg';
import img4 from '../assets/Sof Omar Cave - Ethiopia.jpeg';
import img5 from '../assets/the liberty monument is so far the only thing….jpeg';
import img6 from '../assets/najashi.jpeg';
import img7 from '../assets/shake husen.jpeg';

const galleryItems = [
  { src: img1, title: "King Abba Jifar Palace", desc: "A historical legacy of Jimma’s royal heritage." },
  { src: img2, title: "Gondar Castle", desc: "Also called the Camelot of Africa, rich in imperial history." },
  { src: img3, title: "Lalibela Churches", desc: "Monolithic rock-hewn churches, a UNESCO World Heritage Site." },
  { src: img4, title: "Sof Omar Cave", desc: "One of the longest cave systems in Africa." },
  { src: img5, title: "The Liberty Monument", desc: "A symbol of Ethiopian freedom and pride." },
  { src: img6, title: "Negash Mosque", desc: "One of the oldest Islamic sites in Africa." },
  { src: img7, title: "Sheikh Hussein Shrine", desc: "A sacred pilgrimage site in southeastern Ethiopia." },
];

export default function Gallery() {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50" id='gallery'>
      <h3 className="text-3xl md:text-4xl font-bold text-center text-emerald-700 mb-12">Explore Virtually</h3>
      <div className="grid gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 max-w-6xl mx-auto">
        {galleryItems.map((item, idx) => (
          <div
            key={idx}
            className="group relative overflow-hidden rounded-xl shadow-lg transform hover:scale-[1.02] transition duration-300"
          >
            <img
              src={item.src}
              alt={item.title}
              className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-105"
            />
            <div className="absolute bottom-0 left-0 right-0 bg-black/60 text-white p-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <h4 className="text-lg font-semibold">{item.title}</h4>
              <p className="text-sm">{item.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
