import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layout/MainLayout";
import Home from "../pages/Home";
import Login from "../pages/Login";
import Seating from "../pages/Seating";
import PrivateRoute from "../components/PrivateRoute";
import About from "../pages/About";

const router = createBrowserRouter([
    {
        path: "/",
        element: <MainLayout />,
        children: [
            { path: "/", element: <Home /> },
            { path: "/about", element: <About /> },
            { path: "/login", element: <Login /> },
            {
                path: "/seating",
                element: (
                    <PrivateRoute>
                        <Seating />
                    </PrivateRoute>
                )
            }
        ]
    }
]);

export default router;
