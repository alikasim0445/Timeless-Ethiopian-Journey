import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/autoplay';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

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

export default function Hero() {
  const videos = [video1, video2, video3, video4, video5, video6, video7, video8, video9, video10];

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
          <p className="mt-2 text-base sm:text-lg">
            Explore ancient landmarks, lush landscapes, and rich culture through immersive AR and VR technology.
          </p>
        </div>

        {/* Swiper Slider */}
        <Swiper
          modules={[Autoplay, Pagination, Navigation]}
          autoplay={{
            delay: 3000,
            disableOnInteraction: false, // Continue autoplay after user interaction
            reverseDirection: false // Ensure slides move left-to-right
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
          
          {/* Custom navigation buttons */}
          <div className="swiper-button-prev !text-white after:!text-xl"></div>
          <div className="swiper-button-next !text-white after:!text-xl"></div>
        </Swiper>
      </div>
    </section>
  );
}