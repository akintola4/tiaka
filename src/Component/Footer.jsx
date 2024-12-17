
import { FiFacebook,FiInstagram } from "react-icons/fi";

export default function Footer() {
    return (
        <footer id="footer" name="footer" className="md:pt-10 w-full flex-end bottom-0  " >
            <div className="relative">
                <div className="relative flex   flex-col gap-5 md:gap-10  ">
                    <div className="flex flex-col px-5 gap-5 md:gap-10 md:mx-10 lg:mx-0 lg:px-0 xl:gap-32 xl:justify-between   lg:flex-row ">
                        <div className="flex flex-col lg:items-start gap-2 items-center  lg-w-2/12  xl:w-3/12" >
                            <img src="/img/logo-black.webp" className=" block w-8/12 md:w-full scale-50 dark:hidden " alt="" />
                            <img src="/img/logo-light.webp" className=" hidden dark:block w-8/12 md:w-full scale-50 " alt="" />
                            {/* <p className="text-sm md:text-md text-center md:w-8/12 lg:text-left">We help business toward success with expert strategies, tailored solutions, and a clear path to growth and innovation..</p> */}

                        </div>
                        <div className="grid  grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:gird-cols-4 gap-5 md:gap-10 justify-around my-5 md:mx-10 lg:mx-0 lg:w-11/12 xl:w-7/12 lg:grid-rows-1">
                            <div className="flex flex-col gap-2  text-left justify-between">
                                <h4 className="font-bold text-md md:text-lg ">Learn More</h4>
                                <div><button name="footer nav" id='footer Nav' className="text-sm md:text-sm font-light gap-2 "> About Tiaka</button></div>
                                <div><button name="footer nav" id='footer Nav' className="text-sm md:text-sm font-light gap-2 ">Press Relaases</button></div>
                                <div><button name="footer nav" id='footer Nav' className="text-sm md:text-sm font-light gap-2 "> Environment</button></div>
                                <div><button name="footer nav" id='footer Nav' className="text-sm md:text-sm font-light gap-2 "> Jobs</button></div>
                                <div><button name="footer nav" id='footer Nav' className="text-sm md:text-sm font-light gap-2 "> Privacy Policy</button></div>
                            </div>
                            <div className="flex flex-col gap-2  text-left md:gap-2">
                                <h4 className="font-bold text-md md:text-lg ">Businesses</h4>
                                <div><button name="footer nav" id='footer Nav' className="text-sm md:text-sm font-light gap-2 "> Increased Revenue</button></div>
                                <div><button name="footer nav" id='footer Nav' className="text-sm md:text-sm font-light gap-2 ">Season Passes</button></div>
                                <div><button name="footer nav" id='footer Nav' className="text-sm md:text-sm font-light gap-2 "> Good Discount</button></div>
                            </div>
                            <div className="flex flex-col gap-2  text-left md:gap-2">
                                <h4 className="font-bold text-md md:text-lg ">Contact Us</h4>
                                <div><button name="footer nav" id='footer Nav' className="text-sm md:text-sm font-light gap-2 "> 123-456-7890</button></div>
                                <div><button name="footer nav" id='footer Nav' className="text-sm md:text-sm font-light gap-2 ">123-456-7890</button></div>
                            </div>
                            <div className="flex flex-col gap-2  text-left md:gap-4">
                            <h4 className="font-bold text-md md:text-lg ">Social</h4>
                            <div className="flex flex-row gap-4">
                            <button  className=" flex flex-row items-center gap-2 text-md md:text-xl font-light" name="socials" id="facebook"><FiFacebook /> </button>
                            <button  className=" flex flex-row items-center gap-2 text-md md:text-xl font-light" name="socials" id="instagram"><FiInstagram /> </button>
                            
                            </div>
                           
                            </div>

                            {/* <div className="flex flex-col gap-2  text-left ">
                                <h4 className="font-bold text-lg ">Get in touch</h4>
                                <button  className=" flex flex-row items-center gap-2 text-md font-light" name="footer nav" id='footer Nav'><FiPhone /> <h4>+44 7400 383892</h4></button>
                            <button  className=" flex flex-row items-center gap-2 text-md font-light" name="footer nav" id='footer Nav'><CiMail /><h4>hello@epicx.co.uk</h4></button>
                            <button  className=" flex flex-row items-center gap-2 text-md font-light" name="footer nav" id='footer Nav'><VscLocation /> <h4>location</h4></button>
                            

                            </div> */}


                        </div>
                    </div>
                    <div className="flex flex-col items-center xl:items-start gap-4 xl:gap-0 lg:flex-row p-5  justify-center border-t-2 ">

                        <h4 className=" text-xs md:text-sm text-center lg:text-left">© 2024 Tiaka Ai | All Rights Reserved, Designed by <a href="https://x.com/zionxi99?s=21">Mayor</a>  and implemented by <a href="https://x.com/photofola">Dev Akintola</a></h4>
                    </div>
                </div>
            </div>
        </footer>
    )
}
