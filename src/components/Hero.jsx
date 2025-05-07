// Hero.jsx
export default function Hero() {
    return (
      <section className="bg-cover bg-center bg-[url('/assets/fox.jpeg')] h-screen flex items-center justify-center text-white relative" id="home">
        <div className="bg-black/50 absolute inset-0"></div>
        <div className="relative z-10 text-center px-6">
          <h2 className="text-4xl md:text-6xl font-bold">Discover Ethiopia Like Never Before</h2>
          <p className="mt-4 text-lg md:text-xl max-w-2xl mx-auto">
            Explore ancient landmarks, lush landscapes, and rich culture through immersive AR and VR technology.
          </p>
        </div>
      </section>
    );
  }