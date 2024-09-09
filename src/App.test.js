import { render, screen } from '@testing-library/react';
import App from './App';

test('it should render an outer container with id="drum-machine" that contains all elements', () => {
  // Render the app
  const { container } = render(<App />);

  // Get the container by its id
  const drumMachineContainer = container.querySelector('#drum-machine');

  // Check if the container is in the document
  expect(drumMachineContainer).toBeInTheDocument();
});

test('it should have an element with id="display" within id="drum-machine"', () => {
  const { container } = render(<App />);

  const displayContainer = container.querySelector('#drum-machine #display');

  expect(displayContainer).toBeInTheDocument();
});