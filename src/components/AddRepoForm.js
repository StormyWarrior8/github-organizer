import React, { Component } from 'react';
import axios from 'axios'


let allStarredRepos = [];

class AddRepoForm extends Component {

  constructor(props) {
    super(props)
    this.state = {
      category: '',
      repo: '',
      description: ''
    }
    this.handleRepoNameOnChange = this.handleRepoNameOnChange.bind(this)
    this.handleCategoryOnChange = this.handleCategoryOnChange.bind(this)
    this.handleOnSubmit = this.handleOnSubmit.bind(this)
    this.getAllStarredRepos();
  }
  handleOnSubmit(e) {
    e.preventDefault();

    var filtered = allStarredRepos.filter(e=>{
      return e.full_name === this.state.repo
    })[0]

    allStarredRepos = allStarredRepos.filter(e=>{
      return e != filtered
    });


    var card = {
      repos: [filtered],
      category: this.state.category,
      description: ''
    }
    this.props.onSubmit(card)

    this.refs.repoName.value = ""


  }
  handleRepoNameOnChange(e) {
    var repo = e.target.value;
    this.setState({repo: repo})
  }
  handleCategoryOnChange(e) {
    var category = e.target.value;
    this.setState({category: category})
  }
  getAllStarredRepos() {
    axios.get('https://api.github.com/users/tebinraouf/starred')
         .then((response)=>{
           response.data.map(e => allStarredRepos.push(e))
         })
  }

  componentDidMount() {
    // var filtered = allStarredRepos.filter(e=>{
    //   return e.full_name == "apple/swift"
    // })





    // console.log(allStarredRepos);
    // var result = allStarredRepos.filter((e)=>(
    //   e.full_name === "apple/swift" ? e : null
    // ))
    // console.log(filtered);
  }

  render() {
    return (
      <div>
        <form onSubmit={this.handleOnSubmit} style={{marginBottom: '10px'}}>
          <div className="form-row">
            <div className="col-2">
              <input list="repoList" type="text" className="form-control" placeholder="repository name" onChange={this.handleRepoNameOnChange} ref="repoName"/>
              <datalist id="repoList">
                {
                  allStarredRepos.map((e,i) =>
                    <option key={i} value={e.full_name} />
                  )
                }
              </datalist>
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
