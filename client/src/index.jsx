import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';
import Navigation from './components/Navigation.jsx';
import Search from './components/Search.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      items: []
    }
  }

  render () {
    return (<div>
      <h1>Help My Neighbor</h1>
      <Navigation />
      <h4 id='title'> Search helpers/seekser near you </h4>
      <Search />
    </div>)
  }
}

ReactDOM.render(<App />, document.getElementById('app'));