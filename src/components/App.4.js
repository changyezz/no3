import React, { Component } from 'react';

class Com extends Component {
  constructor (props) {
    super (props);
    this.changeData = this.changeData.bind(this)
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
        <button onClick = { this.changeData }>按钮</button>
      </div>
    )
  }

}

export default Com;
