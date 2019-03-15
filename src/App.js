import React, { Component } from 'react'
import Movies from './components/Movies'
import './App.css'

class App extends Component {
  render() {
    return (
      <main className='container'>
        <h1>Vidly</h1>
        <Movies />
      </main>
    )
  }
}

export default App
