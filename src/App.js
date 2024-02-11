import React from "react";
import Navbar from './components/Navbar'
import Card from './components/Card'
import data from "./data";

function App() {

  const cards = data.map((item) => {
    return (
      <Card 
        item={item}
      />
    )
  });
  
  return (
    <div className="App">
      <Navbar />
      <section className="cardList">
        {cards}
      </section>
    </div>
  );
}

export default App;
