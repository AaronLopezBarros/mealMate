import { X } from '@phosphor-icons/react';
import React from 'react';

type ModalMyPantryProps = {
  isOpen: boolean;
  onClose: () => void;
  children: React.ReactNode;
};

const ModalMyPantry = ({ isOpen, onClose, children }: ModalMyPantryProps) => {
  if (!isOpen) return null;

  return (
    <div className='fixed top-40 z-50 w-full max-w-[500px] shadow-2xl'>
      <div className='fixed inset-0 bg-black bg-opacity-50 transition-opacity' onClick={onClose}></div>
      <div className='relative z-10 w-full rounded-lg bg-white p-6'>
        <button onClick={onClose} className='absolute right-2 top-2 text-gray-500 hover:text-gray-700'>
          <X size={32} />
        </button>
        <div>{children}</div>
      </div>
    </div>
  );
};

export default ModalMyPantry;
