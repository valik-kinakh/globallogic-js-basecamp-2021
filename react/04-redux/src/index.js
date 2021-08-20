import { StrictMode } from 'react';
import ReactDOM from 'react-dom';
import { Provider } from "react-redux";
import store from './components/Store/redux/store';

import App from './components/App';
import Root from './components/Root';
import './styles.css';

const rootElement = document.getElementById('root');
ReactDOM.render(
  <StrictMode>
    <Root>
      <Provider store={store}>
      <App />
      </Provider>
    </Root>
  </StrictMode>,
  rootElement
);
