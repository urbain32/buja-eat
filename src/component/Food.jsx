import { data } from '../data/data.js';
export default function Food() {
  console.log(data);
  return (
    <div className='max-w-[1640px] m-auto px-4 py-12  '>
      <h1 className='text-orange-600 font-bold text-4xl text-center '>
        Top Rated Menu Items
      </h1>
      {/* filter Row */}
      <div className='flex flex-col lg:flex-row justify-between '>
        {/* Filter type */}
        <div>
          <p className='font-bold text-gray-700  '>Filter Type</p>
          <div className='flex justify-between flex-wrap '>
            <button className='m-1 border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white '>
              All
            </button>
            <button className='m-1 border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white '>
              Red Wine
            </button>
            <button className='m-1 border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white '>
              White Wite
            </button>
            <button className='m-1 border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white '>
              Rosè Wine
            </button>
            <button className='m-1 border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white '>
              Champagne
            </button>
          </div>
        </div>
        {/* Filter Price */}
        <div>
          <p className='font-bold text-gray-700  '>Filter Price</p>
          <div className='flex justify-between max-x-[390px] w-full'>
            <button className='m-1 border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white '>
              $
            </button>
            <button className='m-1 border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white '>
              $$
            </button>
            <button className='m-1 border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white '>
              $$$
            </button>
            <button className='m-1 border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white '>
              $$$$
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
