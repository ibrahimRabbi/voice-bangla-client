import Logo from '../utils/Logo';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { FcGoogle } from "react-icons/fc";
import { FaApple } from "react-icons/fa";
import { Input } from '@/components/ui/input';
import { useForm } from 'react-hook-form';
import { useSigninMutation } from '@/redux/api/baseApi';
import toast from 'react-hot-toast';




const SignIn = () => {

    const { register, handleSubmit, formState: { errors } } = useForm()
    const [signin] = useSigninMutation()
    const location = useLocation()
    const navigate = useNavigate()
  


    const signInhandler = async (value: any) => {
        const response = await signin(value).unwrap()
          
        if (!response.success) {
            toast.error(response.message)
        } else {
            toast.success('Sign-In Successfully')
            localStorage.setItem('token', response.accessToken)
            navigate(location?.state)
        }

    }

    return (
        <section>
            <Logo />
            <div className='lg:pt-32 pt-44 '>

                <div className='lg:w-1/2 w-[90%] m-auto'>
                    <p className='text-[#323232] text-center text-3xl font-[700]'>Sign in to your Account</p>
                    <div className=' flex lg:flex-row flex-col justify-center items-center gap-4 mt-4'>
                        <button className='flex items-center gap-1 border-2 lg:px-10 px-14 py-2 rounded-md'><FcGoogle className='text-[25px]' /> Signup with Google</button>
                        <button className='flex items-center gap-1 border-2 lg:px-10 px-14 py-2 rounded-md'><FaApple className='text-[25px]' /> Signup with Apple</button>
                    </div>
                </div>

                <form onSubmit={handleSubmit(signInhandler)} className='lg:w-1/2 w-[90%] m-auto mt-10'>

                    <div className='mt-6 lg:w-1/2  mx-auto'>
                        <p className='text-[#323232] text-center text-2xl font-[700]'>Sign in to your Account</p>
                        <div className='space-y-5 lg:mt-2 mt-4'>
                            <div>
                                <Input {...register('email', { required: true, })} placeholder='@username or email' />
                                {errors.email?.type === 'required' && <p className='text-red-500 text-sm'>email or username is required</p>}
                            </div>
                            <div>
                                <Input {...register('password', { required: true, minLength: 8 })} placeholder='Enter password' />
                                {errors.password?.type === 'required' && <p className='text-red-500 text-sm'>password is required</p>}
                            </div>
                        </div>


                        <input type="submit" value='Login' className='bg-[#ECE64A] hover:bg-[#dfd936] p-2 mt-8 rounded-lg font-semibold w-full mx-auto block' />
                    </div>

                </form>

                <div className='lg:w-1/5 mt-5 mx-auto text-xs font-semibold text-center'>
                    <Link to='/' className='underline'>Forget Password?</Link>
                    <p className='mt-1'>dont have an account? <Link to='/sign-up' className='text-sky-500 font-bold'>Sign Up</Link> </p>
                </div>

            </div>

        </section>
    );
};

export default SignIn;