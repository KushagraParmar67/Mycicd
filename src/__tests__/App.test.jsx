import { render, screen } from '@testing-library/react';
import App from '../App';

describe('App Component', () => {
  it('should render the application correctly', () => {
    render(<App />);
    
    // Replace 'Vite + Reactooooo by kushagra' with the expected text in your App.jsx
    const heading = screen.getByText('Vite + Reactooooo by kushagra');
    expect(heading).toBeInTheDocument();
  });
});
