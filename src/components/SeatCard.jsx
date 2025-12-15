const SeatCard = ({ student, seatNo }) => {
  return (
    <div className="card bg-base-100 shadow-md border">
      <div className="card-body text-center">
        <h2 className="card-title justify-center">
          Seat No: {seatNo}
        </h2>
        <p className="font-semibold">Roll: {student.roll}</p>
        <p>Name: {student.name}</p>
      </div>
    </div>
  );
};

export default SeatCard;
