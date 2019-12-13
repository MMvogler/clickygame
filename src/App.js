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

  gameOver = () => {
    console.log(this.state.score)
    if (this.state.score > this.state.highscore){
      this.setState({highscore: this.state.score});
    }

    this.setState({score:0})

    cards.forEach(element => {
      element.count = 0;
    });
    
    // console.log("high score here", this.state.highscore);

  }
  

clickCount = id => {
  this.state.cards.find((o, i) => {
    if (o.id === id) {
      if(cards[i].count === 0){
        cards[i].count = cards[i].count + 1;
        this.setState({score : this.state.score + 1});
        this.state.cards.sort(() => Math.random() - 0.5)
        return true; 
      } else {
        this.gameOver();
        console.log("gameOver");
      }
    }
  });
}

  render() {
    return (
      <Wrapper>
        <Title
        score={this.state.score}
        highscore={this.state.highscore}
        >Simpsons Clicky Game!</Title>
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
