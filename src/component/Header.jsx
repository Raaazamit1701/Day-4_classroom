import React from 'react';

const Header = () => {
    return (
        <>
           <div className=' flex justify-around m-5'>
                <div className=' text-violet-700 text-3xl text-center m -3'> Hootsuite</div>
                <div>
                    <ul className=' flex justify-around'>
                        <li className=' m-2 text-black font-mono text-center font-semibold'>Plateform</li>
                        <li className=' m-2 text-black font-mono text-center font-semibold'>Plan</li>
                        <li className=' m-2 text-black font-mono text-center font-semibold'>Experience</li>
                        <li className=' m-2 text-black font-mono text-center font-semibold'>Resources</li>
                        <li className=' m-2 text-black font-mono text-center font-semibold'>Education</li>
                    </ul>
                </div>
                <div>
                    <ul className=' flex justify-around'>
                        <li className=' m-2  text-black font-mono text-center '>Contact Us</li>
                        <li className=' m-2  text-black font-mono text-center '>Log In</li>
                        <li ><button className='  text-white font-mono  rounded-lg w-40 h-10  bg-blue-700'>Sign up</button></li>
                    </ul>
                </div>
           </div>
        </>
    );
}

export default Header;
