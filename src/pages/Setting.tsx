import { FaRegBell } from "react-icons/fa";
import { MdOutlineDarkMode, MdOutlineMail, MdOutlineSecurity } from "react-icons/md";
import { TfiHeadphoneAlt } from "react-icons/tfi";
import { GrCircleInformation } from "react-icons/gr";
import { IoIosLogOut } from "react-icons/io";
import { Link } from "react-router-dom";


const Setting = () => {
    return (
        <div>
            <h1 className='text-3xl font-semibold'>Setting & Privacy</h1>

            <div className='grid lg:grid-cols-4 gap-x-7 gap-y-8 mt-10' >


                <Link to='/update-profile' className='bg-base-200 flex lg:flex-col gap-4 lg:gap-0 items-center border lg:py-5 space-y-2 rounded-md p-3 lg:text-center shadow-md'>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-8 block lg:mx-auto">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M12 7.5h1.5m-1.5 3h1.5m-7.5 3h7.5m-7.5 3h7.5m3-9h3.375c.621 0 1.125.504 1.125 1.125V18a2.25 2.25 0 0 1-2.25 2.25M16.5 7.5V18a2.25 2.25 0 0 0 2.25 2.25M16.5 7.5V4.875c0-.621-.504-1.125-1.125-1.125H4.125C3.504 3.75 3 4.254 3 4.875V18a2.25 2.25 0 0 0 2.25 2.25h13.5M6 7.5h3v3H6v-3Z" />
                    </svg>

                    <p className='text-zinc-700 font-bold'>Personal Information</p>
                </Link>


                <Link to='/notifications' className='bg-base-200 flex lg:flex-col gap-4 lg:gap-0 items-center  border lg:py-5 space-y-2 rounded-md p-3 lg:text-center shadow-md'>
                    <FaRegBell className="text-3xl block lg:mx-auto"/>
                    <p className='text-zinc-700 font-bold'>Notifications</p>
                </Link>


                <Link to='/' className='bg-base-200 flex lg:flex-col gap-4 lg:gap-0 items-center border lg:py-5 space-y-2 rounded-md p-3 lg:text-center shadow-md'>
                    <MdOutlineSecurity className="text-3xl block lg:mx-auto" />
                    <p className='text-zinc-700 font-bold'>Privacy & Policy</p>
                </Link>


                <Link to='/' className='bg-base-200 flex lg:flex-col gap-4 lg:gap-0 items-center border lg:py-5 space-y-2 rounded-md p-3 lg:text-center shadow-md'>
                    <MdOutlineDarkMode className="text-3xl block lg:mx-auto" />
                    <p className='text-zinc-700 font-bold'>Dark Mode</p>
                </Link>


                <Link to='/' className='bg-base-200 flex lg:flex-col gap-4 lg:gap-0 items-center border lg:py-5 space-y-2 rounded-md p-3 lg:text-center shadow-md'>
                    <MdOutlineMail className="text-3xl block lg:mx-auto" />
                    <p className='text-zinc-700 font-bold'>Contact Information</p>
                </Link>


                <Link to='/' className='bg-base-200 flex lg:flex-col gap-4 lg:gap-0 items-center border lg:py-5 space-y-2 rounded-md p-3 lg:text-center shadow-md'>
                    <TfiHeadphoneAlt className="text-3xl block lg:mx-auto" />
                    <p className='text-zinc-700 font-bold'>Help & Support</p>
                </Link>

                <Link to='/' className='bg-base-200 flex lg:flex-col gap-4 lg:gap-0 items-center border lg:py-5 space-y-2 rounded-md p-3 lg:text-center shadow-md'>
                    <GrCircleInformation className="text-3xl block lg:mx-auto" />
                    <p className='text-zinc-700 font-bold'>About Us</p>
                </Link>


                <Link to='/logout' className='bg-base-200 flex lg:flex-col gap-4 lg:gap-0 items-center border lg:py-5 space-y-2 rounded-md p-3 lg:text-center shadow-md'>
                    <IoIosLogOut className="text-3xl block lg:mx-auto" />
                    <p className='text-zinc-700 font-bold'>Log Out</p>
                </Link>
            </div>
        </div>
    );
};

export default Setting;