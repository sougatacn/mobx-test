import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import App from './App';
import Edit from './Edit';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import Parent from './Parent';
import reportWebVitals from './reportWebVitals';
import observableTodoStore from './store/Store';
export const StoreContext = React.createContext();
let parent=<StoreContext.Provider value={observableTodoStore}>
<Parent />
</StoreContext.Provider >;

ReactDOM.render(
  <BrowserRouter> 
  <Routes>
      <Route path="/" element={parent} />
      <Route path="edit" element={<Edit />} />
 
    </Routes>

  </BrowserRouter>

, document.getElementById('root'));
 
reportWebVitals();