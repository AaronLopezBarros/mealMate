import React from 'react';

import { DashboardSectionWrapper } from '@/components/DashboardSectionWrapper';
import { Navbar } from '@/components/Navbar';

export default function Home() {
  return (
    <div className='bg-base-white min-h-screen'>
      <Navbar />
      <DashboardSectionWrapper />
    </div>
  );
}
