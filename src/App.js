import React, { Component } from 'react'
import './App.css';
import ComOne from './components/ComOne';

class Header extends Component {
  render() {
    return (
      <div className='header'>
        <h1>Header</h1>
      </div>
    )
  }
}

class Footer extends Component {
  render() {
    return (
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

        <h1 style={{ fontStyle: "italic", fontFamily: "fantasy", backgroundColor: "pink" }}>Main Component</h1>
        <ul className='todos'>
          {todos.map((item, index) => {
            return <li key={index}>{`${index + 1}  ${item.text}`}</li>
          })}
        </ul>
        <ComOne />
        <Footer />
      </div>
    )
  }
}
