import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { Provider } from 'react-redux';
import rootReducer from './reducers/reducer';
import {applyMiddleware, createStore} from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
// import {loadEmployees} from './actions/action-creators';
// import {GET_EMPLOYEES} from './actions/actions-types';

// const store = createStore(rootReducer);
const store  = createStore(rootReducer,composeWithDevTools(applyMiddleware(thunk)));


// let sampledata = [
//   {LocationId:'MUMB',Name : 'ABC',Age:30,Department:'FUNC',Designation:'Something',Location:'Mumbai',EmpCode:'E101'},
//   {LocationId:'PUNE',Name : 'DEF',Age:31,Department:'RFCA',Designation:'else',Location:'Pune',EmpCode:'E102'}
// ]
// store.dispatch(loadEmployees(sampledata));

console.log(store.getState());

ReactDOM.render(
  <Provider store={store}>
  <React.StrictMode>
    <App />
  </React.StrictMode>
  </Provider>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
