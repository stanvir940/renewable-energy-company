import "boxicons";
import {
  FaFacebook,
  FaLinkedin,
  FaInstagramSquare,
  FaTwitter,
  //   FaHome,
  //   MdOutlineElectricRickshaw,
  //   TbSolarPanel2,
  //   CiCloudOn,
} from "react-icons/fa";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useEffect, useRef } from "react";

gsap.registerPlugin(ScrollTrigger);

const Home = () => {
  const sectionRef = useRef(null);
  const numberRef = useRef(null);

  useEffect(() => {
    gsap.fromTo(
      { value: 0 }, // Starting value
      { value: 200 }, // Ending value
      {
        duration: 10,
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top center", // Start animation when the section hits the center
          end: "bottom center", // End animation when leaving the center
          scrub: true, // Smooth scrolling animation
          markers: false, // Debug markers (remove this in production)
        },
        onUpdate: function () {
          if (numberRef.current) {
            const currentValue = Math.floor(this.targets()[0].value); // Get the current value from the tween
            numberRef.current.textContent = currentValue; // Update the number on the screen
          }
        },
      }
    );
  }, []);

  return (
    <div>
      <div className="relative m-4 w-full">
        {/* Text content */}
        <div className="absolute inset-0 flex items-center justify-center text-white text-7xl font-bold bg-black bg-opacity-70">
          <p>Helios Engineering solutions</p>
        </div>

        {/* Image */}
        <img
          className="w-full h-full object-cover"
          src="https://homescape.solar/wp-content/uploads/2019/04/h2.jpg"
          alt=""
        />
      </div>

      <div className="w-full text-gray-700 text-center">
        <p>
          A first mover in the latest clean-tech developments in Bangladesh, a
          high social impact market with more EVs on its streets than Tesla has
          sold globally to date and the world’s largest distributed renewable
          energy program.
          <i className="bx bxl-linkedin text-xl text-white"></i>
        </p>
      </div>

      {/* sticky parts */}
      <div
        id="sticky-social-icons-container"
        className="fixed top-1/2 left-0 transform -translate-y-1/2 z-50 flex flex-col space-y-6 bg-blue-900 p-2 rounded-r-lg"
      >
        <a
          href="https://www.facebook.com/mesolshare/"
          target="_blank"
          aria-label="Facebook"
          className="text-white text-2xl hover:text-blue-600"
        >
          <FaFacebook />
        </a>
        <a
          href="https://www.linkedin.com/"
          target="_blank"
          aria-label="LinkedIn"
          className="text-white text-2xl hover:text-blue-500"
        >
          <FaLinkedin></FaLinkedin>
        </a>
        <a
          href="https://www.instagram.com/sol_share/"
          target="_blank"
          aria-label="Instagram"
          className="text-white text-2xl hover:text-pink-500"
        >
          <FaInstagramSquare />
        </a>
        <a
          href="https://twitter.com/MESOL_share"
          target="_blank"
          aria-label="Twitter"
          className="text-white text-2xl hover:text-blue-400"
        >
          <FaTwitter />
        </a>
      </div>

      {/* icon for gsap */}
      <div className="flex justify-center items-center text-center w-full my-10 space-x-10">
        <div ref={sectionRef} className="flex flex-col">
          <div className="text-7xl w-full text-green-500">
            <FaFacebook />
          </div>
          <h1 ref={numberRef}>0</h1>
        </div>
        <div className="flex flex-col">
          <div className="text-7xl w-full text-green-500">
            <FaFacebook />
          </div>
          <h1>Home</h1>
        </div>
        <div className="flex flex-col">
          <div className="text-7xl w-full text-green-500">
            <FaFacebook />
          </div>
          <h1>Home</h1>
        </div>
        <div className="flex flex-col">
          <div className="text-7xl w-full text-green-500">
            <FaFacebook />
          </div>
          <h1>Home</h1>
        </div>
        <div className="flex flex-col">
          <div className="text-7xl w-full text-green-500">
            <FaFacebook />
          </div>
          <h1>Home</h1>
        </div>
      </div>

      {/* video sections */}
      <div className="flex flex-col items-center justify-center bg-gray-100 py-10">
        <h2 className="text-4xl font-bold mb-6 text-gray-800">
          Watch Our Video
        </h2>
        <div className="w-full max-w-4xl aspect-w-16 aspect-h-9">
          <iframe
            className="w-full h-full rounded-lg shadow-lg"
            src="https://www.youtube.com/embed/T9_0VIeK6hg"
            title="YouTube Video"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
      </div>

      {/* about us section */}
      <div>
        <section className="py-16 px-4 bg-white text-gray-800">
          <div className="max-w-7xl mx-auto text-center">
            <h2 className="text-4xl font-extrabold text-green-600 mb-4">
              ABOUT US
            </h2>
            <p className="text-2xl text-gray-600 font-semibold mb-6">
              Dreamers. Innovators. Creators
            </p>
            <p className="text-lg text-gray-700 mb-8">
              SOLshare is a leading climate-tech company located in the heart of
              Bangladesh. Founded in 2014-2015, we provide cutting-edge
              technology and services and offer scalable solutions through our
              globally recognized service platform – the SOLbazaar.
            </p>
            <p className="text-lg text-gray-700 mb-8">
              We built our solutions by closely listening to our potential
              clientele and understanding their expectations with our product.
              This has allowed us to bridge the energy gap and offer our
              services to changing market needs.
            </p>
            <p className="text-lg text-gray-700">
              Why not join our fast-growing customer base? Get in touch today to
              learn more about the SOLshare story.
            </p>
            <button className="btn btn-outline btn-accent my-4">
              Get Offers
            </button>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Home;
