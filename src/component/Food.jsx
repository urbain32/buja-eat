import { useState } from 'react';
import { data } from '../data/data.js';
export default function Food() {
  // console.log(data);
  const [foods, setFoods] = useState(data);
  // Filter type by category
  const filterType = (category) => {
    setFoods(
      data.filter((food) => {
        return food.category === category;
      })
    );
  };
  // Filter  by price
  const filterPrice = (price) => {
    setFoods(
      data.filter((food) => {
        return food.price === price;
      })
    );
  };

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
            <button
              onClick={() => setFoods(data)}
              className='m-1 border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white '
            >
              All
            </button>
            <button
              onClick={() => filterType('red wine')}
              className='m-1 border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white '
            >
              Red Wine
            </button>
            <button
              onClick={() => filterType('white wine')}
              className='m-1 border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white '
            >
              White Wite
            </button>
            <button
              onClick={() => filterType('rose wine')}
              className='m-1 border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white '
            >
              Rosè Wine
            </button>
            <button
              onClick={() => filterType('champagne')}
              className='m-1 border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white '
            >
              Champagne
            </button>
          </div>
        </div>
        {/* Filter Price */}
        <div>
          <p className='font-bold text-gray-700  '>Filter Price</p>
          <div className='flex justify-between max-x-[390px] w-full'>
            <button
              onClick={() => filterPrice('$')}
              className='m-1 border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white '
            >
              $
            </button>
            <button
              onClick={() => filterPrice('$$')}
              className='m-1 border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white '
            >
              $$
            </button>
            <button
              onClick={() => filterPrice('$$$')}
              className='m-1 border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white '
            >
              $$$
            </button>
            <button
              onClick={() => filterPrice('$$$$')}
              className='m-1 border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white '
            >
              $$$$
            </button>
          </div>
        </div>
      </div>
      {/* display foods */}
      <div className='grid grid-cols-2 lg:grid-cols-4 pt-4 gap-6 '>
        {foods.map((food, index) => (
          <div
            key={index}
            className='border shadow-2xl hover:scale-105 duration-300 rounded-lg '
          >
            <img
              className='w-full shadow-lg h-[300px] object-cover rounded-t-lg '
              src={food.image}
              alt={food.name}
            />
            <div className='flex justify-between px-2 py-4 '>
              <p className='font-bold text-xl'>{food.name}</p>
              <p>
                <span className=' bg-orange-600 p-1 text-white rounded-full '>
                  {food.price}
                </span>
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
