import PropTypes from 'prop-types';

function StatsCard({statsinfo}) {
  return (
    <div className="flex flex-col border cursor-pointer hover: h-full rounded-xl justify-between p-5 md:p-10 gap-2 hover:shadow-[0_-1px_20px_rgba(210,210,255,20)] hover:scale-105 transition delay-150 duration-300 dark:hover:shadow-[0_-1px_20px_rgba(210,183,255,100)]">
    <div className=" w-10/12 h-full  lg:scale-110 xl:scale-150 md:w-10/12 xl:pl-2 items-start ">
     <img  src={`img/${statsinfo.icon}`} className="scale-50  " alt={statsinfo.title} />
  </div>
  <h4 className="font-extrabold  text-lg md:text-xl lg:text-1xl xl:text-3xl  ">{statsinfo.title}</h4>
  <p className="font-normal  text-sm md:text-lg lg:text-lg  text-ParagraphText dark:text-gray-300 ">{statsinfo.description} </p>
</div>
  )
}

StatsCard.propTypes = {
    statsinfo: PropTypes.shape({
      id: PropTypes.number.isRequired,
      title: PropTypes.string.isRequired,
      description: PropTypes.string.isRequired,
      icon: PropTypes.string.isRequired,
    }).isRequired
  };
  
export default StatsCard