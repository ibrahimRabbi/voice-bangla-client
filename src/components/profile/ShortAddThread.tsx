import { Avatar, AvatarImage } from "@/components/ui/avatar";
import { Textarea } from "@/components/ui/textarea";
import { IoMdPhotos } from "react-icons/io";
import { FaMapMarked } from "react-icons/fa";
import { Link } from "react-router-dom";
import { useGetUserQuery } from "@/redux/api/baseApi";



const ShortAddThread = () => {

    const { data: user } = useGetUserQuery({})

    return (
        <div className="lg:pt-48 pt-60 w-full flex items-start gap-4">
            <Avatar className="lg:inline-block hidden">
                <AvatarImage src={user?.response?.profile} />
            </Avatar>
            <form >
                <p className="text-xl font-bold text-cyan-700">Aamar Awaz</p>
                <div className="relative">
                    <Textarea placeholder="write thread" className="lg:w-[800px] w-[500px] mt-1 border border-zinc-300 bg-sky-50 p-2" />
                    <div className="flex gap-3 absolute bottom-1 left-2">
                        <Link to=''><IoMdPhotos className="text-xl text-cyan-700" /></Link>
                        <Link to=''><FaMapMarked className="text-xl text-cyan-700" /></Link>
                    </div>
                </div>
                <div className="flex justify-end">
                    <button className="border right-0 bg-sky-700 text-white py-1 px-3 rounded-md mt-2">Post</button>
                </div>
            </form>
        </div>
    );
};

export default ShortAddThread;