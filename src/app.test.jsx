import { describe, expect, it } from 'vitest';  
import { render, screen } from '@testing-library/react';  
import '@testing-library/jest-dom'; 
import App from './App';

describe('App', () => {
  it('should render while authenticating', () => {
    render(<App />);
    
    expect(screen.getByText('Vite + Reactooooo by kushagra')).toBeInTheDocument();
  });
});
