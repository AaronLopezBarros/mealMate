import React from 'react';

import DashboardSectionWrapper from '@/components/DashboardSectionWrapper';
import Navbar from '@/components/Navbar';

export default function Home() {
  return (
    <div className='min-h-screen bg-base-white'>
      <Navbar />
      <DashboardSectionWrapper />
    </div>
  );
}
