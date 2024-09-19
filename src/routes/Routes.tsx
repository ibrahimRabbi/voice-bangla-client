import { createBrowserRouter } from "react-router-dom";
import Signup from "../pages/Signup";
import SignIn from "../pages/SignIn";
import UpdateProfile from "@/pages/UpdateProfile";




const router = createBrowserRouter([
    {
        path: '/',
        element: <p>hello</p>
    },
    {
        path: '/sign-up',
        element: <Signup />
    },
    {
        path: '/sign-in',
        element: <SignIn />
    },
    {
        path: '/update-profile',
        element: <UpdateProfile/>
    },

])

export default router