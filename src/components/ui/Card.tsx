import { Avatar, AvatarImage } from "@/components/ui/avatar"
import SubTopicaction from "../actions/SubTopicaction";
import { Link, useLocation } from "react-router-dom";
import PostAction from "../actions/PostAction";

 


const Card = ({ data }: { data: any }) => {
     const location = useLocation()
console.log(location)
 
    return (
        <div className={`w-full p-4 border ${data?.category == 'community' ? 'bg-green-100' : data?.category == 'emergancy' ? 'bg-amber-100' : data?.category == 'report' ? 'bg-cyan-100' : data?.category == 'thread' ? 'bg-zinc-100' : data?.category == 'others' ? 'bg-red-100' : 'bg-slate-100'}`}>

            <Link  to={`/${data._id}`}>
                <div className="flex justify-between items-center">
                    <div className="flex gap-2">
                        <Avatar>
                            <AvatarImage className='w-40' src={data?.user?.profile} />
                        </Avatar>
                        <div >
                            <p className="font-semibold">{data?.user?.name}</p>
                            <p className="text-xs">{data.createdAt}</p>
                        </div>

                    </div>
                    <div>
                        <p className="bg-zinc-900 p-1 text-sm text-white rounded-lg font-semibold">Followed</p>
                    </div>
                </div>


                <div className="mt-8">
                    <p className="bg-green-100 p-3 rounded-md "><span className="font-semibold">Topic:</span> {data.topic}</p>
                    <img loading="lazy" className="w-full mt-4" src={data.image} />
                    <p className="bg-base-100 px-3 py-5 rounded-md mt-4"> <span className="block font-semibold">Details :</span>{data.details}</p>
                </div>


                <div className="mt-14">
                    <div className="mt-14">
                        <p className="bg-base-100 p-3 rounded-md mt-4 w-full"><span className="font-semibold text-zinc-600">sub Topic :</span> {data.subTopic}</p>
                        <SubTopicaction />
                    </div>
                </div>
                <div className={`mt-20 border-2 ${location.pathname === '/'? 'hidden':'block'}`}>
                    <PostAction />
                </div>
            </Link>
            
        </div>
        
    );
};

export default Card;