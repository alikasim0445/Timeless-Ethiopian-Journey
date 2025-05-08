import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/autoplay';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { useEffect, useState } from 'react'; // Added for typing animation

import video1 from "../assets/1.mp4";
import video2 from "../assets/2.mp4";
import video3 from "../assets/3.mp4";
import video4 from "../assets/4.mp4";
import video5 from "../assets/5.mp4";
import video6 from "../assets/6.mp4";
import video7 from "../assets/7.mp4";
import video8 from "../assets/8.mp4";
import video9 from "../assets/9.mp4";
import video10 from "../assets/10.mp4";
// ... other video imports

export default function Hero() {
  const videos = [video1, video2, video3, video4, video5, video6, video7, video8, video9, video10];
  const [typedText, setTypedText] = useState('');
  const fullText = "Explore ancient landmarks, lush landscapes, and rich culture through immersive AR and VR technology.";
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    if (currentIndex < fullText.length) {
      const timeout = setTimeout(() => {
        setTypedText(prev => prev + fullText[currentIndex]);
        setCurrentIndex(prev => prev + 1);
      }, 50); // Adjust typing speed here (milliseconds)

      return () => clearTimeout(timeout);
    }
    
    // Reset animation after completion (optional)
    const resetTimeout = setTimeout(() => {
      setTypedText('');
      setCurrentIndex(0);
    }, 10000); // Restart after 10 seconds

    return () => clearTimeout(resetTimeout);
  }, [currentIndex, fullText]);

  return (
    <section className="relative h-screen w-full flex items-center justify-center bg-cover bg-center bg-[url('/assets/fox.jpeg')]">
      <div className="absolute inset-0 bg-black/60 z-0" />

      {/* Video Slider Container */}
      <div className="relative z-10 w-full max-w-6xl h-[400px] flex items-center justify-center">
        {/* Overlayed Text */}
        <div className="absolute z-20 text-center text-white bg-black/40 p-6 rounded-lg max-w-3xl mx-auto">
          <h2 className="text-2xl sm:text-4xl font-bold">
            Discover Ethiopia Like Never Before
          </h2>
          <p className="mt-2 text-base sm:text-lg h-16 flex items-center justify-center">
            {typedText}
            <span className="ml-1 animate-blink">|</span> {/* Cursor effect */}
          </p>
        </div>

        {/* Swiper Slider */}
        <Swiper
          modules={[Autoplay, Pagination, Navigation]}
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
            reverseDirection: false
          }}
          loop={true}
          pagination={{ clickable: true }}
          navigation={{
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
          }}
          spaceBetween={20}
          slidesPerView={1}
          breakpoints={{
            640: { slidesPerView: 1 },
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
          className="w-full h-full"
        >
          {videos.map((src, index) => (
            <SwiperSlide key={index} className="rounded-xl overflow-hidden">
              <video
                src={src}
                autoPlay
                muted
                loop
                playsInline
                className="w-full h-full object-cover rounded-xl"
              />
            </SwiperSlide>
          ))}
          
          <div className="swiper-button-prev !text-white after:!text-xl"></div>
          <div className="swiper-button-next !text-white after:!text-xl"></div>
        </Swiper>
      </div>

      {/* Add this to your global CSS or CSS-in-JS */}
      <style jsx>{`
        @keyframes blink {
          0%, 100% { opacity: 1; }
          50% { opacity: 0; }
        }
        .animate-blink {
          animation: blink 1s infinite;
        }
      `}</style>
    </section>
  );
}