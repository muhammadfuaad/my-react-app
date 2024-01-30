import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from './App.jsx'
import TodosApp from './components/TodosApp.jsx';
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />}>
      <Route path="/todos" element={<TodosApp />} />
    
      </Route>
    </Routes>
  </BrowserRouter>
)
