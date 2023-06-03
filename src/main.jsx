import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx';
import { store } from './store';
import { Provider } from 'react-redux';
import i18n from './translation/i18n';
import { I18nextProvider } from 'react-i18next';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <I18nextProvider i18n={i18n}>
        <App/>
      </I18nextProvider>
    </Provider>
  </React.StrictMode>,
)
