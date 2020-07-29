import React from 'react';
import App from '../App';
import { render } from '@testing-library/react';

describe('teste do App', () => {
  it('primeiros testes no componente App', () => {
    const { getByText } = render(<App />);
    expect(getByText(/Desafio Técnico SmarttBot/i)).toBeInTheDocument();
  });
});
