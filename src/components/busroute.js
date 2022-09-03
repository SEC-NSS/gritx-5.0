import busroutepdf from "../assets/SAIRAM-BUS-ROUTE.pdf";

const Busroute = () =>{
    return (
        <>
        <div className="min-h-fit float-right w-full lg:w-11/12  bg-primaryblack " id="homesection">
            <div >
                <section className="pt-2 w-full h-full my-10 lg:pl-12 xl:pl-14 float-right">
            
                <div >
                    <div className="card bg-secondaryblack/50 h-full w-10/12 flex justify-center items-center m-auto my-5  rounded-xl p-10">
                    
                        <div >
                            <div className=" w-10/12 h-full m-3 ">
                                <h1 className="text-xl md:text-3xl text-purple border-l-4  font-semibold border-l-gold pl-2">How to reach our college? </h1>
                            </div>
                            <div className=" text-fadewhite font-light p-3 sm:flex justify-center items-center">
                        
                                <p className=' text-center p-4 '>We understand that our college is located in a very alluring location, but don't worry, we have buses available for all the routes! Click here to get the bus details for different routes!</p>
                                <a href={busroutepdf} className="w-full sm:w-2/5 hover:scale-125  flex justify-center items-center  text-md sm:text-md px-5 py-2  text-primaryblack rounded-lg bg-gradient-to-r from-purple via-grad2 to-yellow drop-shadow-2xl " download><button className="">GET OUR BUS ROUTES</button></a>
                                
                            </div>
                            
                        </div>
                    </div>
                </div>
                </section>
            </div>
        </div>
        </>
    )
}

export default Busroute;