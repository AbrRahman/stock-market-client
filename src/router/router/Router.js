import { createBrowserRouter } from "react-router-dom";
import Blog from "../../component/blog/Blog";
import Login from "../../component/login/Login";
import Register from "../../component/register/Register";
import Service from "../../component/service/Service";
import ServiceDetails from "../../component/serviceDetails/ServiceDetails";
import Main from "../../layout/Main";
import Home from "../../pages/home/Home";

export const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: '/',
                loader: () => fetch('http://localhost:8000/service?limit=3'),
                element: <Home></Home>
            },
            { path: '/login', element: <Login></Login> },
            { path: '/register', element: <Register></Register> },
            {
                path: '/service',
                loader: () => fetch('http://localhost:8000/service'),
                element: <Service></Service>
            },
            { path: '/service/:id', element: <ServiceDetails></ServiceDetails> },
            { path: '/blog', element: <Blog></Blog> }
        ]
    }
])