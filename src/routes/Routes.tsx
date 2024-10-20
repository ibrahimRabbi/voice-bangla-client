import { createBrowserRouter } from "react-router-dom";
import Signup from "../pages/Signup";
import SignIn from "../pages/SignIn";
import UpdateProfile from "@/pages/UpdateProfile";
import PostThread from "@/pages/PostThread";
import ApplicationLayout from "@/layouts/ApplicationLayout";
import HomePage from "@/pages/HomePage";
import ViewDetails from "@/pages/ViewDetails";
import Trending from "@/pages/Trending";
import Setting from "@/pages/Setting";
import Notifications from "@/pages/Notifications";
import Profile from "@/pages/Profile";
import MyPost from "@/components/profile/MyPost";
import PostApproved from "@/pages/admin/PostApproved";
 




const router = createBrowserRouter([
    {
        path: '/',
        element: <ApplicationLayout />,
        children: [
            {
                index: true,
                element: <HomePage/>
            },
            {
                path: '/:id',
                element:<ViewDetails/>
            },
            {
                path: 'trending',
                element:<Trending/>
            },
            {
                path: 'add-thread',
                element: <PostThread/>
            },
            {
                path: 'settings',
                element: <Setting/>
            },
            {
                path: 'notifications',
                element: <Notifications/>
            },
            {
                path: 'profile',
                element: <Profile />,
                children: [
                    {
                        index: true,
                        element:<MyPost/>
                    },
                    {
                        path: 'update-profile',
                        element:<UpdateProfile/>
                    }
                ]
            },

            {
                path: 'dashboard',
                element: <PostApproved/>
            },
        ]
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