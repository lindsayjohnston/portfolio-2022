/**
 * @jest-environment jsdom
 */

import { cleanup, fireEvent, render } from '@testing-library/react';
import App from '../src/App';
import { BrowserRouter } from 'react-router-dom';

// Note: running cleanup afterEach is done automatically for you in @testing-library/react@9.0.0 or higher
// unmount and cleanup DOM after the test is finished.
afterEach(cleanup);

it('heading shows up', () => {
  const { getByTestId } = render(
    <BrowserRouter>
      <App />
    </BrowserRouter>
  );

  expect(getByTestId(/heading/i)).toHaveTextContent("lindsay k. johnston")

});