import React from "react";
import Navbar from './components/Navbar'
import Jumbotron from './components/Jumbotron'
import Container from './components/Container'
import Card from './components/Card'
import characters from "./characters.json";
import './App.css';

class App extends React.Component {
  // Setting this.state.characters to the characters json array
  state = {
    characters
  };

  render () {
    return (
      <div>
        <Navbar/>
        <Jumbotron>
          <Container>

          </Container>
        </Jumbotron>
        
        <Container>
        {this.state.characters.map(character => (
          <Card
            id={character.id}
            key={character.id}
            name={character.name}
            image={character.image}
          />
        ))}
        </Container>
        
      </div>
    )
  }
}


export default App;
