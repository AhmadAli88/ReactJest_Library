 import { render, screen } from '@testing-library/react';
 import App from './App';

test('test for react component', ()=>{
  render(<App />);
  const h1Element = screen.getByText(/vite/i); // Use regex for a case-insensitive match
  const text = screen.getByText(/Ahmad/i);
  const title= screen.getByTitle(/nature image/i)
  expect(h1Element).toBeInTheDocument();
  expect(title).toBeInTheDocument();
  expect(text).toBeInTheDocument();
})

// import React from 'react';
// import { render, screen } from '@testing-library/react';
// import App from './App';

// test('renders learn react link', () => {
//   render(<App />);
//   const linkElement = screen.getByText(/Ahmad is testing jest/i);
//   expect(linkElement).toBeInTheDocument();
// });