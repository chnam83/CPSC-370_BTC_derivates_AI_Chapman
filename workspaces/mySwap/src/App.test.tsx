import React from 'react';
import { render, screen } from '@testing-library/react';
import { compose } from 'ramda';
import App from './App';

test('renders learn react link', () => {
  const renderAppAndCheckHeader = compose(
    (headerElement: any) => expect(headerElement).toBeInTheDocument(),
    () => screen.getByText(/MySwap/i),
    () => render(<App />)
  );

  renderAppAndCheckHeader();
});
import React from 'react';
import { render } from '@testing-library/react';
import App from './App';

test('renders without crashing', () => {
  const { getByText } = render(<App />);
  expect(getByText(/Hello, world!/i)).toBeInTheDocument();
});
import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders submit button', () => {
  render(<App />);
  const linkElement = screen.getByText(/submit/i);
  expect(linkElement).toBeInTheDocument();
});
