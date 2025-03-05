import React from 'react';

import { Calendar } from '@/components/Calendar';
import { Navbar } from '@/components/Navbar';

export default function Home() {
  return (
    <div className='bg-background-white min-h-screen'>
      <Navbar />
      <Calendar />
    </div>
  );
}
