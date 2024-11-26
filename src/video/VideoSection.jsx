import { useEffect } from "react";
import "aos/dist/aos.css";
import AOS from "aos";

const VideoSection = () => {
  useEffect(() => {
    AOS.init({ duration: 1500 });
  }, []);

  return (
    <div className="py-16 bg-gray-100">
      {/* Heading */}
      <h2
        className="text-4xl font-bold text-center mb-8 text-gray-800"
        data-aos="fade-up"
      >
        Explore Our Vision
      </h2>

      {/* Video */}
      <div
        className="max-w-4xl mx-auto"
        data-aos="fade-up"
        data-aos-delay="200"
      >
        <div className="aspect-w-16 aspect-h-9">
          <iframe
            src="https://www.youtube.com/embed/g-t9r_aOEvE"
            title="Video"
            className="w-full h-full rounded-lg shadow-lg"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default VideoSection;
