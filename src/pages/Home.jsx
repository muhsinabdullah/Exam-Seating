import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="text-center mt-20">
      <h1 className="text-4xl font-bold mb-4">
        Exam Seating Arrangement System
      </h1>
      <p className="text-gray-600 mb-6">
        Automatically generate seating plans for examination halls
      </p>
      <Link to="/seating" className="btn btn-primary">
        Generate Seating Plan
      </Link>
    </div>
  );
};

export default Home;
