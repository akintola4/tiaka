import PropTypes from 'prop-types';

function ProductCard({product}) {
  return (
    <div className="flex flex-col h-full w-full justify-center items-center gap-2 md:gap-4 ">
          <div className="flex scale-75 flex-row gap-2 h-1/6 justify-center items-center">
            <div className="p-2 w-5/12  lg:w-4/12 scale-50 bg-white border-2 dark:bg-gray-700 dark:shadow-[0_-1px_20px_rgba(1,1,1,100)] shadow-[0_-1px_20px_rgba(191,191,191,100)] rounded-full ">
             <img  src={`img/${product.icon}`} className="scale-50 dark:invert " alt={product.title} />
            </div>
          <h4 className="font-normal items-center text-lg md:text-xl lg:text-2xl  ">{product.title}</h4>
          </div>
         <img  src={`img/${product.img}`} className="w-10/12 lg:w-8/12 xl:w-8/12 dark:opacity-90"  alt={product.title} />
        </div>
  )
}

ProductCard.propTypes = {
    product: PropTypes.shape({
      id: PropTypes.number.isRequired,
      title: PropTypes.string.isRequired,
      img: PropTypes.string.isRequired,
      icon: PropTypes.string.isRequired,
    }).isRequired
  };
  
export default ProductCard