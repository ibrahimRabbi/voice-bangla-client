 import {useGetUserQuery } from "@/redux/api/baseApi";
import toast from "react-hot-toast";
import { useLocation, useNavigate } from "react-router-dom";





const ProtectRoute = ({ children }: { children: any }) => {

    const { data: user, isLoading } = useGetUserQuery({})
    const navigate = useNavigate()
    const location = useLocation()


    if (isLoading) {
        return <h1 className="text-4xl">Loading...</h1>
    }


    if (!user?.success) {
        toast.error(user?.message)
        navigate('/sign-in', { state: location.pathname })
    } 

    return children
};

export default ProtectRoute;