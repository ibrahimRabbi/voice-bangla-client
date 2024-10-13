import SubTopicaction from "../actions/SubTopicaction";
import { Avatar, AvatarImage } from "../ui/avatar";
import Faild from "./Faild";

const CommentSec = ({ data }: { data: any }) => {

    return (
        <div className="mt-20">
            <Faild data={data} />  
            {
                data.comments.map((v:any) => {
                    return (
                        <div className="flex mt-8 ml-20 items-start gap-2">
                            <div className="flex flex-col justify-center items-center">
                                <Avatar>
                                    <AvatarImage className='w-13' src={data?.user.profile} />
                                </Avatar>
                                
                            </div>
                            <div>
                                <div className="p-2 border shadow-md flex flex-col w-[80%] bg-slate-200 rounded-lg">
                                    <span className="text-[12px] font-bold">{data?.user.name}</span>
                                    <span>{v}</span>
                                </div>
                                    <SubTopicaction />
                            </div>

                        </div>
                    )
                })
            }
        </div>
    );
};

export default CommentSec;