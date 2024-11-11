import { render, screen, fireEvent } from '@testing-library/react';
import App from './App';

const sum = (x: number, y: number) => {
  return x + y;
}

describe('App Component', () => {
    it('should sum correctly', () => {
      expect(sum(4, 4)).toBe(8);
    });

    it('should render App with hello message', () => {
      render(<App />);

      screen.getByText('Hello world!');
    });

    it('should change text on button click', () => {
      render(<App />);

      screen.getByText('Lets learn more about testing in React');

      const btn = screen.getByText('Change message');

      fireEvent.click(btn);

      screen.getByText('New Message');

      const oldMessage = screen.queryByText('Lets learn more about testing in React');

      expect(oldMessage).toBeNull();

      // Use NOT to change what it's expected. Work's like a !==
      // expect(oldMessage).not.toBeInTheDocument(); 
    });
})

export default {};