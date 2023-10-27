import React from 'react';
import { render, screen } from '@testing-library/react';
import UsersList from './UsersList';

test('renders user list component', () => {
  render(<UsersList />);
  const userList = screen.getByTestId('user-list');
  expect(userList).toBeInTheDocument();
});
