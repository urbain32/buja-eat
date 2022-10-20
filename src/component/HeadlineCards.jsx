export default function HeadlineCards() {
  return (
    <div className='max-w-[1640px] mx-auto p-4 py-12 grid md:grid-cols-3 gap-6 '>
      {/* cards 1 */}
      <div className='relative rounded-xl '>
        {/* overlay */}
        <div className='absolute w-full h-full bg-black/50 rounded-xl text-white '>
          <p className='font-bold text-2xl px-2 pt-4 '>Sun's Out, BUJA's Out</p>
          <p className='px-2 '> Through 8/26</p>
          <button className='border-white bg-white text-black mx-2 bottom-4 absolute hover:bg-transparent hover:text-white '>
            Order Now
          </button>
        </div>
        {/* image */}
        <img
          className='max-h-[160px] md:max-h-[200px] w-full object-cover    rounded-xl '
          src='https://images.unsplash.com/photo-1558346489-19413928158b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80'
          alt='/'
        />
      </div>
      {/* cards 2 */}
      <div className='relative rounded-xl '>
        {/* overlay */}
        <div className='absolute w-full h-full bg-black/50 rounded-xl text-white '>
          <p className='font-bold text-2xl px-2 pt-4 '>New Brand of Wine </p>
          <p className='px-2 '>Added Daily</p>
          <button className='border-white bg-white text-black mx-2 bottom-4 absolute hover:bg-transparent hover:text-white '>
            Order Now
          </button>
        </div>
        {/* image */}
        <img
          className='max-h-[160px] md:max-h-[200px] w-full object-cover rounded-xl '
          src='https://images.unsplash.com/photo-1556442281-77c90134c61f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80'
          alt='/'
        />
      </div>
      {/* cards 3  */}
      <div className='relative rounded-xl '>
        {/* overlay */}
        <div className='absolute w-full h-full bg-black/50 rounded-xl text-white '>
          <p className='font-bold text-2xl px-2 pt-4 '>We do Deliver Too</p>
          <p className='px-2 '>Anywhere in Bujumbura</p>
          <button className='border-white bg-white text-black mx-2 bottom-4 absolute hover:bg-transparent hover:text-white '>
            Order Now
          </button>
        </div>
        {/* image */}
        <img
          className='max-h-[160px] md:max-h-[200px] w-full object-cover rounded-xl '
          src='https://images.unsplash.com/photo-1617347454431-f49d7ff5c3b1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1630&q=80'
          alt='/'
        />
      </div>
    </div>
  );
}
