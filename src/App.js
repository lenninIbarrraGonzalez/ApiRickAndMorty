import React from 'react';
import logo from './logo.png';
import './App.css';
// import data from './data.json';


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
                <div className="card">
                  <img
                    src={character.image}
                    className="card-img-top"
                    alt="..."
                  />
                  <div className="card-body">
                    <h5 className="card-title">{character.name}</h5>
                    <p className="card-text">
                      Status: {character.status} <br />
                      Species: {character.species} <br />
                      Gender: {character.gender}
                    </p>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    );
  }
}

export default App;
