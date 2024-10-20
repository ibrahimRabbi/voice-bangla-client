 
import { NavLink } from 'react-router-dom';
import { MdDashboard } from "react-icons/md";


const items = [
    {
        navigate: '/',
        icon: '../../../public/icons/Home.png'   
    },
    {
        navigate: '/trending',
        icon: '../../../public/icons/Tranding.png'
    },
    {
        navigate: '/notifications',
        icon: '../../../public/icons/Alarm.png'
    },
    {
        navigate: '/xssdsd',
        icon: '../../../public/icons/Conflict.png'
        
    },
    {
        navigate:'/settings',
        icon: '../../../public/icons/Settings.png'
    },
    {
        navigate: 'profile',
        icon: '../../../public/icons/Test Account.png'
    },
    
]


 


const UserSidebar = () => {
    return (
        <div className='bg-slate-100 lg:relative fixed z-10 bottom-0  flex lg:justify-start justify-between items-center lg:px-0 p-3 lg:flex-col gap-5 w-full lg:w-28 lg:pt-7 '>
            {
                items.map(v => <NavLink className={({isActive})=> isActive? 'bg-slate-300 w-full':''} key={Math.random()} to={v.navigate}>
                    <img className='mx-auto lg:block inline-block' src={v.icon} />
                </NavLink> )
            }
            <NavLink to='/dashboard'>
                 <MdDashboard className='text-3xl'/>

            </NavLink>
        </div>
    );
};

export default UserSidebar;