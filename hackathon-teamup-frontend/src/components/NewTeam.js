import React, { Component } from 'react'

class NewTeam extends Component {
  state = {
    name: '',
    description: '',
  };

  handleOnChange = event => {
    this.setState({
      name: event.target.value,
      description: event.target.value
    })
  }

  handleOnSubmit = event => {
    event.preventDefault();
    this.props.createTeam(this.state)
    this.setState({
      name: '',
      description: '',
    })
  }

  render() {
    return(
      <div>
        <form onSubmit={this.handleOnSubmit} >
          <input type="text" onChange={this.handleOnChange} value={this.state.name} />
          <input type="text" onChange={this.handleOnChange} value={this.state.description} />
          <input type="submit" onSubmit={this.handleOnSubmit} />
        </form>
      </div>
    )
  }
}

export default NewTeam