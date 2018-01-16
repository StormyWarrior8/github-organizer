import React, { Component } from 'react';


class AddRepoForm extends Component {

  constructor(props) {
    super(props)
    this.state = {
      category: '',
      repo: [],
      description: ''
    }
    this.handleRepoNameOnChange = this.handleRepoNameOnChange.bind(this)
    this.handleCategoryOnChange = this.handleCategoryOnChange.bind(this)
    this.handleOnSubmit = this.handleOnSubmit.bind(this)
  }
  handleOnSubmit(e) {
    e.preventDefault();

    var card = {
      repo: this.state.repo,
      category: this.state.category,
      description: ''
    }
    this.props.onSubmit(card)
  }


  handleRepoNameOnChange(e) {
    var repo = e.target.value;
    this.setState({repo: repo})
  }
  handleCategoryOnChange(e) {
    var category = e.target.value;
    this.setState({category: category})
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
