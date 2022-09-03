import React, { useState, useEffect} from "react";
import backbtn from "../assets/backbtn.png";
import mindtwisterslogo from "../assets/mindtwisterslogo.png";
import { Link } from "react-router-dom";
function Description(detailss) {

  const [details,setdetails]=useState(detailss.Descriptioncontent);
  useEffect(() => {
    window.scrollTo(0, 0);
  });

      
  return (
    <div>
      <div>
        <div className="hidden sm:block">
          <div className={details.overallclass}></div>

          <div className="">
            <div className={details.overallclass}>
              <div className=" flex justify-center sm:pt-12 lg:-ml-6">
                <div className="  h-2/5 w-10/12 mt-6 sm:mt-10 md:w-9/12 bg-gradient-to-r from-[#000000]/70 to-transparent ">
                  <div className=" sm:flex sm:justify-end">
                    <div className="sm:grid sm:grid-cols-2 sm:gap-14 ">
                      <a href={detailss.brochure} className="w-full h-full" download>
                      <button className="w-full h-12 border-none font-normal sm:text-sm md:text-base lg:text-lg xl:text-xl sm:mt-10 md:px-1 md:py-1 lg:px-8 lg:py-1 rounded-lg bg-gradient-to-r from-purple via-[#E36595] to-[#E6BB5B] text-white hover:scale-125">
                         GET BROCHURE
                      </button>  
                      </a>                     
                      
                      <button className=" font-semibold hover:bg-brightgreen hover:text-primaryblack md:text-base lg:text-lg xl:text-xl px-4 py-2 sm:mt-10 border-brightgreen border-4 text-brightgreen">
                        REGISTER
                      </button>
                    </div>
                  </div>

                  <div className="h-auto w-1/6 pt-6 pl-6 -mt-20">
                    <h1 className="text-purple font-bold  text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl">
                      {details.eventfirstname}
                    </h1>
                  </div>
                  <div className="h-auto w-1/5 pt-1 pl-6">
                    <h1 className="text-white font-bold text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl">
                      {details.eventlastname}
                    </h1>
                  </div>
                  <div className="h-auto sm:w-2/5 pt-2 pl-7">
                    <h1 className="text-[#E6BB5B] font-bold  sm:text-sm md:text-sm lg:text-md xl:text-xl">
                    {details.month} {details.date}, {details.year}
                    </h1>
                  </div>
                  <div className="h-24 w-24 ml-4  md:h-32 md:w-32 lg:h-40 lg:w-40 xl:h-52 xl:w-52 ">
                    <img
                      className="text-white"
                      src={detailss.eventlogo}
                      alt="mind twisters logo">
                    </img>
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-2 sm:mr-24 sm:-mt-20 md:-mt-40 lg:-mt-36 xl:-mt-52">
                <div className="flex flex-col justify-center md:mr-8 lg:mr-10">
                  <div className="flex justify-center items-center sm:mt-14 md:mt-32 lg:mt-24 xl:mt-36 ">
                  <Link to="/#eventssection"><img
                      src={backbtn}
                      alt="back btn "
                      className=" sm:h-7 sm:w-7 md:h-8 md:w-8 lg:h-12 lg:w-12 xl:h-16 xl:w-16"
                    ></img>
                    </Link>
                  </div>
                  <div className="">
                    <h1 className="text-white text-center font-bold text-xs md:text-xs lg:text-sm xl:text-md">
                      BACK
                    </h1>
                    <h1 className="text-[#37A6A2] text-center font-bold text-xs md:text-xs lg:text-sm xl:text-md">
                      TO
                    </h1>
                    <h1 className="text-white text-center font-bold text-xs md:text-xs lg:text-sm xl:text-md">
                      HOME
                    </h1>
                  </div>
                </div>

                <div className="flex justify-end sm:-mr-24 sm:-ml-10 md:mt-12 lg:mt-1 md:-ml-24 md:-mr-20 ">
                  <div className=" flex justify-end sm:py-8 sm:mr-20 md:mr-24 lg:mr-52 sm:pl-4 sm:h-auto bg-gradient-to-r from-[#000000]/70 to-transparent ">
                    <div className="sm:grid sm:grid-rows-10 sm:pl-2 sm:mr-2 ml-0">
                      <h1 className="text-brightgreen sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl font-extrabold">
                        A
                      </h1>
                      <h1 className="text-brightgreen sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl font-extrabold">
                        b
                      </h1>
                      <h1 className="text-brightgreen sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl font-extrabold">
                        o
                      </h1>
                      <h1 className="text-brightgreen sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl font-extrabold">
                        u
                      </h1>
                      <h1 className="text-brightgreen sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl font-extrabold">
                        t
                      </h1>
                      <h1 className="text-white sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl font-extrabold">
                        E
                      </h1>
                      <h1 className="text-white sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl font-extrabold">
                        v
                      </h1>
                      <h1 className="text-white sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl font-extrabold">
                        e
                      </h1>
                      <h1 className="text-white sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl font-extrabold">
                        n
                      </h1>
                      <h1 className="text-white sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl font-extrabold">
                        t
                      </h1>
                    </div>

                    <div className="bg-[#E6BB5B] sm:h-auto sm:w-1 sm:ml-0 sm:mr-8 sm:align-right"></div>

                    <div className=" sm:w-11/12">
                      <p className="text-white sm:text-sm md:text-base lg:text-md xl:text-lg">
                        {details.eventdescription}
                      </p>

                      <div className="sm:grid sm:grid-cols-2 sm:gap-20 sm:pr-6 sm:pt-6">
                        <div>
                          <h1 className="text-purple text-center font-bold sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl">
                            {details.numberofrounds}
                          </h1>
                          <h1 className="text-brightgreen text-center font-bold sm:text-lg md:text-xl lg:text-2xl xl:text-3xl">
                            ROUNDS
                          </h1>
                        </div>

                        <div>
                          <h1 className="text-purple text-center font-bold sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl">
                            {details.totalwinners}
                          </h1>
                          <h1 className="text-brightgreen text-center font-bold sm:text-lg md:text-xl lg:text-2xl xl:text-3xl">
                            WINNERS
                          </h1>
                        </div>
                      </div>

                      <div>
                        <h1 className="text-purple text-center mt-3 font-bold sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl">
                          Rs.{details.firstprizecash}
                        </h1>
                        <h1 className="text-brightgreen text-center font-bold sm:text-lg md:text-xl lg:text-2xl xl:text-3xl">
                          First Prize
                        </h1>
                        
                      </div>
                      <div className="sm:grid sm:grid-cols-2 sm:gap-20 sm:pr-6 sm:pt-6">
                        <div>
                          <h1 className="text-purple text-center font-bold sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl">
                            Rs.{details.secondprizecash}
                          </h1>
                          <h1 className="text-brightgreen text-center font-bold sm:text-lg md:text-xl lg:text-2xl xl:text-3xl">
                            Second Prize
                          </h1>
                          
                        </div>

                        <div>
                          <h1 className="text-purple text-center font-bold sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl">
                            Rs.{details.thirdprizecash}
                          </h1>
                          <h1 className="text-brightgreen text-center font-bold sm:text-lg md:text-xl lg:text-2xl xl:text-3xl">
                            Third Prize
                          </h1>
                          
                        </div>
                      </div>

                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="block sm:hidden">
          <div className="bg-gradient-to-r from-[#000000]/70 to-transparent pb-12">
            <div className="pl-8 pt-8">
              <Link to="/"><img className="h-10 w-10" src={backbtn}></img></Link>
            </div>
            <div className="flex flex-row w-full items-center pt-4 pb-8 bg-[url('assets/webbg1.png') bg-contain bg-no-repeat">
              <div className="w-1/2 pl-12">
                  <div className="h-auto w-1/6 pl-6 text-2xl">
                    <h1 className="text-purple font-bold">
                      MIND
                    </h1>
                  </div>
                  <div className="h-auto w-1/5 pt-1 pl-6 text-2xl">
                    <h1 className="text-white font-bold">
                      TWISTERS
                    </h1>
                  </div>
                  <div className="h-auto sm:w-2/5 pt-2 pl-7 text-md">
                    <h1 className="text-[#E6BB5B] font-bold">
                      Sept 24, 2022
                    </h1>
                  </div>
              </div>
              <div className="w-1/2 flex justify-center">
                <img
                  className="text-white h-40 w-40"
                  src={mindtwisterslogo}
                  alt="mind twisters logo">
                </img>
              </div>
            </div>
            <div className=" sm:flex sm:justify-end">
                <div className="flex flex-col items-center">
                  <button className="w-40 h-10 m-4 border-none font-normal rounded-lg bg-gradient-to-r from-purple via-[#E36595] to-[#E6BB5B] text-white">
                    GET BROCHURE
                  </button>
                  <button className="w-40 py-2 font-semibold border-brightgreen hover:text-primaryblack border-2 text-brightgreen">
                    REGISTER
                  </button>
                </div>
            </div>
        </div>
        <div className="bg-gradient-to-r from-black/70 to-transparent">
          <div className="flex flex-col justify-center bg-gradient-to-r from-black/70 to-transparent">
            <div className="ml-8 border-b-2 border-b-[#E6BB5B] font-bold py-2 w-1/2">
              <h1 className="text-brightgreen text-2xl">About <span className="text-white">Event</span></h1>
            </div>
              <div className="py-4 px-20">
                <p className="text-white text-justify">
                  {details.eventdescription}
                </p>
              </div>
          </div>
          <div className="pb-8">
            <div>
              <h1 className="text-purple text-center font-bold text-2xl py-2">
                {details.numberofrounds}
              </h1>
              <h1 className="text-brightgreen text-center font-bold text-2xl py-2">
                ROUNDS
              </h1>
            </div>
            <div>
              <h1 className="text-purple text-center font-bold text-2xl py-2">
              {details.totalwinners}
              </h1>
              <h1 className="text-brightgreen text-center font-bold text-2xl py-2">
                WINNERS
              </h1>
            </div>
            <div>
              <h1 className="text-purple text-center font-bold text-2xl py-2">
              Rs.{details.firstprizecash}
              </h1>
              <h1 className="text-brightgreen text-center font-bold text-2xl py-2">
                First Prize
              </h1>
            </div>
            <div>
              <h1 className="text-purple text-center font-bold text-2xl py-2">
              Rs.{details.secondprizecash}
              </h1>
              <h1 className="text-brightgreen text-center font-bold text-2xl py-2">
                Second prize
              </h1>
            </div>
            <div>
              <h1 className="text-purple text-center font-bold text-2xl py-2">
              Rs.{details.thirdprizecash}
              </h1>
              <h1 className="text-brightgreen text-center font-bold text-2xl py-2">
                Third prize
              </h1>
            </div>
          </div>
        </div>
        </div>
      </div>
    </div>
  );
}

export default Description;
