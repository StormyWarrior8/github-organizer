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
          repos: [
            {
              repoName: 'Repo 1 - category mobile'
            },
            {
              repoName: 'Repo 2 - category mobile'
            }
          ],
          category: 'swift'
        },
        {
          repos: [
            {
              repoName: 'Repo 1 - category mobile'
            },
            {
              repoName: 'Repo 2 - category mobile'
            }
          ],
          category: 'react'
        }
      ]
    }
    this.addCard = this.addCard.bind(this)
  }

  addCard(card) {
    // this.setState(prev=>({
    //   cards: prev.cards.concat(card)
    // }))

    //check if the array of categories contain the new category entered by the user
    var filteredArray = this.state.cards.filter(e => e.category == card.category.toLowerCase())
    //if true, category exists, else category doesn't exist
    var doesCategoryExist = filteredArray.length ? true : false
    if (!doesCategoryExist) {
      console.log("we are creating a new category....");
    }
    else {
      console.log("category exists, we are appending the repo to the existing category...");
    }

    console.log(card.category);
  }


  render() {
    return (
      <div style={{margin: '10px'}}>
        <AddRepoForm onSubmit={this.addCard} />
        <RepoCategoryList cards={this.state.cards} />
      </div>
    );
  }
}

export default App;
