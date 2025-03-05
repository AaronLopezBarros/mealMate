const DAYS_OF_WEEK = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

export const Calendar = () => {
  const twoWeeks = [...DAYS_OF_WEEK, ...DAYS_OF_WEEK];
  return (
    <section className='bg-primary m-6 max-w-[700px] rounded-xl border-2 border-black p-6 shadow-2xl'>
      <h2 className='text-center text-2xl font-bold'>Calendar</h2>
      <div className='mt-6 flex flex-wrap gap-2'>
        {twoWeeks.map((day, index) => (
          <div
            key={index}
            className='border-1 bg-background-white h-[150px] w-[150px] rounded-xl border border-black p-2 text-center shadow-xl'
          >
            {day}
          </div>
        ))}
      </div>
    </section>
  );
};
