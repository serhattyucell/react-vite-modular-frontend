import ReactDOM from 'react-dom/client';
import React from 'react';
import '@/common/styles/global.css';
import { AppProviders } from '@/app/providers/app-providers';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <AppProviders />
  </React.StrictMode>,
);
