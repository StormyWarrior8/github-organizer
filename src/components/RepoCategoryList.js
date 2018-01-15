import React, { Component } from 'react'
import RepoCategory from './RepoCategory'

class RepoCategoryList extends Component {
  handleList() {

    var categories = this.props.cards.map(e => e.category);
    var uniqueCategories = categories.filter((value, index, self) => self.indexOf(value) === index)

    return uniqueCategories.map((category, index) =>
        <RepoCategory key={index} categoryName={category} cards={this.props.cards}/>
    )
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
