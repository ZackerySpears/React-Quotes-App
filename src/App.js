import React, {Component} from 'react';
import './App.css';
import QuoteBox from './QuoteBox';
import quotes from './quotes';

class App extends Component {
  //Setting up the constructor function so we can set our default state
  constructor(props) {
    super(props);
    //Set up the first quote and author as our default state
    this.state = {
      quote: quotes[0].quote, author:quotes[0].author
    }
  }

  //Create a Function called getRandomQuote that returns a random quote from the array of quotes. Hint: you 'll need to generate a random number between 0 and 1 less than of the array 

  getRandomQuote() {
    const randomQuoteIndex = Math.floor(Math.random() * quotes.length);
    return quotes[randomQuoteIndex];
  } 

  //Function that will be called when we quote button on the QuoteBox component is pressed

  handleClick = () => {
    //Generate a random quote 
    const randomQuote = this.getRandomQuote();
    //Update our state with information from that random quote
    this.setState({
      quote: randomQuote.quote, author: randomQuote.author
    })
  }

  render() {
    return (
      <div>
        <QuoteBox 
        quote={this.state.quote}
        author={this.state.author}
        handleClick={this.handleClick}
         />
      </div>
    );
  }
}

export default App;
