import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import AppTest from './components/AppTest';
import Navbar from './components/Navbar';
import OpenCamera from './components/OpenCamera';
import { PaymentList } from './components/PaymentList';
import LifeCycle from './components/LifeCycle';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
     <Navbar />
     <OpenCamera />
    <App />
    <AppTest />
    <LifeCycle />
    <PaymentList />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
