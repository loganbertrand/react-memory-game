import React from "react";
import Navbar from './components/Navbar'
import Jumbotron from './components/Jumbotron'
import Container from './components/Container'
import Card from './components/Card'
import characters from "./characters.json";
import './styles/App.css';
import Button from "./components/Button";

class App extends React.Component {
  // Setting this.state.characters to the characters json array
  state = {
    characters,
		score: 0,
		highscore: 0,
    selected: [],
  };

  cardClicked = event => {
    const currentCard = event.target.id
    console.log(currentCard)

    if (this.state.selected.includes(currentCard)===true){
      this.handleShuffleArr(this.state.characters);
      console.log('already been clicked')
    }else{
      this.handleShuffleArr(this.state.characters);
      this.setState({
        selected: this.state.selected.push(currentCard)
      })
      console.log(this.state.selected)
      console.log(this.state.selected.indexOf(currentCard))
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


  }
  
  render () {
    return (
      <div>
        <Navbar/>
        <Jumbotron>
        </Jumbotron>
        
        <Container>
        
        {this.state.characters.map(character =>(
             <Card
              cardClicked={this.cardClicked}
              id={character.id}
              key={character.id}
              name={character.name}
              image={character.image}
              />
        ))}
         <Button onClick={() => this.handleShuffleArr(this.state.cards)}>shuffle</Button>
        </Container>
        
      </div>
    )
  }
}


export default App;
