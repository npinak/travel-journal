import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import Navbar from './components/Navbar.jsx'
import Card from './components/Card.jsx'
import data from './assets/data.js'

function App() {
  const cards = data.map(item => {
    return ( // mapping each entry from data.js into its own card component. 
      <Card
        key={item.id}
        item={item}
      />
    )
  })        

  return (
    <div className='body-div'>
      <Navbar />
      <section className="card-list">
        {cards} 
      </section>
    </div>
  )
}

export default App
