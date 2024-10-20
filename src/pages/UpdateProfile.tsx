 import SelectDropdown from "@/components/selecet/SelecetDropdown";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea";
import Logo from "@/utils/Logo";
import { Link, useLocation } from "react-router-dom";
import { useForm } from 'react-hook-form';
import { useGetUserQuery, useUpdateUserMutation } from "@/redux/api/baseApi";
// import { jwtDecode } from "jwt-decode";

const professions = [
    "Doctor",
    "Engineer",
    "Teacher",
    "Lawyer",
    "Nurse",
    "Architect",
    "Pharmacist",
    "Electrician",
    "Carpenter",
    "Chef",
    "Accountant",
    "Dentist",
    "Journalist",
    "Firefighter",
    "Mechanic",
    "Software Developer",
    "Musician",
    "Social Worker",
    "Hairdresser",
]
 

const UpdateProfile = () => {

    const { register, handleSubmit, formState: { errors } } = useForm()
    const [updateUser] = useUpdateUserMutation()
    const { data: user, isLoading } = useGetUserQuery({})
    const location = useLocation()
    // const token = localStorage.getItem('token')
    // const decoded = jwtDecode(token as string)
    // console.log(decoded)
 
    if (isLoading) {
        return <h1 className="text-4xl">Loading</h1>
    }

    const submitHandler = async (value: any) => {
        const updating = await updateUser({id:user.response?._id, ...value}).unwrap()
        console.log(updating)
    }


    return (
        <section>
            <Logo/>
            <div className={`${location.pathname === '/profile/update-profile' ? 'pt-44 w-[80%]' :'pt-28 w-1/2'} mx-auto`}>
                <div className={`w-1/2 ${location.pathname === '/profile/update-profile'? 'hidden':'block'} mx-auto text-center`}>
                    <p className={`font-[700] block text-3xl text-[#323232]`}>Update Your Profile</p>
                    <img className="w-[200px] inline-block" src="../../public/assets/11 3.png" />
                </div>
                <Link className={`underline font-bold mt-2 text-center block ${location.pathname === '/profile/update-profile' ? 'hidden' : 'block'} `} to=''>@username</Link>
                
                <form onSubmit={handleSubmit(submitHandler)} >
                    <div className={` mt-2 mx-auto ${location.pathname === '/profile/update-profile' ? 'w-[70%]' : 'w-1/2'}`}>
                        <Label htmlFor="email">Bio*</Label>
                        <Textarea
                            {...register('bio', { required: true, })}
                            placeholder="Describe yourself" />
                        {errors.description?.type === 'required' && <p className='text-red-500 text-sm'>write somthing about your self</p>}
                    </div>


                    <div className="grid grid-cols-2 gap-4 mt-12">
                        <div>
                            <Input {...register('name', { required: true })} placeholder="Name" />
                            {errors.name?.type === 'required' && <p className='text-red-500 text-sm'>name is required</p>}
                        </div>
                        <SelectDropdown items={professions} selectValue="profession" />
                        <div>
                            <Input {...register('division', { required: true, })} placeholder="division/city" />
                            {errors.name?.type === 'required' && <p className='text-red-500 text-sm'>name is required</p>}
                        </div>
                        <SelectDropdown selectValue="sector" items={professions} />
                    </div>
                    <Button type="submit" className="w-1/2 text-black font-semibold bg-[#ECE64A] hover:bg-[#dfd936] my-10 mx-auto block">Save</Button>
                </form>


            </div>
        </section>
    );
};

export default UpdateProfile;