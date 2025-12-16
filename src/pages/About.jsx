import React from "react";
import Hero from "../assets/Hero.png"; // Import your hero image

const About = () => {
  return (
    <div className="space-y-10">

      {/* Hero Section */}
      <div
        className="relative w-full h-screen flex items-center justify-center"
        style={{
          backgroundImage: `url(${Hero})`,
          backgroundSize: "cover",       // makes image cover full area
          backgroundPosition: "center",  // centers image
          backgroundRepeat: "no-repeat", // prevents tiling
        }}
      >
        <div className="absolute inset-0 bg-black/50"></div> {/* dark overlay */}
        <h1 className="relative text-4xl md:text-6xl font-bold text-white text-center px-4">
          About Exam Seating Arrangement
        </h1>
      </div>

      {/* Content Section */}
      <div className="max-w-5xl mx-auto p-6 space-y-8">

        <p className="text-lg">
          The <span className="font-semibold">Exam Seating Arrangement System</span> is a web-based 
          application designed to help administrators efficiently manage classroom seating during exams. 
          It ensures that students and teachers are properly assigned to rooms while preventing duplicate 
          assignments and exceeding room limits.
        </p>

        {/* Key Features */}
        <h2 className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-green-400 to-blue-500">
          Key Features
        </h2>
        <ul className="list-disc list-inside space-y-2 text-lg">
          <li>Admin login for secure access.</li>
          <li>6 classrooms with visual allocation of students and teachers.</li>
          <li>Limits enforced: maximum 10 students and 2 teachers per room.</li>
          <li>Real-time feedback using <span className="font-semibold">React Hot Toast</span>.</li>
          <li>Selected students/teachers are highlighted and disabled to prevent duplication.</li>
          <li>Responsive design using Tailwind CSS and DaisyUI.</li>
          <li>Front-end routing with React Router DOM.</li>
        </ul>

        {/* Project Purpose */}
        <h2 className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-500">
          Project Purpose
        </h2>
        <p className="text-lg">
          This project was developed as an academic assignment to demonstrate modern React development practices, 
          state management, and interactive UI design. It provides a practical solution for managing classroom 
          seating efficiently and accurately.
        </p>

        {/* Technologies Used */}
        <h2 className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-yellow-400 to-red-500">
          Technologies Used
        </h2>
        <ul className="list-disc list-inside space-y-2 text-lg">
          <li>React + Vite for frontend development</li>
          <li>Tailwind CSS + DaisyUI for styling</li>
          <li>React Router DOM for routing</li>
          <li>React Hot Toast for notifications and alerts</li>
          <li>JSON files in public folder for student and teacher data</li>
        </ul>

      </div>
    </div>
  );
};

export default About;
