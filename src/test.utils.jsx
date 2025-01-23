import { render } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { store } from './store';

const customRender = (ui, options) =>
  render(ui, {
    wrapper: ({ children }) => (
      <Provider store={store}>
        <BrowserRouter>{children}</BrowserRouter>
      </Provider>
    ),
    ...options,
  });

export * from '@testing-library/react';
export { customRender as render };
