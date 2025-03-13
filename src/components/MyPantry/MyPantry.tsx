import Image from 'next/image';

type MyPantryProps = {
  onClick: () => void;
};

const MyPantry = ({ onClick }: MyPantryProps) => {
  return (
    <div>
      <h2 className='text-center text-2xl font-bold'>My pantry</h2>
      <button onClick={onClick} className='w-full'>
        <Image
          src='/images/pantry.svg'
          alt='pantry'
          width={0}
          height={0}
          className='hover:shadow-4xl mt-6 w-fit transform cursor-pointer shadow-2xl transition-transform hover:scale-105'
        />
      </button>
    </div>
  );
};

export default MyPantry;
