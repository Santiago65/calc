import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
      <div class="redes">
        <a href="https://www.facebook.com/santiagoroberto.carreira"target="_blank" rel="noreferrer"><i class="fab fa-facebook"></i></a>
        <a href="https://www.linkedin.com/in/santiago-carreira-99a12522a/"target="_blank" rel="noreferrer"><i class="fab fa-linkedin"></i></a>
        <a href="https://twitter.com/SantiagoCarrei6"target="_blank" rel="noreferrer"><i class="fab fa-twitter"></i></a>
        <a href="https://github.com/Santiago65"target="_blank" rel="noreferrer"><i class="fab fa-github"></i></a>
        
    </div>
    <h1> Calculadora Científica</h1>
    <App />
  </React.StrictMode>
  
);
