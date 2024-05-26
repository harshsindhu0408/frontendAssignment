import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import Navbar from "./components/common/Navbar.jsx";
import store from './redux/store.js'
import { Provider } from 'react-redux';

import { BrowserRouter } from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <div className="flex flex-col min-h-screen">
          <Navbar />
          <div className="flex-grow bg-white">
            <App />
          </div>
        </div>
      </BrowserRouter>
    </Provider>
  </React.StrictMode>
);
