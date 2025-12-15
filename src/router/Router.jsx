import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layout/MainLayout";
import Home from "../pages/Home";
import SeatingPlan from "../pages/SeatingPlan";
import NotFound from "../pages/NotFound";


const router = createBrowserRouter([
    {
        path: "/",
        element: <MainLayout />,
        errorElement: <NotFound/>,
        children:[
        {
            path:'/',
            element: <Home />
        },
        {
            path: "/seating", element: <SeatingPlan />
        }
    ]
    },
    
]);

export default router;