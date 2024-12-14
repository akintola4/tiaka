import PropTypes from 'prop-types';

function PricingCard({priceinfo}) {
  return (
    // <div className="flex flex-col p-2  gap-2 ">
    //       <div className="flex flex-row  items-center gap-2 ">
    //          <img  src={`img/${priceinfo.icon}`} className=" scale-50 lg:scale-95 dark:invert " alt={priceinfo.title} />
    //       <h4 className="font-normal  xl:w-8/12 text-xs md:text-md xl:text-lg  ">{priceinfo.title}</h4>
    //       </div>
    //       <p className="font-normal text-sm md:text-md lg:text-md xl:text-xl   text-ParagraphText dark:text-gray-300">{priceinfo.description}</p>
         
    // </div>
    <div className="relative bg-gray-50 dark:bg-gray-800 rounded-2xl p-4  dark:border-0 hover:shadow-[rgba(17,_17,_26,_0.1)_0px_0px_16px] hover:scale-105 transition delay-150 duration-300 dark:hover:shadow-[0_1px_20px_rgba(210,183,255,100)] cursor-pointer">
    <p className="-mt-2 mb-2  text-transparent">Relative parent</p>
    <div className="static  p-4 h-32 flex flex-col justify-center dark:border-0">

      <div className="  flex gap-4">
        <div className={`absolute ${priceinfo.color} dark:brightness-90 dark:bg-blend-overlay border-2 border-white dark:border-gray-600  top-1 left-1 w-[60px]  rounded-b-full rounded-r-full p-4 `}>
          <img  src={`img/${priceinfo.icon}`} className="w-10/12 dark:invert " alt={priceinfo.title} />
        </div>
        <div className=" md:p-2 lg:p-4 ">
        <h4 className="font-extrabold items-center mx-auto lg:text-xl  md:text-md text-sm  ">{priceinfo.title} - <span className="font-extrabold items-center lg:text-xl  md:text-md text-sm text-ParagraphText dark:text-gray-300 ">{priceinfo.description}</span>
        </h4>
        </div>
      </div>
    </div>
  </div>
  )
}

PricingCard.propTypes = {
    priceinfo: PropTypes.shape({
      id: PropTypes.number.isRequired,
      color:PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
      description: PropTypes.string.isRequired,
      icon: PropTypes.string.isRequired,
    }).isRequired
  };
  
export default PricingCard