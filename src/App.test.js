import { render } from '@testing-library/react';
import App from './App';

test('renders learn react link', () => {
  const app = render(<App />);
  const linkElement = app.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();

  const spreadApp = {...app}
  const linkElement2 = spreadApp.getByText(/learn react/i);
  expect(linkElement2).toBeInTheDocument();
});
