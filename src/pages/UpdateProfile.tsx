 import SelectDropdown from "@/components/selecet/SelecetDropdown";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea";
import Logo from "@/utils/Logo";
import { Link } from "react-router-dom";
import { useForm } from 'react-hook-form';


 

const UpdateProfile = () => {

    const { register, handleSubmit, formState: { errors } } = useForm()


    const submitHandler = (value: any) => {
        console.log(value)
        
    }


    return (
        <section>
            <Logo />
            <div className="pt-28 w-1/2 mx-auto">
                <div className="w-1/2 mx-auto text-center">
                    <p className="font-[700] block text-3xl text-[#323232]">Update Your Profile</p>
                    <img className="w-[200px] inline-block" src="../../public/assets/11 3.png" />
                </div>
                <Link className="underline font-bold mt-2 text-center block" to=''>@username</Link>
                
                <form onSubmit={handleSubmit(submitHandler)} >
                    <div className="w-1/2 mt-2 mx-auto">
                        <Label htmlFor="email">Bio*</Label>
                        <Textarea
                            {...register('description', { required: true, })}
                            placeholder="Describe yourself" />
                        {errors.description?.type === 'required' && <p className='text-red-500 text-sm'>write somthing about your self</p>}
                    </div>


                    <div className="grid grid-cols-2 gap-4 mt-12">
                        <div>
                            <Input {...register('name', { required: true })} placeholder="Name" />
                            {errors.name?.type === 'required' && <p className='text-red-500 text-sm'>name is required</p>}
                        </div>
                        <SelectDropdown />
                        <div>
                            <Input {...register('name', { required: true, })} placeholder="job/profession" />
                            {errors.name?.type === 'required' && <p className='text-red-500 text-sm'>name is required</p>}
                        </div>
                        <SelectDropdown/>
                    </div>
                    <Button type="submit" className="w-1/2 bg-[#ECE64A] hover:bg-[#dfd936] my-10 mx-auto block">Save</Button>
                </form>


            </div>
        </section>
    );
};

export default UpdateProfile;