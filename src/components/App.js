import React, { Component } from 'react';
import '../App.css';
import AddRepoForm from './AddRepoForm'
import RepoCategoryList from './RepoCategoryList'

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      cards: [
        // {
        //   repoName: 'My Repo',
        //   categoryName: 'Mobile'
        // },
        // {
        //   repoName: 'My Repo 2',
        //   categoryName: 'React'
        // }
      ]
    }
    this.addCard = this.addCard.bind(this)
  }

  addCard(card) {
    console.log("this is card info!");
    console.log(card);
    this.setState(prev=>({
      cards: prev.cards.concat(card)
    }))
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
