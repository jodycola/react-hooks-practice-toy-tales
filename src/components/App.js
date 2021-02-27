import React, { useState, useEffect } from "react";

import Header from "./Header";
import ToyForm from "./ToyForm";
import ToyContainer from "./ToyContainer";

const url = 'http://localhost:3001/toys'

function App() {
  const [showForm, setShowForm] = useState(false);
  const [toys, setToys] = useState([])

  useEffect(() => {
    fetch(url)
    .then(r => r.json())
    .then(setToys)
  }, [])

  function handleClick() {
    setShowForm((showForm) => !showForm);
  }

  function addToy(toy){
    setToys([...toys, toy])
  }

  function donateToy(donatedToy){
    setToys(toys.filter((toy) => toy.id !== donatedToy.id))
  }

  function likeToy(toy){
    setToys([...toys, toy])
  }

  return (
    <>
      <Header />
      {showForm ? <ToyForm url={url} /> : null}
      <div className="buttonContainer">
        <button onClick={handleClick}>Add a Toy</button>
      </div>
      <ToyContainer 
      toys={toys} 
      addToy={addToy}
      donateToy={donateToy}
      likeToy={likeToy} />
    </>
  );
}

export default App;
