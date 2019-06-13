import React, { Component } from 'react';

class Com extends Component {
  constructor (props) {
    super (props);
    this.state = {
      msg: 'hello react'
    }
  }

  render () {
    return (
      <div>
        { this.state.msg }
        <button onClick = { () => {
          this.setState({
            msg: 'hello hanpi'
          })
        }}>按钮</button>
      </div>
    )
  }

}

export default Com;
