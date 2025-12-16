const Features = () => {
  const featureData = [
    {
      title: "Efficient Seating",
      subtitle:
        "Automatically manage classroom seating with limits for students and teachers.",
    },
    {
      title: "Real-Time Alerts",
      subtitle:
        "Receive instant notifications when room limits are reached or invalid selections occur.",
    },
    {
      title: "Responsive Design",
      subtitle:
        "Access the seating arrangement system on desktop, tablet, and mobile devices seamlessly.",
    },
    {
      title: "Secure Access",
      subtitle:
        "Admin login ensures that only authorized personnel can manage seating arrangements.",
    },
  ];

  return (
    <section className="max-w-6xl mx-auto px-6 py-12">
      <h2 className="text-4xl font-bold text-center mb-10 bg-clip-text text-transparent bg-gradient-to-r from-green-400 to-blue-500">
        Our Features
      </h2>

      <div className="flex flex-col md:flex-row gap-6 justify-center">
        {featureData.map((feature, index) => (
          <div
            key={index}
            className="flex-1 border border-gray-300 p-6 rounded-xl shadow-lg hover:shadow-2xl hover:-translate-y-2 transition-transform duration-300 bg-white"
          >
            <h3 className="text-2xl font-bold mb-2 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-500">
              {feature.title}
            </h3>
            <p className="text-gray-700">{feature.subtitle}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Features;
