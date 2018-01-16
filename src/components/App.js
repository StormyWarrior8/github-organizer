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
            'repo1', 'repo2'
          ],
          category: 'swift',
          description: 'Here you find all the swift libraries...'
        },
        {
          repos: [
            'repo11', 'repo22'
          ],
          category: 'react',
          description: 'Here you find all the react libraries...'
        }
      ]
    }
    this.addCard = this.addCard.bind(this)
  }


  onlyUnique(value, index, self) {
    return self.indexOf(value) === index;
  }
  addCard(card) {

    var cards = this.state.cards
    //check if the array of categories contain the new category entered by the user
    var filteredArray = cards.filter(e => e.category == card.category.toLowerCase())
    var doesCategoryExist = filteredArray.length ? true : false
    if (!doesCategoryExist) {
      cards.push(card);
      console.log("creating a new category");
    }
    else {
      console.log("category exists, updating repo array");
      for (var i = 0; i < cards.length; i++) {
        if (cards[i].category == card.category.toLowerCase()) {
            var repos = cards[i].repos;
            repos.push(card.repos[0])
            cards[i].repos = repos;
        }
      }
    }

    this.setState({cards: cards})
    // debugger;
    console.log(cards);
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
