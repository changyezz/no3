import React, { Component } from 'react';
// import '@/main.scss';

class Com extends Component {
  constructor (props) {
    super (props);
    this.state = {
      list: []
    }
  }

  componentDidMount () {
    fetch('http://www.daxunxun.com/douban').then(res => res.json()).then(data => {
      console.log(data)
      this.setState({
        list: data
      })
    })
  }

  render () {
    return (
      <ul className="list">
        {
          this.state.list.map(item => {
            return (<li key = { item.id } style={
              {
                width: '100%',
                height: '40px',
                font:'18px/40px ""',
                border: '1px solid #000',
                borderRadius: '20px',
                marginBottom: '20px',
                textAlign: 'center'
              }
            }>{ item.title }</li>)
          })
        }
      </ul>
    )
  }

}

export default Com;
