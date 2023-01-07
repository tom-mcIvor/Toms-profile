import React from 'react';

import { render, waitFor, screen } from '@testing-library/react';
import Weather from '../../../pages/Weather';

test('renders weather data and displays error if fetch fails', async () => {
  // Set up a mock for the fetch function that returns a successful response
  global.fetch = jest.fn().mockImplementation(() =>
    Promise.resolve({
      json: () => Promise.resolve({
        current: {
          temp_c: 22,
          wind_kph: 5,
        },
      }),
    })
  );

  // Render the component
  render(<Weather city="Napier" />);

  // Wait for the data to be fetched and rendered
  await waitFor(() => screen.getByText(/Temperature/));

  // Check that the temperature and wind data are displayed
  expect(screen.getByText(/Temperature/)).toBeInTheDocument();
  expect(screen.getByText(/22/)).toBeInTheDocument();
  expect(screen.getByText(/Wind/)).toBeInTheDocument();
  expect(screen.getByText(/5/)).toBeInTheDocument();

  // Reset the mock fetch function
  global.fetch.mockReset();

  // Set up the mock to return an error
  global.fetch = jest.fn().mockImplementation(() =>
    Promise.resolve({
      json: () => Promise.reject(new Error('API error')),
    })
  );

  // Render the component again
  render(<Weather city="Napier" />);

  // Wait for the error to be displayed
  await waitFor(() => screen.getByText(/Error/));

  // Check that the error message is displayed
  expect(screen.getByText(/Error/)).toBeInTheDocument();
  expect(screen.getByText(/API error/)).toBeInTheDocument();
});