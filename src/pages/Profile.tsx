import ProfileLayout from "@/components/profile/ProfileLayout";
import { useGetUserQuery } from "@/redux/api/baseApi";
import { Outlet, useLocation, useNavigate } from "react-router-dom";


const Profile = () => {

    const { data: user, isLoading } = useGetUserQuery({})
    const navigate = useNavigate()
    const location = useLocation()

    console.log(user)

    if (isLoading) {
        return <h1 className="text-2xl">Loading...</h1>
    }


    if (!user?.success) {
        navigate('/sign-in', { state: location.pathname })
    }


    return (
        <section  >
            <img className="w-full" src="https://i.ibb.co.com/8sxXz5y/download-3.png" alt="" />
            <ProfileLayout />
            <Outlet />
        </section>
    );
};

export default Profile;