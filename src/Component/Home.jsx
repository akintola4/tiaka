import Footer from "./Footer"
import Hero from "./Hero"
import Nav from "./Nav"
import Sub from "./Sub"

//card for products
import productData from "../utlis/productData"
import ProductCard from "./ProductCard"

//card for developer
import developerData from "../utlis/developerData"
import DevCard from "./DevCard"


//card for Pricing
import pricingData from "../utlis/pricingData"
import PricingCard from "./PricingCard"

//card for status 
import StatsCard from "./StatsCard"
import statsData from '../utlis/statsData'

//for aos
import { useEffect } from "react";
import AOS from 'aos'
import 'aos/dist/aos.css';
function Home() {
  useEffect(() => {
    AOS.init();
}, [])

  const product = productData.map(product => (
    <ProductCard
        key={product.id}
        product={product}
    />
));

const devcard = developerData.map(devinfo => (
  <DevCard
  key={devinfo.key}
  devinfo={devinfo}
  />
))
const pricingcard = pricingData.map(priceinfo => (
  <PricingCard
  key={priceinfo.key}
  priceinfo={priceinfo}
  />
))

const statscard = statsData.map(statsinfo => (
  <StatsCard
  key={statsinfo.key}
  statsinfo={statsinfo}
  />
))
  return (
    <div className="scroll-smooth flex flex-col gap-20">
    <Nav />
    <Hero />
    <section id="product" className="px-5 md:px-10 flex flex-col justify-center items-center gap-3 md:gap-6"   data-aos="fade-right">
    <h4 className="font-extrabold items-center lg:text-4xl  md:text-2xl text-xl  ">Built for website success</h4>
      <p className="font-normal text-sm md:text-md lg:text-xl  xl:w-8/12 text-center text-ParagraphText dark:text-gray-300">Bring your ideas to life with Tiaka—offering a secure, fast, and reliable platform to create new experiences or elevate your existing website.</p>
            
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 items-center gap-2 md:gap-6">
      {product}
      </div>
    </section>
    <section id="developers" className="px-5 xl:px-10 flex flex-col justify-center items-center gap-3 md:gap-6" >
      <div className="flex flex-row gap-2 md:w-10/12">
      <h4 className="font-extrabold items-center text-lg lg:text-4xl  md:text-2xl   ">Boost visibility and grow with SEO  <span className="font-extrabold items-center lg:text-4xl  md:text-2xl text-sm text-ParagraphText dark:text-gray-300 ">that attracts traffic and connects you to your audience. </span>
      </h4>
      </div>

            
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3  gap-4 w-11/12 lg:w-10/12 md:gap-10  xl:gap-12">
        {devcard}
      </div>
    </section>
    <section id="pricing" className="px-5 md:px-10 mx-auto flex flex-col justify-center items-center gap-3 md:gap-10" data-aos="fade-right">
    <div className="flex flex-row gap-2">
      <h4 className="font-extrabold items-center mx-auto lg:text-4xl  md:text-2xl text-lg  ">Using Tiaka gets easier - <span className="font-extrabold items-center lg:text-4xl  md:text-2xl text-sm text-ParagraphText dark:text-gray-300 ">Sustainable and future-focused solutions. </span>
      </h4>
      </div> 
      <div className="grid grid-cols-1 md:grid-cols-2  gap-4 md:gap-10 xl:w-10/12 mx-auto justify-center items-center">

      {pricingcard}
      </div>
    </section>
    <section id="stats" className="px-5 md:px-10 flex flex-col justify-center items-center gap-3 md:gap-6" data-aos="zoom-in-right">
    {/* <div className="flex flex-row gap-2 w-10/12">
      <h4 className="font-extrabold items-center lg:text-4xl  md:text-4xl text-2xl  ">Boost visibility and grow with SEO  <span className="font-extrabold items-center lg:text-4xl  md:text-4xl text-2xl text-ParagraphText dark:text-gray-300 ">that attracts traffic and connects you to your audience. </span>
      </h4>
      </div> */}
      <div className="grid grid-cols-2 lg:grid-cols-4 w-full  xl:w-10/12 border rounded-xl gap-2 p-5 md:p-10 md:gap-10">
     {statscard}
      </div>
    </section>

<Sub />
    <Footer />
    </div>
  )
}

export default Home