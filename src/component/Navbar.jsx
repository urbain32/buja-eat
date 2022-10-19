import {
  AiFillTags,
  AiOutlineCloseCircle,
  AiOutlineMenu,
  AiOutlineSearch,
} from 'react-icons/ai';
import { BsFillCartFill, BsFillSaveFill } from 'react-icons/bs';
import { TbTruckDelivery } from 'react-icons/tb';
import { MdFavorite, MdHelp } from 'react-icons/md';
import { FaUserFriends, FaWallet } from 'react-icons/fa';
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
      {/* mobile menu */}
      {/* overlay  */}
      <div className='bg-black/80 fixed w-full h-screen z-10 top-0 left-0 '></div>
      {/* Side drawer menu */}
      <div className='fixed top-0 left-0 w-[300px] h-screen bg-white z-10 duration-300 '>
        <AiOutlineCloseCircle
          size={30}
          className='absolute right-4 top-4  cursor-pointer'
        />
        <h2 className='text-2xl p-4'>
          Buja <span className='font-bold'>Eats</span>
        </h2>
        <nav>
          <ul className='flex flex-col p-4 text-gray800 '>
            <li className='text-xl py-4 flex '>
              <TbTruckDelivery size={25} className='mr-4' /> Orders{' '}
            </li>
            <li className='text-xl py-4 flex '>
              <MdFavorite size={25} className='mr-4' /> Favorites{' '}
            </li>
            <li className='text-xl py-4 flex '>
              <FaWallet size={25} className='mr-4' /> Wallet{' '}
            </li>
            <li className='text-xl py-4 flex '>
              <MdHelp size={25} className='mr-4' /> Help{' '}
            </li>
            <li className='text-xl py-4 flex '>
              <AiFillTags size={25} className='mr-4' /> Promotions{' '}
            </li>
            <li className='text-xl py-4 flex '>
              <BsFillSaveFill size={25} className='mr-4' /> Best Ones{' '}
            </li>
            <li className='text-xl py-4 flex '>
              <FaUserFriends size={25} className='mr-4' /> Invite Friends{' '}
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
}
