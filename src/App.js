import React from "react"
import Navbar from "./components/Navbar"
import Card from './components/Card'
import japan from './images/japan.png'
import australia from './images/australia.png'
import data from './data.js'

function App() {
  const cards = data.map((item) => {
    return(
      <Card 
        key={item.id}
        item={item}
      />
    )
  })
  return (
    <div className="App">
      <Navbar />
      <section className="cards-list">
        {cards}
      </section>
    </div>
  );
}

export default App;
