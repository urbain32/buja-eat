export default function Hero() {
  return (
    <div className='max-w-[1640px] mx-auto p-4 '>
      <div className='max-h-[500px] relative '>
        {/* overlay */}
        <div className='absolute w-full h-full text-gray-200 bg-black/50 flex flex-col justify-center rounded '>
          <h1 className='px-4 text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold '>
            The <span className='text-orange-600 '>Best</span>
          </h1>
          <h1 className='px-4 text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold '>
            <span className='text-orange-600 '>Foods </span>Delivery
          </h1>
        </div>
        <img
          className='w-full max-h-[500px] object-cover rounded '
          src='https://images.pexels.com/photos/1639562/pexels-photo-1639562.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
          alt=''
        />
      </div>
    </div>
  );
}
