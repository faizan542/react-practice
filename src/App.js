import React, { Component } from 'react'
import './App.css'

 class Header extends Component {
  render() {
    return (
      <div className='header'>
        <h1>Header</h1>
        </div>
    )
  }
}

class Footer extends Component{
  render(){
    return(
      <div className='footer'>
        <h1>Footer</h1>
        </div>
    )
  }
}

export default class App extends Component {
  render() {
    let todos = [{ text: "Learn react" }, { text: "Go to Gym" }]
    return (
      <div>
        <Header />
        <ul className='todos'>
          {todos.map((item, index) => {
            return <li key={index}>{`${index + 1}  ${item.text}`}</li>
          })}
        </ul>
        <Footer />
      </div>
    )
  }
}
