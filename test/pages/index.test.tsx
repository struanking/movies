import React from 'react';
import { render, fireEvent } from '../testUtils';
import Home from '../../pages/index';

describe('Home page', () => {
  it('clicking button triggers alert', () => {
    const { getByTestId, getByText } = render(<Home />, {});
    fireEvent.click(getByText('Test button'));
    expect(getByTestId('title').textContent).toBe('Welcome to Movie App');
  });
});
