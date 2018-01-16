import React, { Component } from 'react'
import RepoCategory from './RepoCategory'

class RepoCategoryList extends Component {
  handleList() {
    var cards = this.props.cards;
    // var categories = cards.map(e => e.category);
    // var uniqueCategories = categories.filter((value, index, self) => self.indexOf(value) === index)
    //
    // console.log(cards);
    //
    // return uniqueCategories.map((category, index) => {
    //   var filteredByCategory = cards.filter(e => e.category == category)
    //   return <RepoCategory key={index}
    //                        categoryName={category}
    //                        description={cards[index].description}
    //                        repos={filteredByCategory}/>
    // })


    return cards.map((card,index)=>(
      <RepoCategory key={index}
                    {...card} />
    ))



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
