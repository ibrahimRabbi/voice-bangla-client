 import { Avatar, AvatarImage } from "../ui/avatar";
import { Input } from "../ui/input";
import { useAddCommentMutation } from "@/redux/api/baseApi";
import { useForm } from 'react-hook-form';


const Faild = ({ data }: { data: any }) => {

    const [addComment] = useAddCommentMutation()
    const { register, handleSubmit, reset} = useForm()



    const submithandler = async (value:any) => {
         reset()
        const response = addComment({ id: data._id, comment: value.comment }).unwrap()
         console.log(response)
    }


    return (
        <div className="flex items-center gap-2">
            <div className="flex flex-col justify-center items-center">
                <Avatar>
                    <AvatarImage className='w-24' src={data.user.profile} />
                </Avatar>
                <p className="text-xs">{data.user.name}</p>
            </div>

            <form onSubmit={handleSubmit(submithandler)} className="lg:w-[70%] w-full relative">
                <Input id="commentInput" {...register('comment')} name="comment" className=" bg-slate-100 border-2 p-6" placeholder="write a comment" />
                <button type="submit" className="absolute top-3.5 right-2 z-10 pl-3">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M6 12 3.269 3.125A59.769 59.769 0 0 1 21.485 12 59.768 59.768 0 0 1 3.27 20.875L5.999 12Zm0 0h7.5" />
                    </svg>
                </button>
            </form>
        </div>
    );
};

export default Faild;