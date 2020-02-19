import React, { Component } from 'react';
import './App.css';
import AddNote from './components/AddNote';
import DisplayNotes from './components/DisplayNotes';
import 'semantic-ui-css/semantic.min.css';
import { Container, Divider } from 'semantic-ui-react';
import axios from 'axios';

class App extends Component {

  state = {
    notes: [],
  }

  async componentDidMount() {
    const url = 'http://localhost:3001/notes';

    const response = await axios.get(url);
    console.log(response);
    if (response.status === 200) {
      this.setState({
        notes: response.data,
      });
    }
  }





  handleAddNote = async (newNote) => {
    const url = 'http://localhost:3001/notes';
    const payload = {
      ...newNote,
      createAdd: new Date(),
    }
    const response = await axios.post(url, payload);
    if (response.status === 200 || response.status === 201) {
      this.setState({
        notes: this.state.notes.concat(response.data),
      });
    }
  }



  render() {
    return (
      <Container>
        <AddNote addNote={this.handleAddNote} />
        <Divider />
        <DisplayNotes notes={this.state.notes} />
      </Container>
    );
  }
}

export default App;
