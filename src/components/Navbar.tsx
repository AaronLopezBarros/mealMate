export const Navbar = () => {
  return (
    <div className='bg-primary flex items-center justify-between border-b border-black p-4 text-black'>
      <div className='text-2xl font-bold'>MealMate!</div>
      <div className='space-x-4'>
        <a href='#' className='hover:text-gray-300'>
          Home
        </a>
        <a href='#' className='hover:text-gray-300'>
          About
        </a>
        <a href='#' className='hover:text-gray-300'>
          Contact
        </a>
      </div>
    </div>
  );
};
