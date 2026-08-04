import { fireEvent, render, screen } from '@testing-library/react';
import App from './App';

test('renders a newly added task', () => {
  render(<App />);

  fireEvent.change(screen.getByPlaceholderText(/please enter the task/i), {
    target: { value: 'Buy milk' },
  });
  fireEvent.change(screen.getByPlaceholderText(/enter description/i), {
    target: { value: 'For breakfast' },
  });
  fireEvent.click(screen.getByRole('button', { name: /add/i }));

  expect(screen.getByText('Buy milk')).toBeInTheDocument();
});
