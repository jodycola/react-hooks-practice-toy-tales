import React from "react";

const url = 'http://localhost:3001/toys'

function ToyCard({ toy, donateToy, likeToy, handleDelete }) {



  function handleLike(){
    fetch(`${url}/${toy.id}`, {
      method: "PATCH",
      headers: { "Content-type": "application/json" },
      body: JSON.stringify({likes: toy.likes + 1})
    })
      .then(r => r.json())
      .then(likeToy)
  }

  return (
    <div className="card">
      <h2>{toy.name}</h2>
      <img
        src={toy.image}
        alt={toy.name}
        className="toy-avatar"
      />
      <p>{toy.likes} Likes </p>
      <button className="like-btn" onClick={handleLike}>Like {"<3"}</button>
      <button className="del-btn" onClick={() => handleDelete(toy)}>Donate to GoodWill</button>
    </div>
  );
}

export default ToyCard;
