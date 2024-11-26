import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const AboutUs = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000, // Animation duration
      once: true, // Ensures animation happens only once
    });
  }, []);
  return (
    <div className="py-16 bg-gray-100">
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20">
        {/* Heading */}
        <h2 className="text-4xl font-bold text-center text-gray-800 mb-8">
          About Us
        </h2>

        {/* Content Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          {/* Left Section - Text */}
          <div data-aos="fade-right">
            <h3 className="text-2xl font-semibold text-gray-800 mb-4">
              Empowering a Sustainable Future
            </h3>
            <p className="text-gray-600 leading-relaxed">
              At **Helio**, we are dedicated to revolutionizing the way
              communities access clean and renewable energy. By distributing
              state-of-the-art solar technology, we empower individuals,
              businesses, and entire regions to embrace sustainability and
              reduce their carbon footprint.
            </p>
            <p className="mt-4 text-gray-600 leading-relaxed">
              Our mission is to harness the power of the sun to create brighter
              futures for everyone, ensuring affordability, reliability, and a
              greener planet for generations to come.
            </p>
          </div>

          {/* Right Section - Image */}
          <div data-aos="fade-left">
            <div className="relative">
              <img
                src="https://www.ianhobbs.com/wp-content/uploads/2023/07/What-are-the-Benefits-of-Solar-Panel-Installation.jpg" // Replace with your actual image URL
                alt="Solar Energy"
                className="rounded-lg shadow-lg w-full"
              />
              <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-t from-gray-900 to-transparent opacity-30 rounded-lg"></div>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div
          className="mt-12 text-center"
          data-aos="fade-up"
          data-aos-delay="200"
        >
          <a
            href="/contact"
            className="px-6 py-3 bg-yellow-500 text-white font-semibold rounded-lg shadow hover:bg-yellow-600 transition"
          >
            Learn More About Us
          </a>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
