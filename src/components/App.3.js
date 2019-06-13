import React, { Component } from 'react';

class Com extends Component {
  constructor (props) {
    super (props);
    this.state = {
      msg: 'hello react'
    }
  }
  changeDate () {
    this.setState({
      msg: 'hello hapi'
    })
  }

  render () {
    return (
      <div>
        { this.state.msg }
        <button onClick = { this.changeDate.bind(this) }>按钮</button>
      </div>
    )
  }

}

export default Com;
