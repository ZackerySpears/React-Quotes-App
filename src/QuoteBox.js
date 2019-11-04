import React, {Component} from 'react';
import quotes from "./quotes"; 

class QuoteBox extends Component {
    render() {
       
        return (
            <div>
                <h1>{this.props.quote} </h1>
                <h1>{this.props.author}</h1>
                <button onClick={this.props.handleClick}>New Quote</button>
            </div>
        );
    }
}

export default QuoteBox;