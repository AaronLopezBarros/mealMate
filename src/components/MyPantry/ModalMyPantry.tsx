import React from 'react';

type ModalMyPantryProps = {
  isOpen: boolean;
  onClose: () => void;
  children: React.ReactNode;
};

const ModalMyPantry = ({ isOpen, onClose, children }: ModalMyPantryProps) => {
  if (!isOpen) return null;

  return (
    <div className='fixed inset-0 z-50 flex items-center justify-center'>
      {/* Overlay oscuro */}
      <div className='fixed inset-0 bg-black bg-opacity-50 transition-opacity' onClick={onClose}></div>

      {/* Contenido del modal */}
      <div className='relative z-10 mx-auto max-w-md rounded-lg bg-white p-6'>
        {/* Botón de cerrar */}
        <button onClick={onClose} className='absolute right-2 top-2 text-gray-500 hover:text-gray-700'>
          ×
        </button>

        {/* Contenido dinámico */}
        <div>{children}</div>
      </div>
    </div>
  );
};

export default ModalMyPantry;
