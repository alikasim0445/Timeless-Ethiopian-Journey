export default function About() {
    return (
      <section className="py-20 px-4 sm:px-6 lg:px-8 text-center bg-gray-50 " id="about">
        <h3 className="text-3xl md:text-4xl font-bold text-emerald-700 mb-8">Our Mission & Vision</h3>
  
        <div className="space-y-8">
          {/* Mission Statement Card */}
          <div className="bg-white shadow-lg rounded-xl p-6 max-w-3xl mx-auto transition-transform transform hover:scale-105">
            <h4 className="text-2xl font-semibold text-emerald-700 mb-4">Mission </h4>
            <p className="text-lg text-gray-700 leading-relaxed">
              To enrich the travel experience in Ethiopia by leveraging cutting-edge AR and VR technologies, allowing tourists to explore and engage with the country's diverse landscapes and cultural treasures from anywhere in the world.
            </p>
          </div>
  
          {/* Vision Statement Card */}
          <div className="bg-white shadow-lg rounded-xl p-6 max-w-3xl mx-auto transition-transform transform hover:scale-105">
            <h4 className="text-2xl font-semibold text-emerald-700 mb-4">Vision </h4>
            <p className="text-lg text-gray-700 leading-relaxed">
              To be the leading tourism platform in Ethiopia that transforms how people discover and appreciate the country's heritage and natural beauty, creating unforgettable virtual and augmented experiences.
            </p>
          </div>
  
          {/* Core Values Card */}
        <div className="bg-white shadow-lg rounded-xl p-6 max-w-3xl mx-auto transition-transform transform hover:scale-105">
          <h4 className="text-2xl font-semibold text-emerald-700 mb-4">Core Values</h4>
          <ul class="list-disc text-left space-y-4 ml-10">
  <li>
    <strong className="font-semibold text-gray-800">Innovation:</strong>
    <span className="text-gray-700">Embrace technology to enhance the tourism experience.</span>
  </li>
  <li>
    <strong className="font-semibold text-gray-800">Cultural Preservation:</strong>
    <span className="text-gray-700">Promote and protect Ethiopia’s rich history and traditions.</span>
  </li>
  <li>
    <strong className="font-semibold text-gray-800">Sustainability:</strong>
    <span className="text-gray-700">Encourage eco-friendly tourism practices that benefit local communities.</span>
  </li>
  <li>
    <strong className="font-semibold text-gray-800">Accessibility:</strong>
    <span className="text-gray-700">Make Ethiopia's treasures available to everyone, regardless of location.</span>
  </li>
</ul>
        </div>

{/* Goals Card */}
<div className="bg-white shadow-lg rounded-xl p-6 max-w-3xl mx-auto transition-transform transform hover:scale-105 text-center">
  <h4 className="text-2xl font-semibold text-emerald-700 mb-4 ">Goals</h4>
  <ul className="list-disc space-y-4 inline-block text-left ml-10">
    <li className="mx-auto">
      <strong className="font-semibold text-gray-800">Develop AR/VR Experiences:</strong>
      <span className="text-gray-700">Create engaging virtual tours and augmented reality applications that highlight Ethiopia's key attractions.</span>
    </li>
    <li>
      <strong className="font-semibold text-gray-800">Collaborate with Local Communities:</strong>
      <span className="text-gray-700">Partner with local guides, historians, and artisans to provide authentic content and support local economies.</span>
    </li>
    <li>
      <strong className="font-semibold text-gray-800">Increase Awareness:</strong>
      <span className="text-gray-700">Promote Ethiopia as a top travel destination through innovative marketing strategies and partnerships.</span>
    </li>
    <li>
      <strong className="font-semibold text-gray-800">Enhance Education:</strong>
      <span className="text-gray-700">Provide educational resources for schools and institutions to learn about Ethiopian history and culture through immersive experiences.</span>
    </li>
    <li>
      <strong className="font-semibold text-gray-800">Build a Strong Online Presence:</strong>
      <span className="text-gray-700">Establish a user-friendly platform for tourists to access and book AR/VR experiences.</span>
    </li>
  </ul>
</div>


        </div>
      </section>
    );
}
