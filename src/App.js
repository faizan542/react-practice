import React, { Component } from 'react'
import './App.css';
import Header from './components/Header';
import { ComOne, Logo } from './components/ComOne';
import Footer from './components/Footer';


export default class App extends Component {
  render() {
    let todos = [{ text: "Learn react" }, { text: "Go to Gym" }]
    return (
      <div>
        <Header />
        
        <Logo />

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
