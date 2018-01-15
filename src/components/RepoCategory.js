import React, { Component } from 'react'





class Repository extends Component {
  render() {
    return (
      <div>
          <li className="list-group-item">{this.props.repos}</li>
      </div>
    )
  }
}


class RepoCategory extends Component {

  handleListOfRepos() {
    var cards = this.props.cards
    var categoryName = this.props.categoryName
    var filteredByCategory = cards.filter(e => e.category == categoryName)
    return filteredByCategory
  }

  getRepos() {
    var repos = this.handleListOfRepos();
    return repos.map((repo,i) =>
      <Repository key={i} {...repo}/>
    )
  }


  render() {
    return (
      <div className="col-4" style={{marginBottom: '10px'}}>
        <div className="card" style={{width: '18rem'}}>
          <img className="card-img-top" src="http://via.placeholder.com/150x150" alt="Card image cap" />
          <div className="card-body">
            <h5 className="card-title">{this.props.categoryName}</h5>
            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
          </div>
          <div>
            <ul className="list-group list-group-flush">
              {this.getRepos()}
            </ul>
          </div>
          <div className="card-body">
            <a href="#" className="card-link">Card link</a>
            <a href="#" className="card-link">Another link</a>
          </div>
        </div>
      </div>
    )
  }
}

export default RepoCategory
