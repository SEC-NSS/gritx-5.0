import React, { useState } from "react";
import { Link } from "react-router-dom";
import Slider from "react-slick";
import mindtwisterslogo from '../assets/mindtwisterslogo.png';
import dazeplaylogo from '../assets/dazeplaylogo.png'
import hyperzestlogo from '../assets/hyperzestlogo.png'
import squidgamelogo from '../assets/squidgamelogo.png'
import funnyweaverlogo from '../assets/funnyweaverlogo.png'
import pixmelogo from '../assets/pixmelogo.png'
import warriorsleaguelogo from '../assets/warriorsleaguelogo.png'

const Containers=()=>{
  
    

    const settings = {
       
        infinite: true,
        speed: 1000,
        slidesToShow: 3,
        slidesToScroll: 1,
        centerMode: true,
        autoplay: true,
        autoplaySpeed: 2000,
        pauseOnHover: true,
        responsive: [
            {
              breakpoint: 1024,
              settings: {
                slidesToShow: 2,
                slidesToScroll: 1,
                infinite: true,
              }
            },
            {
              breakpoint: 600,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                initialSlide: 1
              }
            },
            {
              breakpoint: 480,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1
              }
            }
          ],
          
      };

      const [eventsdetails,setEventdetails]=useState(
        [
            {index:1,eventtitle:"Mind Twister",eventlogo:mindtwisterslogo,eventdescription:"Mind Twisters is an exciting event to make your brain go stark crazy! This event has 3 rounds to bring out the tycoon in you with a bit of jest. ",knowmorelink:"",registerlink:"",navlink:"/mindtwisters",navlink:"/mindtwisters"},
            {index:2,eventtitle:"Hyper-Zest",eventlogo:hyperzestlogo,eventdescription:"How exhausted are you by the interview process? It's time to leave it aside and let's have a witty and funny interview and make you feel better. Join us!",knowmorelink:"",registerlink:"",navlink:"/hyperzest"},
            {index:3,eventtitle:"Daze-Play",eventlogo:dazeplaylogo,eventdescription:"Hey Buddies, it’s time to unwind yourselves. Participating in this entertaining event will indeed be fun and interesting. Don’t miss it ever!",knowmorelink:"",registerlink:"",navlink:"/dazeplay"},
            {index:4,eventtitle:"Pixme",eventlogo:pixmelogo,eventdescription:"Mind Twisters is an exciting event to make your brain go stark crazy! This event has 3 rounds to bring out the tycoon in you with a bit of jest. ",knowmorelink:"",registerlink:"",navlink:"/pixme"},
            {index:5,eventtitle:"Squid-Game",eventlogo:squidgamelogo,eventdescription:"Mind Twisters is an exciting event to make your brain go stark crazy! This event has 3 rounds to bring out the tycoon in you with a bit of jest. ",knowmorelink:"",registerlink:"",navlink:"/squidgame"},
            {index:6,eventtitle:"Funny Weaver",eventlogo:funnyweaverlogo,eventdescription:"Mind Twisters is an exciting event to make your brain go stark crazy! This event has 3 rounds to bring out the tycoon in you with a bit of jest. ",knowmorelink:"",registerlink:"",navlink:"/funnyweaver"},
            {index:7,eventtitle:"The Warriors League",eventlogo:warriorsleaguelogo,eventdescription:" Sports lover? Do join us. Engage your spirit and show your attitude in the field, Kick the barrier towards the goal",knowmorelink:"",registerlink:"",navlink:"/thewarriorsleague"},
        ]
    );

    return(
      
            <div className="w-12/12 h-full mt-5 m-auto ">
                <Slider {...settings} className="w-full w-full h-full ">
                { eventsdetails.map((event) => (
                    <div>
                    <div index={event.index} className="slider-card w-full h-full    ">
                           <div className="text-white bg-secondaryblack/50 py-1 md:p-5 m-1 md:m-3  rounded-xl ">     
                        <h5 className="mt-5 text-xl md:text-2xl font-bold text-center"><b>{event.eventtitle}</b></h5>
                        <div className="w-full h-1/5 my-2 flex justify-center items-center align-items-center ">
                            <img src={event.eventlogo} className="w-6/12 object-cover" alt="" />
                        </div>
                        <p className="text-center text-sm sm:text-md px-10 md:px-15 py-2">
                            {event.eventdescription}
                        </p>

                        <div className="button flex flex-col justify-center items-center my-7 md:my-15">
                        <Link to={event.navlink} className=" w-4/5 sm:w-2/5 m-2">
                            <button className=" w-full hover:scale-125 text-xs sm:text-md px-2 py-2  text-tertiaryblack rounded-lg bg-gradient-to-r from-purple via-grad2 to-yellow drop-shadow-2xl">KNOW MORE</button>
                        </Link>
                            
                            <button className="w-4/5 sm:w-2/5  text-xs sm:text-md flex justify-center px-5 py-2 m-2 border-palegreen rounded-lg text-palegreen hover:text-primaryblack hover:bg-palegreen border-2 ">REGISTER</button>
                            
                        </div>
                        </div>  
                    </div>
                    </div>
                ))}
                
                
                           
                </Slider>
            </div>
   
    );
}
export default Containers;