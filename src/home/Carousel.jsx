import { useState } from "react";

const Carousel = () => {
  // Image URLs
  const images = [
    "https://solshare.com/wp-content/uploads/2022/08/7-150x150.png",
    "https://solshare.com/wp-content/uploads/2022/08/8-150x150.png",
    "https://solshare.com/wp-content/uploads/2022/08/1-150x150.png",
    "https://solshare.com/wp-content/uploads/2022/08/2-150x150.png",
    "https://solshare.com/wp-content/uploads/2022/08/3-150x150.png",
    "https://solshare.com/wp-content/uploads/2022/08/6-150x150.png",
    "https://solshare.com/wp-content/uploads/2022/08/7-150x150.png",
    "https://solshare.com/wp-content/uploads/2022/08/8-150x150.png",
    "https://solshare.com/wp-content/uploads/2022/08/1-150x150.png",
    "https://solshare.com/wp-content/uploads/2022/08/2-150x150.png",
    "https://solshare.com/wp-content/uploads/2022/08/3-150x150.png",
    "https://solshare.com/wp-content/uploads/2022/08/6-150x150.png",
  ];

  // State to track the current image index
  const [currentIndex, setCurrentIndex] = useState(0);

  // Handlers for navigating the carousel
  const goToPrevious = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  const goToNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <div>
      <div className="relative w-full max-w-4xl mx-auto overflow-hidden">
        {/* Carousel Content */}
        <div
          className="flex transition-transform duration-500"
          style={{
            transform: `translateX(-${currentIndex * 100}%)`,
          }}
        >
          {images.map((image, index) => (
            <img
              key={index}
              src={image}
              alt={`Slide ${index + 1}`}
              className="w-full h-[200px] object-cover"
            />
          ))}
        </div>

        {/* Navigation Buttons */}
        <button
          onClick={goToPrevious}
          className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-black bg-opacity-50 text-white p-2 rounded-full hover:bg-opacity-75"
        >
          ❮
        </button>
        <button
          onClick={goToNext}
          className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-black bg-opacity-50 text-white p-2 rounded-full hover:bg-opacity-75"
        >
          ❯
        </button>

        {/* Dots Indicator */}
        <div className="absolute bottom-4 left-0 right-0 flex justify-center space-x-6 m-2">
          {images.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`w-2 h-1 rounded-full ${
                currentIndex === index
                  ? "bg-white"
                  : "bg-gray-500 bg-opacity-50 hover:bg-opacity-75"
              }`}
            ></button>
          ))}
        </div>
      </div>

      <div className="w-full text-center my-8">
        <button className="btn btn-outline btn-primary">Latest News</button>
      </div>
    </div>
  );
};

export default Carousel;
