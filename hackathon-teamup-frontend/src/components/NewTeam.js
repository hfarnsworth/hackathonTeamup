import React, { Component } from 'react';
import { connect } from 'react-redux'
import { createTeam } from '../actions/teams';

class NewTeam extends Component {
  state = {
    name: '',
    description: '',
  };

  handleOnChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  handleOnSubmit = event => {
    event.preventDefault();
    this.props.createTeam(this.state)
    this.setState({
      name: '',
      description: ''
    })
  }

  render() {
    return(
      <div className="newTeam">
        <form onSubmit={this.handleOnSubmit} >
          <p><label>Team Name:</label><input name="name" type="text" onChange={this.handleOnChange} value={this.state.name} /></p>
          <p><label>Project Description:</label><input name="description" type="text" onChange={this.handleOnChange} value={this.state.description} /></p>
          <input type="submit" onSubmit={this.handleOnSubmit} />
        </form>
      </div>
    )
  }
}

export default connect(null,{ createTeam })(NewTeam)