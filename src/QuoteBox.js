import React, {Component} from 'react';
import quotes from "./quotes"; 

class QuoteBox extends Component {
    render() {

        //set the background-color of the HTML element to the random color that is passsed in as a prop 
        const html = document.documentElement; //html elements
        html.style.backgroundColor = this.props.color;

       
        return (
            <div className="quoteBox">
                <div className="quoteInside">
                    <h1 style={{color: this.props.color}}>{this.props.quote}</h1>
                    <em><h2 style={{color: this.props.color}}>-{this.props.author !== '' ? this.props.author : 'Unknown'}</h2></em>
                </div>
                <button className="quoteButton" onClick={this.props.handleClick}>New Quote</button>
            </div>
        );
    }
}

export default QuoteBox;