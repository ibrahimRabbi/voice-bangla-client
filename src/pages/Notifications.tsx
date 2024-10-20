import { Avatar, AvatarImage } from "@/components/ui/avatar";
import { HiDotsHorizontal } from "react-icons/hi";

const Notifications = () => {
    return (
        <section>
            <h1 className="text-3xl font-semibold">Notifications</h1>

            <div className="mt-10 space-y-4">

                <div className="flex justify-between items-center gap-2 bg-base-100 py-3 px-5 rounded-md border shadow-md">
                    <div className="flex items-center gap-2">
                        <Avatar>
                            <AvatarImage className='w-24' src="https://i.ibb.co.com/z5QXvMS/2148859448.jpg" />
                        </Avatar>
                        <p className="font-semibold">Jhon Doe</p>
                        <p>replay on your thread</p>
                    </div>
                    <button><HiDotsHorizontal /></button>
                </div>

                <div className="flex justify-between items-center gap-2 bg-base-100 py-3 px-5 rounded-md border shadow-md">
                    <div className="flex items-center gap-2">
                        <Avatar>
                            <AvatarImage src="https://i.ibb.co.com/jz5bg13/image.jpg" />
                        </Avatar>
                        <p className="font-semibold">Alex Costa</p>
                        <p>replay on your thread</p>
                    </div>
                    <button><HiDotsHorizontal /></button>
                </div>


                <div className="flex justify-between items-center gap-2 bg-base-100 py-3 px-5 rounded-md border shadow-md">
                    <div className="flex items-center gap-2">
                        <Avatar>
                            <AvatarImage className='w-24' src="https://i.ibb.co.com/z5QXvMS/2148859448.jpg" />
                        </Avatar>
                        <p className="font-semibold">Jhon Doe</p>
                        <p>replay on your thread</p>
                    </div>
                    <button><HiDotsHorizontal /></button>
                </div>


                <div className="flex justify-between items-center gap-2 bg-base-100 py-3 px-5 rounded-md border shadow-md">
                    <div className="flex items-center gap-2">
                        <Avatar>
                            <AvatarImage className='w-24' src="https://i.ibb.co.com/z5QXvMS/2148859448.jpg" />
                        </Avatar>
                        <p className="font-semibold">Jhon Doe</p>
                        <p>replay on your thread</p>
                    </div>
                    <button><HiDotsHorizontal /></button>
                </div>
                 
            </div>
        </section>
    );
};

export default Notifications;