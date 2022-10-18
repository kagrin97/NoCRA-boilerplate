import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import Home from './Home';
import { BrowserRouter } from 'react-router-dom';

describe('<Home /> 검사', () => {
  test('버튼이 존재하는지', () => {
    render(<Home />, { wrapper: BrowserRouter });
    const Button = screen.getAllByRole('button');
    expect(...Button).toBeInTheDocument();
  });
});
