import React from 'react';
import ReactDOM from "react-dom";
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom';

// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
//   <React.StrictMode>
//     <BrowserRouter>
//     <App />
//     </BrowserRouter>
//   </React.StrictMode>
// );

const rootElement = document.getElementById("root");
ReactDOM.render(<BrowserRouter><App /></BrowserRouter>, rootElement);