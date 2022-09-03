import gritxlogo from '../assets/grit x main logo.png';
import instalogo from '../assets/instalogo.png';
import twitterlogo from '../assets/twitterlogo.png';
import linkedinlogo from '../assets/linkedinlogo.png';
import { useState, useRef } from "react";

const Navbar = () => {

    const navbar = useRef();
    const mobilenavbar = useRef();
    const navlist =useRef();

    const [isActive, setIsActive] = useState(false);

    const togglenavlist = event => {
     
        setIsActive(current => !current);
      };
   

    return (
        
        <>
            <header>
                <nav className="navbar fixed z-10"  ref={navbar}>
                    <div className="hidden lg:flex fixed bg-tertiaryblack h-screen w-36 xl:w-40 ">
                        <div className="grid grid-rows-5 w-full">
                            <div className="logo row-span-1 w-full p-5 hover:p-3 mt-5">
                                <img  src={gritxlogo} className="w-full h-full" />
                                
                            </div>
                            <div className="navlist  row-span-3">
                                <ul className='text-white w-full  grid grid-rows-5 justify-center items-center h-full'>
                                    <li className='text-fadewhite font-semibold hover:text-yellow hover:border-b-gold hover:border-b-2 text-center'><a href="#homesection">Home</a></li>
                                    <li className='text-fadewhite font-semibold hover:text-yellow hover:border-b-gold hover:border-b-2 text-center'><a href="#eventssection">Events</a></li>
                                    <li className='text-fadewhite font-semibold hover:text-yellow hover:border-b-gold hover:border-b-2 text-center'><a href="#campusambassadorsection">Campus <br /> Ambassor</a></li>
                                    <li className='text-fadewhite font-semibold hover:text-yellow hover:border-b-gold hover:border-b-2 text-center'><a href="#footersection">About us</a></li>
                                    <li className='text-fadewhite font-semibold hover:text-yellow hover:border-b-gold hover:border-b-2 text-center'><a href="#footersection">Contact us</a></li>
                                </ul>
                            </div>
                            <div className="connectus row-span-1 w-full flex justify-center items-center">
                                <div className='grid grid-cols-3 p-5'>
                                    <div className='w-4/5 h-5/5 scale-100 hover:scale-125 drop-shadow-3xl'><a href="https://instagram.com/sairamnss?igshid=YmMyMTA2M2Y="><img  src={instalogo} className="w-full h-full" /></a></div>
                                    <div className='w-4/5 h-5/5 scale-100 hover:scale-125 drop-shadow-3xl'><a href="https://www.linkedin.com/company/nss-sairam/"><img  src={linkedinlogo} className="w-full h-full" /></a></div>
                                    <div className='w-4/5 h-5/5 scale-100 hover:scale-125 drop-shadow-3xl'><a href="https://twitter.com/NSSSAIRAM?s=20&t=I-QlWVigzBdfoOMhxAbK0A"><img  src={twitterlogo} className="w-full h-full" /></a></div>
                                </div>
                                
                            </div>
                        </div>
                    </div>
                </nav>
            <div className="fixed w-full h-22 p-2 grid grid-cols-12 items-center bg-tertiaryblack justify-center lg:hidden z-10" id="hamburger-btn" ref={mobilenavbar}>
                <div className="mob-logo  ml-4  col-span-2 w-full flex justify-center items-center">
                    <div className="logo w-full ">
                        
                        <img  src={gritxlogo} className="w-full h-full" />
                                
                    </div>
                    
                </div>

                <div className='flex col-span-9 w-full'></div>

                <button onClick={togglenavlist}
                                    type="button"
                                    className="text-gray-500 col-span-1 justify-center items-center hover:text-gray-600 focus:outline-none focus:text-gray-600"
                                    >
                                    <svg viewBox="0 0 24 24" className="h-6 w-6 fill-current" color='#B57E1A'>
                                        <path
                                        fillRule="evenodd"
                                        d="M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2z"
                                        ></path>
                                    </svg>
                </button>  
                   
                
        </div>
           
        <div className={isActive?'fixed grid justify-items-start w-full h-screen grid-rows-8 top-0 left-0  bg-primaryblack/90 z-20' :'hidden fixed justify-items-start w-full  h-screen grid-rows-8 top-0 left-0  bg-fadewhite/80 z-20'}  name="menu" ref={navlist} >
            <button onClick={togglenavlist} className="block float-right ml-4 mt-2 p-2 text-base font-semibold"> <svg class="w-6 h-6" fill="none" stroke="#B57E1A" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="4" d="M6 18L18 6M6 6l12 12"></path></svg></button>
            <div className="w-full grid place-items-center pt-20 pb-80">
                <a href="#homesection" onClick={togglenavlist} className="block mx-12 mt-4  text-lg  font-semibold text-center  text-fadewhite py-2 px-4 hover:text-gold">Home</a>
                <a href="#eventssection" onClick={togglenavlist} className="block mx-12 mt-4  text-lg  font-semibold text-center  text-fadewhite py-2 px-4 hover:text-gold">Events</a>
                <a href="#campusambassadorsection" onClick={togglenavlist} className="block mx-12 mt-4  text-lg  font-semibold text-center   text-fadewhite py-2 px-4 hover:text-gold">Campus <br /> Ambassor</a>
                <a href="#footersection" onClick={togglenavlist} className="block mx-12 mt-4  text-lg   font-semibold text-center  text-fadewhite py-2 px-4  hover:text-gold">About us</a>
                <a href="#footersection" onClick={togglenavlist} className="block mx-12 mt-4  text-lg   font-semibold text-center  text-fadewhite py-2 px-4  hover:text-gold">Contact us</a>
                
            </div>
        </div>
            </header>
        </>
      );
}
 
export default Navbar;