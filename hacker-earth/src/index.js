import React from 'react';
import { render } from "react-dom";
import './index.css';
import App from './App';
import './scss/hacker.scss';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import dataReducer from './redux/reducers/reducer';

const store = createStore(dataReducer, applyMiddleware(thunk));

render(
  <Provider store={store}>
    <App />
  </Provider>
  ,
  document.getElementById("root")
);
