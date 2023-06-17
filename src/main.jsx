import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App.jsx';
import { store } from './app/store.js';
import { Provider } from 'react-redux';

ReactDOM.createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <App />
  </Provider>
);
