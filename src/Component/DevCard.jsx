import PropTypes from 'prop-types';

function DevCard({devinfo}) {
  return (
    <div className="flex flex-col p-2  gap-2 hover:shadow-[rgba(17,_17,_26,_0.1)_0px_0px_16px] cursor-pointer md:p-4 rounded-2xl transition ease-in-out delay-100 duration-200">
          <div className="flex flex-row  items-center gap-2 ">
             <img  src={`img/${devinfo.icon}`} className=" scale-90 md:scale-105 lg:scale-95  dark:invert " alt={devinfo.title} />
          <h4 className="font-extrabold   text-xs md:text-lg xl:text-xl  ">{devinfo.title}</h4>
          </div>
          <p className="font-normal text-sm md:text-md lg:text-md xl:text-xl   text-ParagraphText dark:text-gray-300">{devinfo.description}</p>
         
    </div>
  )
}

DevCard.propTypes = {
    devinfo: PropTypes.shape({
      id: PropTypes.number.isRequired,
      title: PropTypes.string.isRequired,
      description: PropTypes.string.isRequired,
      icon: PropTypes.string.isRequired,
    }).isRequired
  };
  
export default DevCard