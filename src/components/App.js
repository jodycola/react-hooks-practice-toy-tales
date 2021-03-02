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

  function likeToy(likedToy){
    const updateToy = toys.map((toy) => {
     if (toy.id === likedToy.id) {
       return likedToy
     } else {
       return toy
     }
    })
    setToys(updateToy)
  }

  function handleDelete(deleteToy){
    fetch(`${url}/${deleteToy.id}`, {
      method: "DELETE"
    })
    .then(setToys(toys.filter((toy) => toy.id !== deleteToy.id))) 
  }

  return (
    <>
      <Header />
      {showForm ? <ToyForm url={url} addToy={addToy} /> : null}
      <div className="buttonContainer">
        <button onClick={handleClick}>Add a Toy</button>
      </div>
      <ToyContainer 
      toys={toys} 
      donateToy={donateToy}
      likeToy={likeToy} 
      handleDelete={handleDelete}
      />
    </>
  );
}

export default App;
