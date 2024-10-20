import { Avatar, AvatarImage } from "@/components/ui/avatar";
import { useGetUserQuery } from "@/redux/api/baseApi";
import { NavLink } from "react-router-dom";

const ProfileLayout = () => {

    const { data: user } = useGetUserQuery({})


    return (
        <div className="relative">
            <div className="absolute border-b  border-zinc-300 w-full pb-5 -bottom-[155px]">

                <div className="flex  items-end justify-between gap-12">

                    <div className="flex items-center gap-6">
                        <Avatar className="w-40 h-40 border-2 ring-4">
                            <AvatarImage src={user?.response?.profile} />
                        </Avatar>
                        <div>
                            <p className="font-bold text-2xl">{user?.response?.name}</p>
                            <p className="font-semibold text-zinc-600">@Ebrahim_rabbi__</p>
                        </div>
                    </div>

                    <div className="flex justify-between items-center gap-6">

                        <NavLink to='/profile' className="bg-base-300 px-4 py-1 font-semibold border rounded-lg hover:bg-zinc-400 duration-150">Posts</NavLink>

                        <NavLink to='/profile/update-profile' className="bg-base-300 px-4 py-1 font-semibold border rounded-lg hover:bg-zinc-400 duration-150">Edit Profile</NavLink>

                        <NavLink to='/details' className="bg-base-300 px-4 py-1 font-semibold border rounded-lg hover:bg-zinc-400 duration-150">Details</NavLink>

                        <NavLink to='/my-photos' className="bg-base-300 hover:bg-zinc-400 duration-150 px-4 py-1 font-semibold border rounded-lg">Photos</NavLink>
                    </div>

                </div>

            </div>
        </div>
    );
};

export default ProfileLayout;