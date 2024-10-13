import Modal from '@/components/modal/Modal';
import Logo from '../utils/Logo';
import { useForm } from 'react-hook-form';
import { useState } from 'react';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "../components/ui/select";
import { Link } from 'react-router-dom';
import { Input } from '@/components/ui/input';
import { useSignupMutation } from '@/redux/api/baseApi';
import toast from 'react-hot-toast';

const divisions = ["Dhaka", "Chattogram", "Rajshahi", "Khulna", "Barishal", "Sylhet", "Rangpur", "Mymensingh"].sort()


const Signup = () => {


    const { register, handleSubmit, formState: { errors } } = useForm()
    const [isOpen, setIsOpen] = useState(false)
    const [division, setDivision] = useState('dhaka')
    const [signUp] = useSignupMutation()





    const submitHandler = async (value: any) => {

        if (value.password !== value.confirmPassword) {
            toast.error('confirm password does not match')
        } else {

            const data = { ...value, division, role: 'user' }
            const response = await signUp(data).unwrap()

            if (!response.success) {
                toast.error(response.message)
            } else {
                toast.success('')
                setIsOpen(true)
                localStorage.setItem('token', response.accessToken)
            }
        }



    }




    return (
        <section>
            <Logo />

            <form onSubmit={handleSubmit(submitHandler)} className='lg:pt-32 pt-44 lg:w-1/2 w-[90%] m-auto'>
                <p className='text-[#323232] text-center text-3xl font-[700]'>Create New  Account</p>
                <div className='grid lg:grid-cols-2 gap-6 mt-5'>

                    <div>
                        <Input className='border p-2 rounded-md w-full' type='text'
                            {...register('name', { required: true })} placeholder="Name" />
                        {errors.name?.type === 'required' && <p className='text-red-500 text-sm'>name is required</p>}
                    </div>

                    <div>
                        <Input className='border p-2 rounded-md w-full' type='text'
                            {...register('age', { required: true, })} placeholder="Age" />
                        {errors.age?.type === 'required' && <p className='text-red-500 text-sm'>age is required</p>}
                    </div>

                    <div>
                        <Input className='border p-2 rounded-md w-full' type='email' {...register('email', { required: true, })} placeholder="Email" />
                        {errors.email?.type === 'required' && <p className='text-red-500 text-sm'>email is required</p>}
                    </div>

                    <div className='relative'>
                        <Input className='border p-2 rounded-md w-full' type='text' {...register('gender', { required: true, })} placeholder="Gender" />
                        {errors.gender?.type === 'required' && <p className='text-red-500 text-sm'>gender is required</p>}
                    </div>

                    <div>
                        <Input className='border p-2 rounded-md w-full' {...register('phone', { required: true, minLength: 11 })} placeholder="Contact No" />
                        {errors.phone?.type === 'required' && <p className='text-red-500 text-sm'>contact number is required</p>}
                        {errors.phone?.type === 'minLength' && <p className='text-red-500 text-sm'>number length minimum 11 characters</p>}
                    </div>

                    <div>
                        <Select onValueChange={(value) => setDivision(value)}>
                            <SelectTrigger className="w-full">
                                <SelectValue placeholder='select division' />
                            </SelectTrigger>
                            <SelectContent>
                                {
                                    divisions.map(v => <SelectItem key={Math.random()} value={v}>{v}</SelectItem>)
                                }
                            </SelectContent>
                        </Select>
                        {errors.division?.type === 'required' && <p className='text-red-500 text-sm'>your division is required</p>}
                    </div>




                </div>

                <div className='mt-6 lg:w-1/2 space-y-5 mx-auto'>
                    <div>
                        <Input className='border p-2 rounded-md w-full' {...register('password', { required: true, minLength: 8 })} placeholder="password" />
                        {errors.password?.type === 'required' && <p className='text-red-500 text-sm'>password is required</p>}
                        {errors.password?.type === 'minLength' && <p className='text-red-500 text-sm'>password length minimum 8 characters</p>}
                    </div>
                    <div>
                        <div>
                            <Input className='border p-2 rounded-md w-full' {...register('confirmPassword', { required: true, minLength: 8 })} placeholder="confirm password" />
                            {errors.confirmPassword?.type === 'required' && <p className='text-red-500 text-sm'>confirm password is required</p>}
                            {errors.confirmPassword?.type === 'minLength' && <p className='text-red-500 text-sm'>confirm password does not match</p>}
                        </div>
                        {/* <p className='text-red-500 text-sm mb-2'>error will appear</p> */}
                    </div>
                </div>
                <p className='mt-1 text-sm font-semibold text-center'>Already have a account? <Link to='/sign-in' className='text-sky-500 font-bold'>Login</Link> </p>
                <Modal isOpen={isOpen} setIsOpen={setIsOpen} />
                <input type="submit" value='Send OTP' className='bg-[#ECE64A] hover:bg-[#dfd936] p-2 mt-12 rounded-lg font-semibold lg:w-1/2 w-full mx-auto block' />
            </form>


        </section>
    );
};

export default Signup;