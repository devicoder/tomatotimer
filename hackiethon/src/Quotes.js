import React from 'react';
import './Quotes.css';
import { quote } from './inspirationalQuotes';

function Quotes() {
  return (
    <div className="quotes">
      <p>{quote[Math.floor(Math.random() * quote.length)]}</p>
    </div>
  );
}

export default Quotes;
