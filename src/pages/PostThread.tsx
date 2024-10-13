import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { useAddThreadMutation, useGetUserQuery } from "@/redux/api/baseApi";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import FileUpload from "@/components/fileUpload/FileUpload";
import { Dialog, DialogContent, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { TbMap2 } from "react-icons/tb";
import { FaCameraRetro } from "react-icons/fa";




const PostThread = () => {

    const categorys = ['safe and security', 'community', 'emergancy', 'report', 'thread', 'others']
    const topics = ['hospitality', 'further details', 'describe issue']
    const { register, handleSubmit, formState: { errors } } = useForm()
    const [category, setCategory] = useState(null)
    const [topic, setTopic] = useState(null)
    const [addThread] = useAddThreadMutation()
    const {data:user} = useGetUserQuery({})
    const navigate = useNavigate()
    const [subTopicCount, setsubTopicCount] = useState([1, 2, 3])
    const [isOpen, setIsOpen] = useState(false)
    

    const postHandler = async (data: any) => {

        if (topic !== null && category !== null) {
 
            const response = await addThread({ user: user.response._id, ...data, category, topic }).unwrap()
              console.log(response)
            if (!response.success) {
                toast.error(response?.message)
            }else{
                toast.success('thread has been submitted successfully. The Admin will review your thread')
                navigate('/')
            }
        }

    }


    // const subTopicHandler = (e:ChangeEvent<HTMLInputElement>) => {
    //     setSubTopic((prev:any)=>prev.push(e.target.value))
    // }

 


    return (
        <section className="lg:w-[80%] w-[90%] mx-auto lg:my-10 my-12">
            <div>
                <p className="text-xl font-semibold">post your thread / report</p>
            </div>

            <form onSubmit={handleSubmit(postHandler)}>
                <div className="grid lg:grid-cols-2 gap-6 mt-4">
                    <div>
                        <Select onValueChange={(value: any) => setCategory(value)}>
                            <SelectTrigger className="w-full">
                                <SelectValue placeholder='select Category' />
                            </SelectTrigger>
                            <SelectContent>
                                {
                                    categorys.map(v => <SelectItem key={Math.random()} value={v}>{v}</SelectItem>)
                                }
                            </SelectContent>
                        </Select>
                        {category == null ? <p className='text-red-500 text-sm'>category is required</p> : ''}
                    </div>

                    <div>
                        <Select onValueChange={(value: any) => setTopic(value)}>
                            <SelectTrigger className="w-full">
                                <SelectValue placeholder='select Topic' />
                            </SelectTrigger>
                            <SelectContent>
                                {
                                    topics.map(v => <SelectItem key={Math.random()} value={v}>{v}</SelectItem>)
                                }
                            </SelectContent>
                        </Select>
                        {topic == null ? <p className='text-red-500 text-sm'>topic is required</p> : ''}
                    </div>

                    <div>
                        <Textarea {...register('topicDetails', { required: true })} placeholder="topic:" />
                        {errors.topicDetails?.type === 'required' && <p className='text-red-500 text-sm'>Topic Details is required</p>}
                    </div>
                    <div>
                        <Textarea {...register('details', { required: true })} placeholder="Details:" />
                        {errors.details?.type === 'required' && <p className='text-red-500 text-sm'>Details is required</p>}
                    </div>

                    <div>
                        <Input {...register('subTopic')} placeholder="sub topic :" />
                    </div>

                    <div className="flex justify-between gap-4 items-center">

                        <div onClick={() => setIsOpen(true)} className="flex justify-center hover:bg-base-300 items-center cursor-pointer bg-base-200 w-full text-center text-xs mt-2 space-x-1 border p-2 rounded-lg">
                            <img src="../../public/assets/Add.png" />
                            <span>Image / Location</span>
                        </div>


                        <div onClick={()=>setsubTopicCount(prev=>[...prev,Math.random()])} className="flex hover:bg-base-300 items-center justify-center cursor-pointer bg-base-200  w-full text-xs mt-2 space-x-1 border p-2 rounded-lg">
                            <img src="../../public/assets/Add.png" />
                            <span>Add Sub Topic</span>
                        </div>
                    </div>

                  
                </div>


                {/************************ *extra sub topic faild   *********************** */}
                <div className="mt-14 space-y-8">
                    {
                        subTopicCount.map(v => <Input className="bg-[#fdf9f9]" key={v} placeholder="sub topic : " />)
                    }
                </div>  
                <Input className="lg:w-1/2 mx-auto mt-24 cursor-pointer bg-yellow-300 font-semibold hover:bg-yellow-400" type="submit" />
            </form>

            
            <Dialog open={isOpen}>
                <DialogContent className="sm:max-w-[500px]">
                    <div className="grid gap-4 py-4 text-center">
                        <DialogTitle className="font-bold">Choose your Preference</DialogTitle>
                       
                        <div className="flex justify-center gap-6 items-center">
                            <FileUpload />
                            <div className=" border-2 border-dotted p-7 bg-slate-100 rounded-md">
                                <FaCameraRetro className="text-5xl " />
                            </div>
                            <div className="border-2 border-dotted p-7 bg-slate-100 rounded-md">
                                <TbMap2 className="text-5xl" />
                            </div>
                            
                        </div>
                       
                         
                        <Button className="bg-[#ECE64A] hover:bg-[#dfd936] text-zinc-700 font-bold mt-14" onClick={() => setIsOpen(false)}>Okay</Button>
                    </div>
                </DialogContent>
            </Dialog>


        </section>
    );
};

export default PostThread;