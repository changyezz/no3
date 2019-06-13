import React, { Component } from 'react';

class Com extends Component {
  constructor (props) {
    super (props);
    this.state = {
      msg: 'hello react'
    }
  }
  changeData () {
    this.setState({
      msg: 'hello hapi'
    })
  }

  render () {
    return (
      <div>
        { this.state.msg }
        <button onClick = { (e) => this.changeData(e) }>按钮</button>
      </div>
    )
  }

}

export default Com;
