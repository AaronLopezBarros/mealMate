import Calendar from '@/components/Calendar';
import MyPantryWrapper from '@/components/MyPantry/MyPantryWrapper';

const DashboardSectionWrapper = () => {
  return (
    <div className='flex justify-between gap-8 p-6'>
      <Calendar />
      <MyPantryWrapper />
    </div>
  );
};

export default DashboardSectionWrapper;
