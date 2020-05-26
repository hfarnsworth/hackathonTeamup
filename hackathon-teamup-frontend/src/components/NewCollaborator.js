import React, { Component } from 'react';
import { connect } from 'react-redux'
import { createCollaborator } from '../actions/collaborators';

class NewCollaborator extends Component {
  state = {
    name: '',
    role: '',
    skills: '',
  };

  handleOnChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  handleOnSubmit = e => {
    e.preventDefault();
    this.props.createCollaborator(this.state)
    this.setState({
      name: '',
      role: '',
      skills: ''
    })
  }

  render() {
    return(
      <div className="newCollaborator">
        <form onSubmit={this.handleOnSubmit} >
          <p><label>Name:</label><input name="name" type="text" onChange={this.handleOnChange} value={this.state.name} /></p>
          <p><label>Role:</label><input name="role" type="text" onChange={this.handleOnChange} value={this.state.role} /></p>
          <p><label>Skills:</label><input name="skills" type="text" onChange={this.handleOnChange} value={this.state.skills} /></p>
          <input type="submit" onSubmit={this.handleOnSubmit} />
        </form>
      </div>
    )
  }
}

export default connect(null,{ createCollaborator })(NewCollaborator)