import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import {Provider} from "react-redux";
import {createStore} from "redux";

const root = ReactDOM.createRoot(document.getElementById('root'));

let store = createStore((state=0,action)=>{
    switch (action.type) {

        case 'INC':
            let newStateValue = state + action.payload;
            return newStateValue;

        case 'DEC':
            return state - action.payload;

        case 'RES':
            return 0

        default:
            return state;
    }
})


root.render(
  <React.StrictMode>

      <Provider store={store}>
          <App />
      </Provider>

  </React.StrictMode>
);
