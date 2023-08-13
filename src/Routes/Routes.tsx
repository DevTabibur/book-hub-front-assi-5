
import {
    createBrowserRouter,
} from "react-router-dom";
import App from "../App";
import Home from "../pages/Home";
import Register from "../pages/Register";
import Login from "../pages/Login";
import NotFound from "../pages/NotFound";
import ForgetPassword from "../pages/ForgetPassword";
import Books from "../pages/Books";
import AddBooks from "../pages/AddBooks";
import EditBooks from "../pages/EditBooks";

const routes = createBrowserRouter([
    {
        path: "/",
        element: <App />,
        children: [
            {
                index: true,
                element: <Home />
            }
        ]
    },
    {
        path: '/home',
        element: <Home />
    },
    {
        path: '/',
        element: <Home />
    },
    {
        path: '/register',
        element: <Register />
    },
    {
        path: '/login',
        element: <Login />
    },
    {
        path: '/forget-password',
        element: <ForgetPassword />
    },
    {
        path: '/all-books',
        element: <Books />
    },
    {
        path: '/add-books',
        element: <AddBooks />
    },
    {
        path: '/edit-books',
        element: <EditBooks />
    },
    {
        path: '*',
        element: <NotFound />
    },
]);

export default routes