import React from 'react';
import { render, waitFor, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import PopularBooksList from '../../src/component/DashBoard/PopularNow';

describe('PopularBooksList Component', () => {
  test('renders loading state initially', async () => {
    render(<PopularBooksList />);

    // Ensure loading state is rendered initially
    expect(screen.getByTestId('loading')).toBeInTheDocument();

    // Wait for loading state to disappear
    await waitFor(() => {
      expect(screen.queryByTestId('loading')).toBeNull();
    });
  });

  test('renders popular books list', async () => {
    // Mock popular books data
    const mockPopularBooks = [
      { bookId: 1, title: 'Book 1', rating: 4.5 },
      { bookId: 2, title: 'Book 2', rating: 4.0 },
      // Add more mock data as needed
    ];

    // Mock fetch function to return the mock data
    global.fetch = jest.fn().mockResolvedValueOnce({
      ok: true,
      json: () => Promise.resolve(mockPopularBooks),
    });

    render(<PopularBooksList />);

    // Wait for popular books to be loaded
    await waitFor(() => {
      expect(screen.getByText('Book 1')).toBeInTheDocument();
      expect(screen.getByText('Book 2')).toBeInTheDocument();
      // Add more assertions for other books as needed
    });
  });

  // Add more test cases as needed
});
