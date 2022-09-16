import React, { Component } from 'react'
import './App.css';
import { ComOne, Logo } from './components/ComOne';
// import Footer from './components/Footer';
import Child from './components/Child';
import Time from './components/Time';

export default class App extends Component {
  get_data = (data) => {
    console.log(data)
  }
  render() {
    let todos = [{ text: "Learn react" }, { text: "Go to Gym" }]
    return (
      <div>
        <ComOne />

        <Logo />

        <h1 style={{ fontStyle: "italic", fontFamily: "fantasy", backgroundColor: "pink" }}>Parent Component</h1>

        <ul className='todos'>
          {todos.map((item, index) => {
            return <li key={index}>{`${index + 1}  ${item.text}`}</li>
          })}
        </ul>

        <Child getData={this.get_data} name="car" price="10000" />
        {/* <Child name="watch" price="300"/>
            <Child name="house" price="1000000"/>
            <Child name="bike" price="5000"/> */}


            <Time />

        {/* <Footer /> */}
      </div>
    )
  }
}
