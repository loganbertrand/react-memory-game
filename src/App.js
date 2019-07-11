import React from "react";
import Navbar from './components/Navbar'
import Jumbotron from './components/Jumbotron'
import Container from './components/Container'
import Card from './components/Card'
import characters from "./characters.json";
import './styles/App.css';
//import Button from "./components/Button";

class App extends React.Component {
  // Setting this.state.characters to the characters json array
  state = {
    characters,
		score: 0,
		highscore: 0,
    status: "",
    cards: characters
  };
  
  handleShuffleArr(arr) {
		let i = arr.length - 1;
		for (; i > 0; i--) {
			const j = Math.floor(Math.random() * (i + 1));
			const temp = arr[i];
			arr[i] = arr[j];
			arr[j] = temp;
		}
    return this.setState({
      cards: arr
    });
  }
  
  render () {
    return (
      <div>
        <Navbar/>
        <Jumbotron>
        </Jumbotron>
        
        <Container>
        
        {this.state.cards.map(character =>{
          return (
           
              <Card
              onClick={() => this.handleShuffleArr(this.state.cards)}
              id={character.id}
              key={character.id}
              name={character.name}
              image={character.image}
              />
         
            
          )
        })}
         
        </Container>
        
      </div>
    )
  }
}


export default App;
