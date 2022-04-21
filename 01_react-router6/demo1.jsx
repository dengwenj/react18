import React, { Component } from 'react'

export default class Demo1 extends Component {
  state = {
    count: 0
  }

  componentDidMount() {
    this.setState({ count: this.state.count  + 1 })
    console.log(this.state.count)
    this.setState({ count: this.state.count  + 1 })
    console.log(this.state.count)
    setTimeout(() => {
      this.setState({ count: this.state.count + 1 })
      console.log(this.state.count)
    }, 0)
    setTimeout(() => {
      this.setState({ count: this.state.count  + 1 })
      console.log(this.state.count)
    }, 0)
  }

  render() {
    return (
      <div>Demo</div>
    )
  }
}
