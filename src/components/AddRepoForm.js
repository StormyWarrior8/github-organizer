import React, { Component } from 'react';


class AddRepoForm extends Component {

  render() {
    return (
      <div>
        <form>
          <div className="form-row">
            <div className="col-2">
              <input type="text" className="form-control" placeholder="repository name" />
            </div>
            <div className="col-2">
              <input type="text" className="form-control" placeholder="category name" />
            </div>
            <button type="submit" className="btn btn-success">add</button>
          </div>
        </form>
      </div>
    )
  }
}


export default AddRepoForm
