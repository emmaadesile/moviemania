import React from 'react';
import { render } from 'react-testing-library';
import Navigation from '../components/Navigation';

describe('App Navigation', () => {
  test('renders the navigation component', () => {
    const { getByText } = render(<Navigation />);
    const navItem = getByText('VIDEOS');
    expect(navItem).toBeDefined()
  });
});
