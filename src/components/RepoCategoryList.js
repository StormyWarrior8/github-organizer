import React, { Component } from 'react'
import RepoCategory from './RepoCategory'

class RepoCategoryList extends Component {
  handleList() {


    var categories = this.props.cards.map(e => e.category);
    var uniqueCategories = categories.filter((value, index, self) => self.indexOf(value) === index)


    // var result;
    // for (var i = 0; i < uniqueCategories.length; i++) {
    //   result = <RepoCategory key={i} categoryName={uniqueCategories[i]} />
    // }
    //
    //
    //
    // return result

    return uniqueCategories.map((category, index) =>
        <RepoCategory key={index} categoryName={category} />
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
