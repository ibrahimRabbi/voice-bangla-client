 

const Logo = () => {




    return (
        <div className={`${location.pathname === '/profile/update-profile' ? 'hidden' : 'block'} 'mt-2 relative`}>
            <img className='w-40 absolute -rotate-3 flex-shrink-0' src="../../public/assets/announce.png" />
            <p className='text-[#323232] absolute left-[80px] top-[62px] font-[Inter] w-36 flex-shrink-0 text-2xl  font-[700]'>The Voice Of Bengal</p>
        </div>
    );
};

export default Logo;