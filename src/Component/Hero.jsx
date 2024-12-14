import { BsStars } from "react-icons/bs";

export default function Hero() {

    return (



        <div id="hero" className="w-full  h-full pt-32 z-0  " data-aos="zoom-in">
            <div className=" px-5 top-0 left-0 w-full h-full z-10 flex items-center justify-center flex-col gap-10 md:gap-16 ">
                <div className="flex flex-row gap-2 md:gap-2 items-center bg-gray-100 dark:bg-gray-700 dark:border-gray-600 border-2 rounded-full p-2 px-4">
                    <div className="flex flex-row p-1 px-4 bg-white dark:bg-gray-200 rounded-full items-center gap-2">
                        <BsStars className="text-stars" />
                        <p className="font-normal text-xs lg:text-sm  text-gray-950 dark:text-gray-700">New</p>
                    </div>
                    <p className="font-normal hidden md:block text-xs lg:text-sm text-center md:text-start  text-gray-950 dark:text-gray-300">Elevate your site’s visibility effortlessly with AI, where smart technology meets user-friendly SEO tools.</p>
               
                    <p className="font-normal md:hidden block text-xs lg:text-sm text-center md:text-start  text-gray-950 dark:text-gray-300">Elevate your site’s visibility effortlessly</p>
                    </div>
                <div className="flex flex-col gap-4 md:gap-10 items-start  md:items-center md:w-8/12  text-center">
                    <div className="flex flex-col w-full items-center bg-gradient-to-t from-violet-600 via-violet-950 to-black dark:from-violet-700 dark:via-violet-50 dark:to-violet-300 bg-clip-text text-transparent justify-center gap-2">
                        <h4 className="font-extrabold items-center lg:text-6xl  md:text-6xl text-2xl w-full xl:w-8/12 ">Unlock the</h4>
                        <h4 className="font-extrabold flex flex-row items-center justify-center gap-2 mx-auto lg:text-6xl md:text-6xl text-2xl w-full xl:w-8/12 ">
                            future with<BsStars className="scale-75 md:scale-100 shadow-[0_-1px_30px_rgba(210,183,255,100)] bg-gradient-to-t from-violet-100 via-violet-100 to-violet-100 dark:from-violet-400 dark:via-violet-50 dark:to-violet-200 rounded-full p-3 text-5xl items-center text-stars" /> AI.</h4>
                    </div>

                    <p className="font-normal text-sm md:text-xl xl:w-7/12 text-ParagraphText dark:text-gray-300">Elevate your site’s visibility effortlessly with AI, where smart technology meets user-friendly SEO tools.</p>
                </div>
                <div className="flex flex-col pb-10">
                    <button name="get started" id='get started' className='px-4 py-2 shadow-[0_-1px_25px_rgba(58,58,58,100)] md:shadow-[0_-1px_60px_rgba(58,58,58,6)] hover:shadow-[0_-10px_80px_rgba(210,183,255,100)] dark:hover:shadow-[0_-10px_80px_rgba(210,183,255,100)] dark:shadow-[0_-1px_60px_rgba(58,58,58,6)] hover:text-primaryColor hover:bg-white  border border-transparent hover:border-primaryColor bg-btn-base-light text-white hover:text-btn dark:bg-btn-base-dark dark:text-gray-50 dark:hover:bg-gray-950 dark:hover:text-gray-50 dark:hover:border-btn-base-dark    transition ease-in-out  delay-150 duration-300  rounded-lg'>Start Free Trial</button>

                </div>

                <img src="img/hero-1.webp" className="w-10/12 shadow-[0_-10px_80px_rgba(210,183,255,100)] rounded-xl mx-auto dark:opacity-95" alt="hero Img" />

            </div>
        </div>

    )
}
