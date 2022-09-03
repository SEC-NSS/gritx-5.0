import alleventlogocollab from '../assets/alleventlogocollab.png'
import gritxlogo from '../assets/gritxtitlelogo.png'

const Home = () => {
    return ( 
        <div className="min-h-screen float-right w-full lg:w-11/12  bg-grey bg-blurbwclgimg bg-cover bg-no-repeat" id="homesection">
            
            <div >
                
            <section className="pt-2 w-full h-full my-5 md:my-20 lg:pl-12 xl:pl-14 float-right">
            
            <div >
            
                <div className="card bg-primaryblack/50 h-full w-10/12 flex justify-center items-center m-auto my-5  rounded-xl p-10">
                   
                    <div >
                        <div className=" w-full h-full md:m-3 ">
                           
                            <img src={gritxlogo} alt=""  className="border-l-4 hover:border-l-8  font-semibold border-l-gold pl-5 md:pl-8 "></img>   
                            <img src={alleventlogocollab} alt="eventlogos" className='m-auto rotate w-full mt-5 md:w-80 lg:float-right'/>
                        </div>
                        <div className=" w-full text-fadewhite font-light p-3 ">
                        
                        <p className='flex items-center justify-center mt-10 text-center text-xl'>Sairam NSS is presenting GRITx on the occasion of NSS Day. This time it's magnificent than before. We bring you GRITx 5.0, this time it's unique.
GRITx 5.0 Roots for the youth's zeal and the genius in them. Showcase your wit in amusing non-technical games. Are you a mastermind? bring it on in the technical events! 
GRITx is a grand event that is composed of spectacular contests viz Mind Twisters -To melt your brain, The warrior's league-Touchdown! Slam Dunk! Goal! check your sports addiction and many more! You will get to participate in mind blowing competition and compete with worthy opponents. Don't hold back yourself, let out the challenger in you. 
The mode of events will be partly online/offline.</p>
                        
                           
                        </div>
                        
                    </div>
                </div>
            </div>
            </section>
        </div>
        </div>
     );
}
 
export default Home;