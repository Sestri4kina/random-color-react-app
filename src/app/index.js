/**
 * Created by Sestri4kina on 26.12.2016.
 */
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from "react-redux";

import Random from './containers/app';
import store from "./store";

ReactDOM.render(
  <Provider store={store}>
    <Random />
  </Provider>,
    document.getElementById('app')
);
