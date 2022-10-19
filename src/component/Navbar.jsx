import { AiOutlineMenu, AiOutlineSearch } from 'react-icons/ai';
import { BsFillCartFill } from 'react-icons/bs';
export default function Navbar() {
  return (
    //   we used [] to put our own px
    <div className=' max-w-[1640px] mx-auto flex justify-between items-center p-4 shadow'>
      {/* left side */}
      <div className='flex items-center'>
        <div className='cursor-pointer '>
          <AiOutlineMenu size={30} />
        </div>
        <h1 className='text-2xl sm:text-3xl lg:text-4xl px-2'>
          Buja <span className='font-bold'>Eats</span>
        </h1>
        <div className='hidden lg:flex bg-gray-200 p-1 items-center rounded-full text-[14px]'>
          <p className='bg-black text-white rounded-full p-2'>Delivery</p>
          <p className='p-2'>Pickup</p>
        </div>
      </div>
      {/* search side */}
      <div className='bg-gray-200 flex items-center rounded-full px-2 w-[200px] sm:w-[400px] lg:w-[500px] '>
        <AiOutlineSearch size={25} />
        <input
          className='bg-transparent p-2 w-full focus:outline-none '
          type='text'
          placeholder='Search...'
        />
      </div>
      {/* cart button */}
      <button className=' bg-black text-white hidden md:flex items-center py-2 rounded-full '>
        <BsFillCartFill size={20} className='mr-2' />
        Cart
      </button>
    </div>
  );
}
