import Carousel from "./Carousel";

const Quote = () => {
  return (
    <div>
      <div className="relative w-full h-screen bg-gray-100">
        {/* Background Image */}
        <div className="absolute inset-0">
          <img
            src="https://msmrenewables.ie/wp-content/uploads/2024/05/shutterstock_2198215573-1.jpg" // Replace with your image URL
            alt="Background"
            className="w-full h-full object-cover"
          />
        </div>

        {/* Text Section */}
        <div className="relative flex items-center justify-center h-full">
          <div className="w-full md:w-2/3 lg:w-1/2 p-6 bg-white bg-opacity-70 backdrop-blur-lg rounded-lg shadow-xl border border-gray-200 text-center">
            <h1 className="text-2xl md:text-4xl font-bold text-gray-800 mb-4">
              Create a Network. Share Electricity. Brighten the Future
            </h1>
            <p className="text-gray-700 text-sm md:text-base leading-relaxed mb-6">
              At Helios, we continue to push the boundaries to innovate and
              create technology to provide the best possible services for
              vulnerable communities while also keeping sustainability and
              action against climate change at our core.
            </p>
            <button className="bg-blue-600 text-white font-medium py-2 px-4 rounded hover:bg-blue-700">
              Learn More
            </button>
          </div>
        </div>
      </div>

      <div className="w-full my-28">
        {/* First Section */}
        <div className="relative w-full h-screen bg-gray-100">
          {/* Background Image */}
          <div className="absolute inset-0">
            <img
              src="https://www.travelmate.com.bd/wp-content/uploads/2018/07/hero.jpg" // Replace with your image URL
              alt="Background"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Text Section */}
          <div className="relative flex items-center justify-center h-full">
            <div className="w-full md:w-2/3 lg:w-1/2 p-6 bg-white bg-opacity-70 backdrop-blur-lg rounded-lg shadow-xl border border-gray-200 animate-fade-in text-center">
              <h1 className="text-2xl md:text-4xl font-bold text-gray-800 mb-4">
                Create a Network. Share Electricity. Brighten the Future
              </h1>
              <p className="text-gray-700 text-sm md:text-base leading-relaxed mb-6">
                This has allowed us to touch the lives of thousands, improving
                their ways of life through reliable access to energy and income.
              </p>
              <button className="bg-blue-600 text-white font-medium py-2 px-4 rounded hover:bg-blue-700">
                Learn More
              </button>
            </div>
          </div>
        </div>

        {/* Second Section */}
        <div className="relative w-full h-[400px]">
          {/* Image */}
          <img
            src="https://via.placeholder.com/1920x800" // Replace with your image URL
            alt="Overlay Section"
            className="w-full h-full object-cover"
          />

          {/* Text and Button */}
          <div className="absolute inset-0 flex flex-col items-center justify-center bg-black bg-opacity-30 text-center animate-slide-up">
            <h2 className="text-white text-3xl font-semibold mb-4">
              Join Our Mission
            </h2>
            <button className="bg-yellow-500 text-black py-2 px-6 rounded-lg shadow-md hover:bg-yellow-600">
              Get Started
            </button>
          </div>
        </div>
      </div>

      <div
        className="relative w-full h-[500px] flex items-center justify-center bg-cover bg-center my-28"
        style={{
          backgroundImage:
            "url('https://i0.wp.com/blog.cstx.gov/wp-content/uploads/2018/04/37506217486_fd73f6d03b_k-e1523978459421.jpg?fit=1643%2C1034&ssl=1')",
        }}
      >
        {/* Gaussian Blur Effect */}
        <div className="absolute inset-0 bg-black bg-opacity-40 backdrop-blur-sm"></div>

        {/* Content */}
        <div className="relative flex flex-wrap w-full max-w-6xl mx-auto px-4">
          {/* Left Image */}
          <div className="w-full md:w-1/2 flex justify-center">
            <img
              src="https://static.vecteezy.com/system/resources/thumbnails/026/794/007/small_2x/3d-electrician-character-on-transparent-background-png.png"
              alt="Power Lineman"
              className="h-auto w-3/4 object-contain shadow-lg"
            />
          </div>

          {/* Right Slogan */}
          <div className="w-full md:w-1/2 flex flex-col justify-center items-start text-white z-10">
            <h1 className="text-3xl md:text-5xl font-bold mb-4">
              Empower the Future
            </h1>
            <p className="text-lg md:text-xl leading-relaxed mb-6">
              At Helios, we believe in powering communities and creating
              sustainable solutions. Together, let’s brighten the world.
            </p>
            <button className="bg-yellow-500 text-black py-2 px-6 rounded-lg font-semibold hover:bg-yellow-600 transition-all duration-300">
              Learn More
            </button>
          </div>
        </div>
      </div>

      <div>
        <Carousel></Carousel>
      </div>
    </div>
  );
};

export default Quote;
