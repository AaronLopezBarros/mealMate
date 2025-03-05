export const Navbar = () => {
  return (
    <div className='bg-primary flex items-center justify-between border-b border-black p-4 text-black'>
      <h1 className='text-3xl font-bold'>MealMate</h1>
      <div className='space-x-4'>
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
