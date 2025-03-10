import React, { useEffect, useRef } from 'react';
import logo from './logo.svg';
import './App.css';


import '@learnship/my-web-components/index';
import { CardComponent } from '@learnship/my-web-components';

function App() {
  let card: any = new CardComponent();
  console.log(card);

  const cardRef = useRef(null);

  useEffect(() => {
    const cardElement = cardRef.current;
    
    if (cardElement) {
      cardElement.addEventListener("cardClick", (event: any) => {
        console.log("Card Clicked in React:", event.detail);
      });
    }

    return () => {
      if (cardElement) {
        cardElement.removeEventListener("cardClick", () => {});
      }
    };
  }, []);

  return (
    <div className="App">
      <ls-header></ls-header>
      <ls-card title='React Card with ref' ref={cardRef}></ls-card>
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
