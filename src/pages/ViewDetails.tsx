import PostAction from "@/components/actions/PostAction";
import { Avatar, AvatarImage } from "@/components/ui/avatar"
import CommentSec from "@/components/commentSection/CommentSec";
import Addthread from "@/components/AddThread/Addthread";
import { useGetSignleThreadsQuery } from "@/redux/api/baseApi";
import { useParams } from "react-router-dom";
import SubTopicaction from "@/components/actions/SubTopicaction";



const ViewDetails = () => {

    const parameter = useParams()
    const { data: threadData, isLoading } = useGetSignleThreadsQuery(parameter.id)



    if (isLoading) {
        return <h1 className="text-4xl">Loading...</h1>
    }

    const { user, details, image, topic, subTopic, createdAt } = threadData?.response
     
    console.log(threadData?.response)


    return (
        <section className="mb-16">
            <Addthread />
            <div className="flex justify-between items-center mt-10">
                <div className="flex gap-2">
                    <Avatar>
                        <AvatarImage className='w-40' src={user?.profile} />
                    </Avatar>
                    <div >
                        <p className="font-semibold">{user?.name}</p>
                        <p className="text-xs">{createdAt}</p>
                    </div>
                </div>
                <div>
                    <p className="bg-zinc-900 p-1 text-sm text-white rounded-lg font-semibold">Followed</p>
                </div>
            </div>

            <p className="bg-slate-100 p-3 rounded-md mt-4"><span className="font-semibold">Topic:</span> {topic}</p>
            <img loading="lazy" className="w-full mt-4" src={image} />
            <p className="bg-slate-100 px-3 py-5 rounded-md mt-4"> <span className="block font-semibold">Details :</span>{details}</p>

            <div className="lg:w-1/2 mt-3">
                <PostAction />
            </div>
            
            <CommentSec data={threadData?.response} />

            <div className="mt-16">
                {
                    subTopic.map((v:any) => {
                        return (
                            <div>
                                <p className="py-4 px-2 bg-slate-100 rounded-md" key={Math.random()}>
                                    <span className="font-semibold">Topic : </span>
                                    {v} </p>
                                <SubTopicaction/>
                            </div>
                        )
                    }) 
                 }
            </div>

        </section>
    );
};

export default ViewDetails;