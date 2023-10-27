import React from 'react';
import { render, screen } from '@testing-library/react';
import UserDetails from './UserDetails';

test('renders user details component', () => {
  render(<UserDetails />);
  const userDetails = screen.getByTestId('user-list');
  expect(userDetails).toBeInTheDocument();
});
