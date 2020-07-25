import React from 'react';
import logo from './logo.png';
import './App.css';
// import data from './data.json';
import Card from '../src/components/Card';
import Loading from '../src/components/Loading';


class App extends React.Component {
  state = {
    loading: true,
    data: {
      info: [],
      results: [],
    },
    nextPage: 1,
  };

  componentDidMount() {
    this.fetchCharacters();
  }

  fetchCharacters = async () => {
    this.setState({
      loading: true,
      error: null,
    });

    try {
      const response = await fetch(
        `https://rickandmortyapi.com/api/character/?page=${this.state.nextPage}`
      );
      const data = await response.json();
      // console.log(data);
      this.setState({
        loading: false,
        data: {
          info: data.info,
          results: [].concat(this.state.data.results, data.results),
        },
        nextPage: this.state.nextPage + 1,
      });
    } catch (error) {
      this.setState({
        loading: false,
        error: error,
      });
    }
  };

  render() {
    if(this.state.error){
      return `Error: ${this.state.error.message}`;
    }

    return (
      <div className="container">
        <div className="App">
          <img src={logo} alt="" className="img-fluid mx-auto d-block" />

          <ul className="row">
            {console.log(this.state.data)}
            {this.state.data.results.map((character) => (
              <li key={character.id}>
                <Card character={character} />
              </li>
            ))}
          </ul>
          {this.state.loading && <Loading />}
          <button
            type="button"
            className="btn btn-primary btn-lg btn-block"
            onClick={() => this.fetchCharacters()}
          >
            Cargar más personajes
          </button>
        </div>
      </div>
    );
  }
}

export default App;
