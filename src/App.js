import React from "react";
import Navbar from './components/Navbar'
import Jumbotron from './components/Jumbotron'
import Container from './components/Container'
import Card from './components/Card'
import characters from "./characters.json";
import './styles/App.css';

class App extends React.Component {
  // Setting this.state.characters to the characters json array
  state = {
    characters,
		score: 0,
		highscore: 0,
    selected: [],
    status: ""
  };

  cardClicked = event => {
    const currentCard = event.target.id
    console.log(currentCard)

    const selectedArr = this.state.selected
    const alreadyClicked = selectedArr.indexOf(currentCard);

    if (alreadyClicked >= 0){
      this.handleShuffleArr(this.state.characters);
      console.log('already been clicked')
      this.resetGame()
    }else{
      this.handleShuffleArr(this.state.characters);
      this.setState({
        selected: this.state.selected.concat(currentCard),
        score: this.state.score + 1,
        status: "Correct! Keep Going, You Got This!"
      })
      console.log(this.state.selected)
      console.log(this.state.score)
    }
    

  }
  
  handleShuffleArr = (arr) => {
		let i = arr.length - 1;
		for (; i > 0; i--) {
			const j = Math.floor(Math.random() * (i + 1));
			const temp = arr[i];
			arr[i] = arr[j];
			arr[j] = temp;
		}
    return this.setState({
      characters: arr
    });
  }

  resetGame = () => {
    if(this.state.score > this.state.highscore){
      this.setState({
        highscore: this.state.score
      })
    }
    this.setState({
      selected: [],
      score: 0,
      status:"Game Over! Try Again!"
    })
  }
  
  render () {
    return (
      <div>
        <Navbar
        score={this.state.score}
        highScore={this.state.highscore}
        status={this.state.status}
        />
          <Jumbotron/>
          <Container>
            <div className="row">
              {this.state.characters.map(character =>(
              <Card
                cardClicked={this.cardClicked}
                id={character.id}
                key={character.id}
                name={character.name}
                image={character.image}
                />
              ))}
            </div>
          </Container>
        
      </div>
    )
  }
}


export default App;
