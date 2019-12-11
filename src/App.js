import React, { Component } from 'react';
import cards from './cards.json';
import Wrapper from './components/Wrapper';
import Title from './components/Title';
import Cards from './components/Cards';

class App extends Component {
  // Setting this.state.cards to the cards.json array
  state = {
    cards,
    score: 0,
    highscore: 0
  };




clickCount = id => {
  this.state.cards.find((o, i) => {
    if (o.id === id) {
      if(cards[i].count === 0){
        cards[i].count = cards[i].count + 1;
        this.setState({score : this.state.score + 1}, function(){
          console.log(this.state.score);
        });
        this.state.cards.sort(() => Math.random() - 0.5)
        return true; 
      } else {
        this.gameOver();
      }
    }
  });
}

  render() {
    return (
      <Wrapper>
        <Title>Simpsons Clicky Game!</Title>
        {this.state.cards.map(card => (
          <Cards
            clickCount={this.clickCount}
            id={card.id}
            key={card.id}
            image={card.image}
          />
        ))}
      </Wrapper>
    );
  }
}


export default App;
