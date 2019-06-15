import React from 'react';
import { render } from '@testing-library/react';

import 'jest-dom/extend-expect';

import About from './About';

it('renders about text', () => {
  const { getByText } = render(<About />);
  expect(getByText('About Us')).toBeInTheDocument();
});
