'use client';

import { useState } from 'react';

import ModalMyPantry from '@/components/MyPantry/ModalMyPantry';
import MyPantry from '@/components/MyPantry/MyPantry';

const MyPantryWrapper = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  return (
    <section className='h-fit w-full max-w-[500px]'>
      <MyPantry onClick={openModal} />
      <ModalMyPantry isOpen={isModalOpen} onClose={closeModal}>
        Holaaaaaa
      </ModalMyPantry>
    </section>
  );
};

export default MyPantryWrapper;
