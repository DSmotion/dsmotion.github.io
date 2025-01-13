// src/App.js
import React from 'react';
import './App.css';
import Tiles from './Tiles';
import Shapes from './Shapes'; // Импортируем новый компонент для шейпов

function App() {
  return (
    <div className="App">
      {/* Контейнер с логотипом сверху */}
      <header className="header-container">
        <div className="logo">
          <img src={require('./assets/logo/logo.png')} alt="Logo" style={{ width: '250px', height: 'auto' }} />
        </div>

        {/* Кнопка для связи в Telegram */}
        <a href="https://t.me/Meeetix" target="_blank" rel="noopener noreferrer" className="telegram-button">
          Связаться
        </a>
      </header>

      {/* Добавляем компонент Shapes, который рисует шейпы на фоне */}
      <Shapes /> 

      {/* Контейнер с текстом */}
      <div className="motion-design-portfolio">
        <h1>
          motion
          <br />
          design
          <br />
          <span className="highlight">portfolio</span>
        </h1>
      </div>

      <Tiles />
    </div>
  );
}

export default App;
