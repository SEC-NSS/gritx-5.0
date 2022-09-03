import React, { Component } from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css"; 
import Containers from "./eventscarousel";


const EventsSlide = () => {

    
    return (  
        <>
        <div className="min-h-fit w-full lg:w-11/12 bg-quaternaryblack float-right" id="eventssection">
            <section id="slider" className="pt-5 w-full h-full my-10 lg:pl-12 xl:pl-14 float-right ">
                <div className=" w-10/12 h-full m-auto ">
                    <h1 className="text-4xl md:text-5xl text-purple border-l-4  font-semibold border-l-gold pl-2"> EVENTS </h1>
                       
                           <Containers />


                    </div>
                    
            </section>
        </div>
        </>
    );
}

export default EventsSlide;