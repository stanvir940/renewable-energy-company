const AwardsSection = () => {
  const awards = [
    {
      logo: "https://solshare.com/wp-content/uploads/2022/07/3-2.png",
      name: "Award 1",
    },
    {
      logo: "https://solshare.com/wp-content/uploads/2022/07/12-1.png",
      name: "Award 2",
    },
    {
      logo: "https://solshare.com/wp-content/uploads/2024/08/Copy-of-KCP_laureate-1-150x150.png",
      name: "Award 3",
    },
    {
      logo: "https://solshare.com/wp-content/uploads/2022/07/2-2.png",
      name: "Award 4",
    },
    {
      logo: "https://solshare.com/wp-content/uploads/2022/07/18-1.png",
      name: "Award 5",
    },
    {
      logo: "https://solshare.com/wp-content/uploads/2022/07/4-2.png",
      name: "Award 6",
    },
  ];

  return (
    <div className="py-12 bg-gray-100">
      {/* Heading */}
      <h2 className="text-3xl font-bold text-center mb-8 text-gray-800">
        Our Awards and Recognitions
      </h2>

      {/* Award Logos */}
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-6 max-w-5xl mx-auto">
        {awards.map((award, index) => (
          <div
            key={index}
            className="flex justify-center items-center bg-white shadow-md rounded-lg p-4 hover:scale-105 transition-transform"
          >
            <img
              src={award.logo}
              alt={`Logo of ${award.name}`}
              className="w-16 h-16 object-contain"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default AwardsSection;
