import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';

import ModalMyPantry from '@/components/MyPantry/ModalMyPantry';

describe('ModalMyPantry', () => {
  it('should open the modal when isOpen is true', () => {
    render(
      <ModalMyPantry isOpen={true} onClose={() => {}}>
        Helloooooo
      </ModalMyPantry>,
    );

    expect(screen.getByText('Helloooooo')).toBeInTheDocument();
  });
});
