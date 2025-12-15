import SeatCard from "../components/SeatCard";

const students = [
  { roll: 101, name: "Rahim" },
  { roll: 102, name: "Karim" },
  { roll: 103, name: "Ayesha" },
  { roll: 104, name: "Nusrat" },
  { roll: 105, name: "Sajid" },
  { roll: 106, name: "Mim" },
];

const SeatingPlan = () => {
  return (
    <div className="my-10">
      <h2 className="text-3xl font-bold text-center mb-8">
        Exam Hall Seating Plan
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {students.map((student, index) => (
          <SeatCard key={index} student={student} seatNo={index + 1} />
        ))}
      </div>
    </div>
  );
};

export default SeatingPlan;
