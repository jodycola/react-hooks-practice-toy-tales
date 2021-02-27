import React from "react";
import ToyCard from "./ToyCard";


function ToyContainer({ toys, donateToy, likeToy }) {
  
  const toyDisplay = toys.map((toy) => {
    return <ToyCard
    key={toy.id}
    toy={toy}
    donateToy={donateToy}
    likeToy={likeToy}
    />
  })


  return (
    <div id="toy-collection">{toyDisplay}</div>
  );
}

export default ToyContainer;
