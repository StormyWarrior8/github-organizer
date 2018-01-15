import React, { Component } from 'react'
import RepoCategory from './RepoCategory'

class RepoCategoryList extends Component {
  handleList() {
    return this.props.cards.map((card, i) =>
        <RepoCategory key={i} {...card} />
      )
  }
  render() {
    return (
      <div>
        {this.handleList()}
      </div>
    )
  }
}

export default RepoCategoryList
