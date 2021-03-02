import React from "react";
import ToyCard from "./ToyCard";


function ToyContainer({ toys, donateToy, likeToy, handleDelete }) {
  
  const toyDisplay = toys.map((toy) => {
    return <ToyCard
    key={toy.id}
    toy={toy}
    donateToy={donateToy}
    likeToy={likeToy}
    handleDelete={handleDelete}
    />
  })


  return (
    <div id="toy-collection">{toyDisplay}</div>
  );
}

export default ToyContainer;
