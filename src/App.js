import React, { Component } from 'react';
import './App.css';
import AddNote from './components/AddNote';
import 'semantic-ui-css/semantic.min.css';
import { Container } from 'semantic-ui-react';

class App extends Component {

  render() {
    return (
      <Container>
        <AddNote />
      </Container>
    );
  }
}

export default App;
