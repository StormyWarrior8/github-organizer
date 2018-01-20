import React, { Component } from 'react'


class Repository extends Component {
  render() {
    const {repo} = this.props
    return (
      <li className="list-group-item"><a href={"https://github.com/" + repo.full_name}>{repo.full_name}</a></li>
    )
  }
}


class RepoCategory extends Component {

  renderRepository(repos) {
    return repos.map((repo, index) =>
      <Repository key={index} repo={repo}/>
    )
  }


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
              {this.renderRepository(repos)}
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
