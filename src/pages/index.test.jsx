import { render, screen } from '@testing-library/react';
import React from 'react';

import HomePage from './index';

describe('Home page', () => {
  it('renders correctly', () => {
    render(<HomePage />);
    expect(screen.getByText('Hello world!')).toBeInTheDocument();
  });
});
