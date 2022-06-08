import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Dic1 from './component/Dic1';
import Dic2 from './component/Dic2';
import './App.css';
import { Provider } from "react-redux";
import store from "./redux/configStore"; 

function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <BrowserRouter>
          
            <Routes>
              <Route path="/" element={<Dic1 />} />
              <Route path="/Dic2" element={<Dic2 />} />
              
            </Routes>
          
        </BrowserRouter>
       
      </Provider>
      
    </div>
  );
}

export default App;
