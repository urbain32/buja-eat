import { AiOutlineMenu } from 'react-icons/ai';
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
      
    </div>
  );
}
