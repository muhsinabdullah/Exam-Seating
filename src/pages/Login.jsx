import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";

const Login = () => {
    const { login } = useContext(AuthContext);
    const navigate = useNavigate();
    const [error, setError] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        const email = e.target.email.value;
        const password = e.target.password.value;

        if (login(email, password)) {
            navigate("/seating");
        } else {
            setError("Invalid Credentials");
        }
    };

    return (
        <div className="flex justify-center items-center min-h-screen">
            <form onSubmit={handleSubmit} className="card bg-base-200 p-6 w-96">
                <h2 className="text-2xl font-bold mb-4 text-center">Login</h2>
                {error && <p className="text-red-500">{error}</p>}
                <input name="email" placeholder="Email" className="input input-bordered mb-3" />
                <input name="password" type="password" placeholder="Password" className="input input-bordered mb-3" />
                <button className="btn btn-primary w-full">Login</button>
                <p className="text-xs text-center mt-3">admin@gmail.com / 123456</p>
            </form>
        </div>
    );
};

export default Login;
