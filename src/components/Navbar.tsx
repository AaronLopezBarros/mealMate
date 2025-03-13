const Navbar = () => {
  return (
    <div className='flex items-center justify-between border-b border-black bg-primary p-4 text-black'>
      <h1 className='text-3xl font-bold text-base-white'>MealMate</h1>
      <div className='space-x-4 text-white'>
        <a href='#' className='hover:underline'>
          Home
        </a>
        <a href='#' className='hover:underline'>
          About
        </a>
        <a href='#' className='hover:underline'>
          Contact
        </a>
      </div>
    </div>
  );
};

export default Navbar;
