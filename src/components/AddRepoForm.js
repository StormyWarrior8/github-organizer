import React, { Component } from 'react';


class AddRepoForm extends Component {

  constructor(props) {
    super(props)
    this.state = {
      card: {
        categoryName: '',
        repoName: ''
      }
    }
    this.handleRepoNameOnChange = this.handleRepoNameOnChange.bind(this)
    this.handleCategoryOnChange = this.handleCategoryOnChange.bind(this)
    this.handleOnSubmit = this.handleOnSubmit.bind(this)
  }

  handleOnSubmit(e) {
    e.preventDefault();
    var card = {
      categoryName: this.state.categoryName,
      repoName: this.state.repoName
    }
    console.log(card);
  }

  handleRepoNameOnChange(e) {
    var repoName = e.target.value;
    this.setState({repoName: repoName})
  }
  handleCategoryOnChange(e) {
    var categoryName = e.target.value;
    this.setState({categoryName: categoryName})
  }

  render() {
    return (
      <div>
        <form onSubmit={this.handleOnSubmit} style={{marginBottom: '10px'}}>
          <div className="form-row">
            <div className="col-2">
              <input type="text" className="form-control" placeholder="repository name" onChange={this.handleRepoNameOnChange}/>
            </div>
            <div className="col-2">
              <input type="text" className="form-control" placeholder="category name" onChange={this.handleCategoryOnChange} />
            </div>
            <button type="submit" className="btn btn-success">add</button>
          </div>
        </form>
      </div>
    )
  }
}


export default AddRepoForm
