import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { MsalProvider } from '@azure/msal-react';
import { PublicClientApplication } from '@azure/msal-browser';
import authConfig from './authConfig';

const msalInstance = new PublicClientApplication(authConfig);
console.log("msalConfig.auth.clientId");
console.log(authConfig);
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <MsalProvider instance={msalInstance}>
      <App />
    </MsalProvider>
  </React.StrictMode>
);

