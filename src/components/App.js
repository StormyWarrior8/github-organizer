import React, { Component } from 'react';
import '../App.css';
import AddRepoForm from './AddRepoForm'
import RepoCategoryList from './RepoCategoryList'

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      cards: [
        {
          repoName: 'My Repo',
          categoryName: 'Mobile'
        },
        {
          repoName: 'My Repo 2',
          categoryName: 'React'
        }
      ]
    }
  }

  addCard(card) {
    console.log("hi....");
    console.log(card);
  }


  render() {
    return (
      <div style={{margin: '10px'}}>
        <AddRepoForm onSubmit={this.addCard}/>
        <RepoCategoryList cards={this.state.cards} />
      </div>
    );
  }
}

export default App;
