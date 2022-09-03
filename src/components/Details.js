import React, { useEffect, useState } from "react";
import Mindtwistersroundsdetails from "../contents/mindtwisterdetails"
function Details(detailss) {

  const [details,setdetails] = useState(detailss.Descriptioncontent);

  useEffect(()=>{
    const r2 = document.getElementById("2");
    const r3 = document.getElementById("3");
    r2.classList.add("hidden");
    r3.classList.add("hidden");
  });
  

    
    const roundbtnx = () =>{
      const r1 = document.getElementById("1");
      const r2 = document.getElementById("2");
      const r3 = document.getElementById("3");
      if (r1.classList.contains("hidden")) {
        r1.classList.remove("hidden");
        r2.classList.add("hidden");
        r3.classList.add("hidden");
      }
    }

    const roundbtny = () =>{
      const r1 = document.getElementById("1");
      const r2 = document.getElementById("2");
      const r3 = document.getElementById("3");
      if (r2.classList.contains("hidden")) {
        r1.classList.add("hidden");
        r2.classList.remove("hidden");
        r3.classList.add("hidden");
      }
    }

    const roundbtnz = () =>{
      const r1 = document.getElementById("1");
      const r2 = document.getElementById("2");
      const r3 = document.getElementById("3");
      if (r3.classList.contains("hidden")) {
        r1.classList.add("hidden");
        r2.classList.add("hidden");
        r3.classList.remove("hidden");
      }
    }

    


  return (
    <div>
        <div className="flex justify-center p-10">
        <div className=" w-11/12 sm:w-3/4 h-auto p-10 bg-primaryblack ">

           
                
            <h1 className="text-[#B760B1] text-center  text-2xl mr-4 sm:text-3xl sm:text-left md:text-4xl lg:text-4xl xl:text-5xl font-rubik-one">SCHEDULE</h1>

            
            <div className="grid grid-cols-3 gap-12 mr-3 -ml-3 mt-4 sm:gap-7 sm:pl-0 md:pl-4 lg:pl-28 sm:pt-8  ">
              {/* {details.map((e)=>(
                    <div className=" " id={e.btnid} key={e.id}>

                    <button className="text-[#229D98] font-rubik-one text-base sm:text-lg md:text-xl lg:text-2xl xl:text-3xl" id={e.onClickfunction} type="button" >ROUND {e.id}</button>
                    </div>
                ))
              } */}
                <div className=" " id="round1btn">

                    <button className="text-[#229D98] font-rubik-one text-base sm:text-lg md:text-xl lg:text-2xl xl:text-3xl" onClick={roundbtnx} type="button" >ROUND 1</button>
                </div>

                <div className="" id="round2btn">
                    <button className="text-[#229D98] font-rubik-one text-base sm:text-lg md:text-xl lg:text-2xl xl:text-3xl" onClick={roundbtny}  type="button" >ROUND 2</button>
                </div>

                <div className="" id="round3btn">
                    <button className="text-[#229D98] font-rubik-one text-base sm:text-lg md:text-xl lg:text-2xl xl:text-3xl" onClick={roundbtnz} type="button" >ROUND 3</button>
                </div>

            </div>

            {details.map((e)=>(
                 <div className=" items-center justify-center"  >  
                 <div className="m-auto  w-11/12 border-10 bg-[#191919] drop-shadow-lg " >
     
                 <div className="sm:m-7 p-4 " id={e.id} >
                     
                     <h3 className="text-[#B760B1] text-md sm:text-lg md:text-xl lg:text-2xl xl:text-3xl font-rubik-one"> {e.roundtitle} </h3>
                     <h5 className="text-yellow text-light text-xl italic">{e.month} {e.date},  {e.year}</h5>
                     <p className="text-white text-xs sm:text-sm sm:pt-2 md:text-base lg:text-md xl:text-lg">
                             {e.rounddescription}
                             
                     </p>
                 </div>
                 </div>
                 </div>
              ))
            }

            


                                      
       
        </div>
        </div>



    </div>
    
  );
}


export default Details;
