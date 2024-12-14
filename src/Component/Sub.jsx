

export default function Sub() {
    return (
        // <section className="flex relative bg-bg-img  my-20 flex-col gap-10 p-40 bg-no-repeat items-center mx-20">
        //     {/* <img src="img/sub.svg" alt="" /> */}
        //     <div className="flex flex-col gap-4 items-center">
        //     <h4 className="bg-gradient-to-r from-neutral-100 via-neutral-300 to-neutral-700 text-transparent bg-clip-text md:text-6xl ">Subscribe to Ooido</h4>
        //     <p className="text-md ">The ultimate guide and latest updates on ooido. Join 100,000+ others on the journey.</p>
        //     </div>

        //     <div className="bg-gray-100 rounded-lg flex flex-row  gap-10 text-black p-2 px-4">
        //         <input type="email" placeholder="enter your email"  className="bg-transparent"/>
        //         <button className="bg-gray-900 p-2 px-4 rounded-lg text-white ">Sign up</button>
        //     </div>
        // </section>
        <section className="relative p-5 mx-2 md:mx-4 lg:p-20 xl:mx-32 bg-gray-950 text-white rounded-2xl"  data-aos="zoom-in" >
            <img
                src="img/sub.webp"
                className="absolute inset-0 object-cover dark:opacity-90 rounded-xl md:w-full h-full"
                alt=""
            />
            <div className="relative ">
                <div className="flex flex-col items-center justify-between gap-10 xl:p-20">
                    <div className="flex flex-col gap-4 items-center">
                        <h4 className="text-1xl md:text-4xl lg:text-6xl font-bold ">AI-driven SEO for everyone.</h4>
                    </div>
                    <div className="bg-gray-100 rounded-lg flex md:max-w-md md:mx-auto md:w-8/12 justify-between flex-row  md:gap-10 text-black p-2 px-4">
                        <input type="email" placeholder="enter your email" className="bg-transparent w-6/12 md:w-full" />
                        <button className="bg-btn-base-dark p-2 md:p-2 md:px-4 rounded-lg text-white ">Subscribe</button>
                    </div>

                </div>
            </div>

        </section>
    )
}
