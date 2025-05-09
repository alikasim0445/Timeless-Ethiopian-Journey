import { useNavigate } from 'react-router-dom';
import img1 from '../assets/abbajifar.jpeg';
import img2 from '../assets/facil.jpeg';
import img3 from '../assets/church in lalibela _ World Heritage Rock-Hewn….jpeg';
import img4 from '../assets/Sof Omar Cave - Ethiopia.jpeg';
import img5 from '../assets/the liberty monument is so far the only thing….jpeg';
import img6 from '../assets/najashi.jpeg';
import img7 from '../assets/shake husen.jpeg';
import video7 from '../assets/shake husen.mp4';
import video1 from '../assets/abba jifar.mp4';
import video2 from '../assets/facil.mp4';
import video3 from '../assets/lalibala.mp4';
import video4 from '../assets/sof omer.mp4';
import video5 from '../assets/aksum.mp4';
import video6 from '../assets/najjashi.mp4';

const galleryItems = [
  { 
    src: img1, 
    title: "King Abba Jifar Palace", 
    desc: "A historical legacy of Jimma's royal heritage.",
    location: "Jimma",
    videoLink: video1,
    coordinates: { lat: 7.6667, lng: 36.8333 }
  },
  { 
    src: img2, 
    title: "Gondar Castle", 
    desc: "Also called the Camelot of Africa, rich in imperial history.",
    location: "Gondar",
    videoLink: video2,
    coordinates: { lat: 12.6000, lng: 37.4667 }
  },
  { 
    src: img3, 
    title: "Lalibela Churches", 
    desc: "Monolithic rock-hewn churches, a UNESCO World Heritage Site.",
    location: "Lalibela",
    videoLink: video3,
    coordinates: { lat: 12.0317, lng: 39.0417 }
  },
  { 
    src: img4, 
    title: "Sof Omar Cave", 
    desc: "One of the longest cave systems in Africa.",
    location: "Bale",
    videoLink: video4,
    coordinates: { lat: 6.9000, lng: 40.8000 }
  },
  { 
    src: img5, 
    title: "The Liberty Monument", 
    desc: "A symbol of Ethiopian freedom and pride.",
    location: "Aksum",
    videoLink: video5,
    coordinates: { lat: 9.0300, lng: 38.7400 }
  },
  { 
    src: img6, 
    title: "Negash Mosque", 
    desc: "One of the oldest Islamic sites in Africa.",
    location: "Tigray",
    videoLink: video6,
    coordinates: { lat: 13.8833, lng: 39.6000 }
  },
  { 
    src: img7, 
    title: "Sheikh Hussein Shrine", 
    desc: "A sacred pilgrimage site in southeastern Ethiopia.",
    location: "Oromia",
    videoLink: video7,
    coordinates: { lat: 7.7500, lng: 40.7000 }
  }
]
;

export default function Gallery() {
  const navigate = useNavigate();

  const handleLocationClick = (coords) => {
    // Navigate to map page with coordinates as state
    navigate('/map', { 
      state: { 
        lat: coords.lat, 
        lng: coords.lng 
      } 
    });
  };

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50" id='gallery'>
      <h3 className="text-3xl md:text-4xl font-bold text-center text-emerald-700 mb-12">Explore Virtually</h3>
      <div className="grid gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 max-w-6xl mx-auto">
        {galleryItems.map((item, idx) => (
          <div
            key={idx}
            className="group relative overflow-hidden rounded-xl shadow-lg transform hover:scale-[1.02] transition duration-300"
          >
            <button 
              onClick={() => handleLocationClick(item.coordinates)}
              className="absolute top-4 left-4 z-10 bg-emerald-600 hover:bg-emerald-700 text-white px-3 py-1 rounded-full text-xs font-semibold transition-colors cursor-pointer "
            >
              {item.location}
            </button>
            
            <img
              src={item.src}
              alt={item.title}
              className="w-full h-64 object-cover"
            />
            
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/40 to-transparent p-4 flex flex-col justify-end">
              <div className="text-white">
                <h4 className="text-lg font-semibold">{item.title}</h4>
                <p className="text-sm mb-3">{item.desc}</p>
                <a 
                  href={item.videoLink}
                  className="inline-flex items-center px-4 py-2 bg-transparent hover:text-green-700 text-white text-bold text-sm font-medium rounded-lg transition-colors "
                >
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 mr-2" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clipRule="evenodd" />
                  </svg>
                 
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}