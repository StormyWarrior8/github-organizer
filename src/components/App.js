import React, { Component } from 'react';
import '../App.css';
import AddRepoForm from './AddRepoForm'
import RepoCategory from './RepoCategory'

class App extends Component {
  render() {
    return (
      <div style={{margin: '10px'}}>
        <AddRepoForm />
        <RepoCategory />
      </div>
    );
  }
}

export default App;
