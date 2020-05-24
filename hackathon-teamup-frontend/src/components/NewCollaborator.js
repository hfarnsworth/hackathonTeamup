import React, { Component } from 'react';
import { connect } from 'react-redux'
import { createCollaborator } from '../actions/collaborators';

class NewCollaborator extends Component {
  state = {
    name: '',
    role: '',
    skills: '',
  };

  handleOnChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  handleOnSubmit = event => {
    event.preventDefault();
    this.props.createCollaborator(this.state)
    this.setState({
      name: '',
      role: '',
      description: ''
    })
  }

  render() {
    return(
      <div className="newCollaborator">
        <form onSubmit={this.handleOnSubmit} >
          <p><label>Name:</label><input name="name" type="text" onChange={this.handleOnChange} value={this.state.name} /></p>
          <p><label>Role:</label><input name="role" type="text" onChange={this.handleOnChange} value={this.state.role} /></p>
          <p><label>Description:</label><input name="skills" type="text" onChange={this.handleOnChange} value={this.state.skills} /></p>
          <input type="submit" onSubmit={this.handleOnSubmit} />
        </form>
      </div>
    )
  }
}

export default connect(null,{ createCollaborator })(NewCollaborator)