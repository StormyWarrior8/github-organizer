import React, { Component } from 'react'


const Repository = () => (
  <ul className="list-group list-group-flush">
    <li className="list-group-item">My Repo 1</li>
    <li className="list-group-item">My Repo 2</li>
    <li className="list-group-item">My Repo 3</li>
  </ul>
)

class RepoCategory extends Component {
  render() {
    return (
      <div className="col-4" style={{marginBottom: '10px'}}>
        <div className="card" style={{width: '18rem'}}>
          <img className="card-img-top" src="http://via.placeholder.com/150x150" alt="Card image cap" />
          <div className="card-body">
            <h5 className="card-title">{this.props.categoryName}</h5>
            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
          </div>
          <Repository />
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
