import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';


// 26-06-2026 Hooks
import UseStateFirst from './Hooks/Use_States/First/UseStateFirst';
import UseStateSecond from './Hooks/Use_States/Second/UseStateSecond';
import UseEffectFirst from './Hooks/Use_Effects/First/UseEffectFirst';
import UseEffectSecond from './Hooks/Use_Effects/Second/UseEffectSecond';


//27-06-2026 Form
import FormFirst from './Forms/First/FormFirst';
import FormSecond from './Forms/Second/FormSecond';
import FormThird from './Forms/Third/FormThird';


//28-06-2026 Routing
import RouterFirst from './Router/First/RouterFirst';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>


    <RouterFirst />

    {/* 27-06-2026 Form */}

    {/* <FormThird /> */}

    {/* <FormSecond /> */}

    {/* <FormFirst /> */}


    {/* 26-06-2026 Hooks */}

    {/* <UseEffectSecond /> */}

    {/* <UseEffectFirst /> */}

    {/* <UseStateSecond /> */}

    {/* <UseStateFirst /> */}

    {/* <App /> */}
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
