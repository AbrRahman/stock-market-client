import { createBrowserRouter } from "react-router-dom";
import AddService from "../../component/addService/AddService";
import Blog from "../../component/blog/Blog";
import EditMyReview from "../../component/editMyReview/EditMyReview";
import Login from "../../component/login/Login";
import MyReviews from "../../component/myReviews/MyReviews";
import Register from "../../component/register/Register";
import Service from "../../component/service/Service";
import ServiceDetails from "../../component/serviceDetails/ServiceDetails";
import Main from "../../layout/Main";
import Home from "../../pages/home/Home";
import PrivateRouter from "../privateRouter/PrivateRouter";

export const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: '/',
                loader: () => fetch('https://stock-market-server.vercel.app/service?limit=3'),
                element: <Home></Home>
            },
            { path: '/login', element: <Login></Login> },
            { path: '/register', element: <Register></Register> },
            {
                path: '/service',
                loader: () => fetch('https://stock-market-server.vercel.app/service'),
                element: <Service></Service>
            },
            {
                path: '/add-service',
                element: <PrivateRouter><AddService></AddService></PrivateRouter>
            },
            {
                path: '/service/:id',
                loader: ({ params }) => fetch(`https://stock-market-server.vercel.app/service/${params.id}`),
                element: <ServiceDetails></ServiceDetails>
            },
            {
                path: '/my-reviews', element: <PrivateRouter><MyReviews></MyReviews></PrivateRouter>
            },
            {
                path: '/my-reviews/:id',
                loader: ({ params }) => fetch(`https://stock-market-server.vercel.app/my-reviews/${params.id}`),
                element: <PrivateRouter><EditMyReview></EditMyReview></PrivateRouter>
            },
            { path: '/blog', element: <Blog></Blog> }
        ]
    }
])