import video from "../assets/company-preview.mp4";


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
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-2 max-w-5xl mx-auto mb-12">
        {services.map((item, idx) => (
          <div key={idx} className="bg-emerald-50 p-6 rounded-2xl shadow-md hover:shadow-lg transition">
            <p className="text-lg font-medium text-gray-800">{item}</p>
          </div>
        ))}
      </div>

      {/* Video preview with captions */}
      <div className="max-w-3xl mx-auto text-center">
        <h4 className="text-2xl sm:text-3xl font-bold text-emerald-600 mb-4">
          Get to Know Timeless Ethiopia Journey
        </h4>
        <p className="text-base text-gray-600 mb-8">
          Discover who we are, our passion for Ethiopian culture, and how we're transforming tourism with immersive AR/VR experiences.
        </p>

        <div className="relative w-full aspect-video rounded-xl overflow-hidden shadow-lg mx-auto bg-black" 
             style={{ maxWidth: '560px' }}>
          <video
            width="560"
            height="315"
            controls
            src={video}
            autoPlay
            muted
            controlsList="nodownload "
            
            loop
            playsInline
            className="w-full h-full object-contain"
            poster="../assets/video-poster.jpg"
            onContextMenu={(e) => e.preventDefault()}
          >
            <track
              
              kind="subtitles"
              srcLang="en"
              label="English"
              default
            />
            Your browser does not support HTML5 video.
          </video>
          
          {/* Watermark overlay */}
          <div className="absolute top-4 right-4 text-white text-opacity-70 text-sm pointer-events-none text-bold">
            © Timeless Ethiopia Journey
          </div>
        </div>

        {/* Video caption/description */}
        <div className="mt-4 text-sm text-gray-600">
          <p className="font-medium">Video Transcript:</p>
          <p className="italic">"Explore Ethiopia's rich heritage through our innovative AR/VR experiences that bring history to life."</p>
          <p className="mt-2">Duration: 2:15 </p>
        </div>
      </div>
    </section>
  );
}