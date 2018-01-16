import React, { Component } from 'react'


class Repository extends Component {
  render() {
    return (
      <li className="list-group-item">{this.props.name}</li>
    )
  }
}


class RepoCategory extends Component {

  render() {
    const {repos, category, description} = this.props;
    return (
      <div className="col-4" style={{marginBottom: '10px'}}>
        <div className="card" style={{width: '18rem'}}>
          <img className="card-img-top" src="http://via.placeholder.com/150x150" alt="Card image cap" />
          <div className="card-body">
            <h5 className="card-title">{category}</h5>
            <p className="card-text">{description}</p>
          </div>
          <div>
            <ul className="list-group list-group-flush">
              {<Repository name={repos[0]}/>}
              {<Repository name={repos[1]}/>}
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
