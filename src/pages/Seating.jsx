import { useEffect, useState } from "react";
import toast, { Toaster } from "react-hot-toast";

const ROOMS = 6;
const STUDENTS_LIMIT = 10;
const TEACHERS_LIMIT = 2;

const Seating = () => {
    const [students, setStudents] = useState([]);
    const [teachers, setTeachers] = useState([]);

    const [rooms, setRooms] = useState(
        Array.from({ length: ROOMS }, (_, i) => ({
            id: i + 1,
            students: [],
            teachers: [],
        }))
    );

    const [usedStudents, setUsedStudents] = useState(new Set());
    const [usedTeachers, setUsedTeachers] = useState(new Set());

    // Load data
    useEffect(() => {
        fetch("/students.json")
            .then(res => res.json())
            .then(setStudents);

        fetch("/teachers.json")
            .then(res => res.json())
            .then(setTeachers);
    }, []);

    // Add student
    const handleAddStudent = (roomIndex, student) => {
        const room = rooms[roomIndex];

        if (room.students.length >= STUDENTS_LIMIT) {
            toast.error("Student limit reached for this room!");
            return;
        }
        if (usedStudents.has(student.id)) return;

        const newRooms = rooms.map((r, idx) =>
            idx === roomIndex
                ? { ...r, students: [...r.students, student] }
                : r
        );

        setRooms(newRooms);
        setUsedStudents(new Set([...usedStudents, student.id]));
        toast.success(`${student.roll} added to Room ${room.id}`);
    };

    // Add teacher
    const handleAddTeacher = (roomIndex, teacher) => {
        const room = rooms[roomIndex];

        if (room.teachers.length >= TEACHERS_LIMIT) {
            toast.error("Teacher limit reached for this room!");
            return;
        }
        if (usedTeachers.has(teacher.id)) return;

        const newRooms = rooms.map((r, idx) =>
            idx === roomIndex
                ? { ...r, teachers: [...r.teachers, teacher] }
                : r
        );

        setRooms(newRooms);
        setUsedTeachers(new Set([...usedTeachers, teacher.id]));
        toast.success(`${teacher.name} added to Room ${room.id}`);
    };

    return (
        <div className="space-y-10">
            {/* Hot Toast Container */}
            <Toaster position="top-right" reverseOrder={false} />

            <h1 className="text-3xl font-bold">Classroom Arrangement</h1>

            {rooms.map((room, roomIndex) => (
                <div key={room.id} className="card bg-base-200 p-6 space-y-5">
                    <h2 className="text-xl font-bold">Room {room.id}</h2>

                    {/* Assigned Teachers */}
                    <div>
                        <p className="font-semibold">
                            Teachers ({room.teachers.length}/{TEACHERS_LIMIT})
                        </p>
                        <div className="flex gap-2 flex-wrap">
                            {room.teachers.map(t => (
                                <span key={t.id} className="badge badge-primary">
                                    {t.name}
                                </span>
                            ))}
                        </div>
                    </div>

                    {/* Assigned Students */}
                    <div>
                        <p className="font-semibold">
                            Students ({room.students.length}/{STUDENTS_LIMIT})
                        </p>
                        <div className="flex gap-2 flex-wrap">
                            {room.students.map(s => (
                                <span key={s.id} className="badge badge-secondary">
                                    {s.roll}
                                </span>
                            ))}
                        </div>
                    </div>

                    {/* Teacher Selection */}
                    <div>
                        <p className="font-semibold mb-2">Select Teachers</p>
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-2">
                            {teachers.map(t => {
                                const isDisabled =
                                    usedTeachers.has(t.id) ||
                                    room.teachers.length >= TEACHERS_LIMIT;

                                return (
                                    <button
                                        key={t.id}
                                        onClick={() => handleAddTeacher(roomIndex, t)}
                                        disabled={isDisabled}
                                        className={`btn btn-sm ${usedTeachers.has(t.id) ? "btn-error" : "btn-outline"
                                            }`}
                                    >
                                        {t.name}
                                    </button>
                                );
                            })}
                        </div>
                    </div>

                    {/* Student Selection */}
                    <div>
                        <p className="font-semibold mb-2">Select Students</p>
                        <div className="grid grid-cols-3 md:grid-cols-6 gap-2">
                            {students.map(s => {
                                const isDisabled =
                                    usedStudents.has(s.id) ||
                                    room.students.length >= STUDENTS_LIMIT;

                                return (
                                    <button
                                        key={s.id}
                                        onClick={() => handleAddStudent(roomIndex, s)}
                                        disabled={isDisabled}
                                        className={`btn btn-xs ${usedStudents.has(s.id) ? "btn-error" : "btn-outline"
                                            }`}
                                    >
                                        {s.roll}
                                    </button>
                                );
                            })}
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default Seating;
