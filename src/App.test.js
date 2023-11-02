import { render, fireEvent } from '@testing-library/react';
import App from './App';

test('renders input and submit button', () => {
  const { getByRole } = render(<App />);
  const input = getByRole('textbox');
  const button = getByRole('button');

  expect(input).toBeInTheDocument();
  expect(button).toBeInTheDocument();
});

test('updates input value on change', () => {
  const { getByRole } = render(<App />);
  const input = getByRole('textbox');

  fireEvent.change(input, { target: { value: 'test' } });

  expect(input.value).toBe('test');
});
