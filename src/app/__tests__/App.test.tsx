import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import App from '../App';

describe('App Component', () => {
  it('renders without crashing', () => {
    render(<App />);
    expect(screen.getByTestId('app-container')).toBeInTheDocument();
  });

  it('renders with theme', () => {
    render(<App />);
    expect(document.body).toHaveAttribute('data-theme');
  });
});
