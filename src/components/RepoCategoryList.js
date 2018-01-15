import React, { Component } from 'react'
import RepoCategory from './RepoCategory'

class RepoCategoryList extends Component {
  handleList() {
    var cards = this.props.cards;
    var categories = cards.map(e => e.category);
    var uniqueCategories = categories.filter((value, index, self) => self.indexOf(value) === index)

    return uniqueCategories.map((category, index) => {
      var filteredByCategory = cards.filter(e => e.category == category)
      console.log(filteredByCategory);
      return <RepoCategory key={index} categoryName={category} cards={filteredByCategory}/>
    })
  }
  render() {
    return (
      <div className="row">
        {this.handleList()}
      </div>
    )
  }
}

export default RepoCategoryList
