import React from 'react';
import UserSidebar from './sideBar/UserSidebar';
import { Outlet } from 'react-router-dom';
 
 
 




const ApplicationLayout: React.FC = () => {
    

    return (
        <section className='relative lg:flex justify-start gap-10 lg:w-[90%]'>
            <UserSidebar/>
            <main className='lg:w-[70%] w-[95%] mt-8 mx-auto'>              
                <Outlet />
            </main>
         </section>
    );
};

export default ApplicationLayout;