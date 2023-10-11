import React from 'react'
import ReactDOM from 'react-dom/client'
import "bootstrap/dist/css/bootstrap.min.css"
import { initializeApp } from "firebase/app";
import "bootstrap-icons/font/bootstrap-icons.css"
import {BrowserRouter} from "react-router-dom"
import App from './App.jsx'
import './index.css'

const firebaseConfig = {
  apiKey: "AIzaSyCaEjqx_6NIrvtN7ARM29_T5moxMkHS6gk",
  authDomain: "wiccat-store.firebaseapp.com",
  projectId: "wiccat-store",
  storageBucket: "wiccat-store.appspot.com",
  messagingSenderId: "201873289509",
  appId: "1:201873289509:web:1d348736ceabc66c8eeacc"
};

initializeApp(firebaseConfig);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
    <App />
    </BrowserRouter>
  </React.StrictMode>,
)
