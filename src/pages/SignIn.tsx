 import Logo from '../utils/Logo';
 
 
import { Link } from 'react-router-dom';
import { FcGoogle } from "react-icons/fc";
import { FaApple } from "react-icons/fa";
import { Input } from '@/components/ui/input';

const SignIn = () => {




    return (
        <section>
            <Logo />
            <div className='pt-32 '>

                <div className='w-1/2 m-auto'>
                    <p className='text-[#323232] text-center text-3xl font-[700]'>Sign in to your Account</p>
                    <div className='flex justify-center items-center gap-4 mt-4'>
                        <button className='flex items-center gap-1 border-2 px-10 py-2 rounded-md'><FcGoogle className='text-[25px]' /> Signup with Google</button>
                        <button className='flex items-center gap-1 border-2 px-10 py-2 rounded-md'><FaApple className='text-[25px]' /> Signup with Apple</button>
                    </div>
                </div>

                <form className='w-1/2 m-auto mt-10'>
                   
                    <div className='mt-6 w-1/2  mx-auto'>
                        <p className='text-[#323232] text-center text-2xl font-[700]'>Sign in to your Account</p>
                        <div className='space-y-5 mt-2'>
                             <Input/>
                            <Input/>
                            
                        </div>
                        <p className='text-red-500 text-sm mb-2'>wrong cridential</p>

                        <input type="submit" value='Login' className='bg-[#ECE64A] hover:bg-[#dfd936] p-2 mt-8 rounded-lg font-semibold w-full mx-auto block' />
                    </div>
                    
                </form>

                <div className='w-1/5 mt-5 mx-auto text-xs font-semibold text-center'>
                    <Link to='/' className='underline'>Forget Password?</Link>
                    <p className='mt-1'>dont have an account? <Link to='/' className='text-sky-500 font-bold'>Login</Link> </p>
                </div>

            </div>
      
       </section>
    );
};

export default SignIn;