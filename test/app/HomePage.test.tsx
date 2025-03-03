import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';

import Home from '@/app/page';

describe('HomePage', () => {
  it('should render corretly when it is mounted', () => {
    render(<Home />);
    expect(screen.getByText('Hello')).toBeInTheDocument();
  });
});
