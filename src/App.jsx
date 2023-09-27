import React, { useState } from 'react';
import quotes from './assets/quotes.json';    // array with quotes

import Quote from './Quote';
import NewQuote from './NewQuote';
import PostQuote from './PostQuote';

import './App.css';

function App() {  
  const getRandomQuote = () => {
    return quotes[Math.floor(Math.random() * quotes.length)];
  };

  const getRandomColor = () => {
    const redColor = Math.floor(Math.random() * 128);
    const greenColor = Math.floor(Math.random() * 128);
    const blueColor = Math.floor(Math.random() * 128);

    return `rgb(${redColor}, ${greenColor}, ${blueColor})`;
  }

  const transition = 'all 1.5s';    // transition property of css - makes the colour change slower

  const [quote, setQuote] = useState(getRandomQuote());     
  const [color, setColor] = useState(getRandomColor());

  const handleClick = () => {
    setQuote(getRandomQuote());
    setColor(getRandomColor());
  };

  return (
    <div className='container' style={{backgroundColor: color, transition}}>
      <div id="quote-box" style={{color: color, transition}}>
        <Quote quote={quote.quote} author={quote.author}/>
        <div className='buttons'>
          <PostQuote bgColor={color} transition={transition}/>
          <NewQuote onClick={handleClick} bgColor={color} transition={transition}/>
        </div>
      </div>
    </div>
  );
}

export default App;
