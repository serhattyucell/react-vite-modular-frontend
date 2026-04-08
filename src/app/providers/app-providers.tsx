import { Provider } from 'react-redux';
import { store } from '@/app/store/store';
import { AppRouter } from '@/app/router/app-router';

export const AppProviders = (): JSX.Element => {
  return (
    <Provider store={store}>
      <AppRouter />
    </Provider>
  );
};
