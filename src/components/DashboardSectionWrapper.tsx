import Image from 'next/image';

import { Calendar } from '@/components/Calendar';

export const DashboardSectionWrapper = () => {
  return (
    <div className='flex justify-between gap-8 p-6'>
      <Calendar />
      <section className='bg-base-white h-fit w-full max-w-[500px] rounded-xl'>
        <h2 className='text-center text-2xl font-bold'>My pantry</h2>
        <Image
          src='/images/pantry.svg'
          alt='pantry'
          width={0}
          height={0}
          className='mt-6 w-fit cursor-pointer shadow-2xl'
        />
      </section>
    </div>
  );
};
