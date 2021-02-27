import React, { useState } from "react";

function ToyForm({ url, addToy }) {
  const [formData, setFormData] = useState({
    name: "",
    image: ""
  })

  function handleChange(event){
    setFormData({
      ...formData,
      [event.target.name]: event.target.value
    })
  }

  function handleSubmit(event){
    event.preventDefault()
    const newToy = {
      name: formData.name,
      image: formData.image,
      likes: 0
    }
    fetch(url, {
      method: "POST",
      headers: { "Content-type": "application/json" },
      body: JSON.stringify(newToy),
    })
      .then(r => r.json())
      .then(addToy)
      setFormData({
        name: "",
        image: ""
      })
  }

  return (
    <div className="container">
      <form className="add-toy-form" onSubmit={handleSubmit}>
        <h3>Create a toy!</h3>
        <input
          type="text"
          name="name"
          placeholder="Enter a toy's name..."
          className="input-text"
          value={formData.name}
          onChange={handleChange}
        />
        <br />
        <input
          type="text"
          name="image"
          placeholder="Enter a toy's image URL..."
          className="input-text"
          value={formData.image}
          onChange={handleChange}
        />
        <br />
        <input
          type="submit"
          name="submit"
          value="Create New Toy"
          className="submit"
        />
      </form>
    </div>
  );
}

export default ToyForm;
