import { Outlet } from 'react-router-dom';
import { appConfig } from '@/config/app/app-config';

export const MainLayout = (): JSX.Element => {
  return (
    <div className="app-shell">
      <header className="app-header">
        <h1>{appConfig.name}</h1>
      </header>
      <main className="app-main">
        <Outlet />
      </main>
    </div>
  );
};
