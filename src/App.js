import React from 'react';
import logo from './logo.png';
import './App.css';
// import data from './data.json';
import Card from '../src/components/Card';


class App extends React.Component {
  state = {
    data: {
      info:[],
      results: [],
    },
  };

  componentDidMount() {
    this.fetchCharacters();
  }

  fetchCharacters = async () => {
    const response = await fetch("https://rickandmortyapi.com/api/character/");
    const data = await response.json();
    // console.log(data);
    this.setState({
      data: {
        info: data.info,
        results: data.results,
      }
    });
  };
  
  render() {
    return (
      <div className="container">
        <div className="App">
          <img src={logo} alt="" className="img-fluid mx-auto d-block" />

          <ul className="row">
            {console.log(this.state.data)}
            {this.state.data.results.map((character) => (
              <li key={character.id}>
                <Card character={character}/>
              </li>
            ))}
          </ul>
        </div>
      </div>
    );
  }
}

export default App;
