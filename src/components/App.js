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
          repos: 'repo1',
          category: 'swift'
        },
        {
          repos: 'repo2',
          category: 'react'
        },
        {
          repos: 'repo3',
          category: 'react'
        }
      ]
    }
    this.addCard = this.addCard.bind(this)
  }


  onlyUnique(value, index, self) {
    return self.indexOf(value) === index;
  }
  addCard(card) {
    this.setState(prev=>({
      cards: prev.cards.concat(card)
    }))

    // //check if the array of categories contain the new category entered by the user
    // //var filteredArray = this.state.cards.filter(onlyUnique)
    //
    // var categories = this.state.cards.map(e => e.category);
    // var uniqueCategories = categories.filter((value, index, self) => self.indexOf(value) === index)
    //
    // console.log(uniqueCategories);

  }


  render() {
    return (
      <div style={{margin: '10px'}}>
        <AddRepoForm onSubmit={this.addCard} />
        <RepoCategoryList cards={this.state.cards}/>
      </div>
    );
  }
}

export default App;
