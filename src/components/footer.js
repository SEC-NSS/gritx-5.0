import React from 'react';
import purple from "../assets/hexpurple.png";
import yellow from "../assets/hexyellow.png";
import nsslogo from "../assets/nsslogo.png";
import seclogo from "../assets/seclogo.png";
import instalogo from '../assets/instalogo.png';
import twitterlogo from '../assets/twitterlogo.png';
import linkedinlogo from '../assets/linkedinlogo.png';

function Footer() {
  return (
    <div className="bg-[#212121] float-right w-full lg:w-11/12 lg:pl-10 h-full" id="footersection">
      <div className="p-8">
        <a href='https://sairam.edu.in/nss/'><img className="float-left w-20 h-20" src={nsslogo} alt="nsslogo"></img></a>
        <a href='https://sairam.edu.in/'><img className="float-right w-20 h-20" src={seclogo} alt="seclogo"></img></a>
      </div>
      <div className="w-full flex flex-col justify-center p-10 sm:flex-row">
          <div className="sm:-mr-12 md:-mr-24">
            <div className="w-full flex justify-center items-center h-full p-5">
              <img className="w-60 h-40 sm:w-72 md:w-full md:h-48 lg:h-72" src={yellow} alt="footer"></img>
                <div className="absolute text-white text-center text-[12px] lg:text-[16px]">
                  <h1 className="font-bold font-michroma text-[#B760B1] text-[14px] lg:text-[22px]">EMAIL</h1>
                  <p className="lg:leading-10">nsssairam@sairam.edu.in</p>
                  <p className="">Send your queries <br/> with the subject - <br/>"Help Desk - Your subject"</p>
                </div>
            </div>
          </div>
          <div className="">
            <div className="w-full h-full flex justify-center items-center md:p-10 lg:p-2">
                <img className="w-80 h-60 sm:h-60 sm:w-96 md:h-72 lg:w-full lg:h-96" src={purple} alt="footer"></img>
                <div className="absolute text-white text-center text-[12px] lg:text-[16px]">
                  <h1 className="lg:leading-10 font-bold font-michroma text-[#E6BA5B] text-[16px] lg:text-[22px]">CONTACT</h1>
                  <p className="lg:leading-10">Dr.G.Sathish Kumar : +91 91766 14721</p>
                  <p className="lg:leading-10">Dr.Uma Maheswaran : +91 98407 22474</p>
                  <p className="lg:leading-10">S Shanmuganathan : +91 6382388264</p>
                  <p className="lg:leading-10">Srivarshan G : +91 9842810900</p>
                  <p className="lg:leading-10">Jayasurya V : 9940438387</p>
                </div>
            </div>
          </div> 
          <div className="sm:-ml-12 md:-ml-24">
            <div className="w-full flex justify-center items-center h-full p-5">
              <img className="w-60 h-40 sm:w-72 md:w-full md:h-48 lg:h-72" src={yellow} alt="footer"></img>
              <div className="absolute text-white text-center">
                  <h1 className="sm:leading-10 font-bold font-michroma text-[#B760B1] text-[14px] lg:text-[22px]">ADDRESS</h1>
                  <p className="font-bold text-[12px] lg:text-[14px]">SRI SAIRAM <br/> ENGINEERING COLLEGE</p>
                  <p className='text-[10px] lg:text-[14px]'>Sai Leo Nagar, <br className='hidden sm:block'/> West Tambaram,<br/>Chennai - 600044<br/>Tamil Nadu<br/>India</p>
                </div>
            </div>
          </div>
      </div>
      <div className="w-full flex flex-col justify-center sm:flex-row">
        <div className="w-full sm:w-1/2 flex flex-col items-center md:ml-8">
          <div className="w-4/5 border-b-2 border-b-[#2AC17F] float-right">
            <h1 className="text-lg font-michroma text-[#E6BA5B]">LOCATE US</h1>
          </div>
        <div className="flex justify-center w-4/5 p-10">
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d124421.81696604118!2d79.91733141640623!3d12.9602171!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a52f596c7fb72c9%3A0x8e7a30529f9ef227!2sSri%20Sairam%20Engineering%20College!5e0!3m2!1sen!2sin!4v1661789393148!5m2!1sen!2sin" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
        </div>
        </div>
        <div className="w-full sm:w-1/2 flex flex-col items-center md:ml-8">
          <div className="w-4/5 border-b-2 border-b-[#2AC17F] float-right">
            <h1 className="text-lg  font-michroma text-[#E6BA5B]">CONNECT WITH US</h1>
          </div>
          <div className="flex justify-center w-4/5">
            <div className="flex flex-row py-10">
              <a href="https://instagram.com/sairamnss?igshid=YmMyMTA2M2Y="><img className="w-16 h-16 p-2 scale-100 hover:scale-125" src={instalogo} alt="instagram"></img></a>
              <a href="https://www.linkedin.com/company/nss-sairam/"><img className="w-16 h-16 p-2 scale-100 hover:scale-125" src={linkedinlogo} alt="twitter"></img></a>
              <a href=" https://twitter.com/NSSSAIRAM?s=20&t=I-QlWVigzBdfoOMhxAbK0A"><img className="w-16 h-16 p-2 scale-100 hover:scale-125" src={twitterlogo} alt="linkedin"></img></a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Footer