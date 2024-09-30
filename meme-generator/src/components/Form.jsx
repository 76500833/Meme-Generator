import React, { useState, useEffect } from "react";
import "../form.css"; // Import your CSS for styling

function Form() {
  const [memesArray, setMemesArray] = useState([]); // State for all memes
  const [memeImage, setMemeImage] = useState(""); // State for selected meme image
  const [top, setTop] = useState(""); // State for top text
  const [bottom, setBottom] = useState(""); // State for bottom text

  useEffect(() => {
    fetch("https://api.imgflip.com/get_memes")
      .then((res) => res.json())
      .then((data) => setMemesArray(data.data.memes)); // Store all memes in state
  }, []);

  const handleInputChange = (e) => {
    const { name, value } = e.target; // Get name and value
    if (name === "top") {
      setTop(value); // Update top text
    } else if (name === "bottom") {
      setBottom(value); // Update bottom text
    }
  };

  const getMemeImage = () => {
    const randomNumber = Math.floor(Math.random() * memesArray.length);
    setMemeImage(memesArray[randomNumber].url); // Set random meme image from fetched array
  };

  return (
    <>
      <main>
        <div id="form-container">
          <input
            type="text"
            name="top"
            id="form-input"
            placeholder="Top Text"
            value={top}
            onChange={handleInputChange}
          />
          <input
            type="text"
            name="bottom"
            id="form-input"
            placeholder="Bottom Text"
            value={bottom}
            onChange={handleInputChange}
          />
          <button onClick={getMemeImage} id="form-button">
            Get A New Meme Image
          </button>
        </div>
        <div id="meme-container">
          {memeImage && (
            <div className="meme">
              <img src={memeImage} id="meme-image" alt="Meme" />
              {top && <h2 className="meme-text top">{top}</h2>}
              {bottom && <h2 className="meme-text bottom">{bottom}</h2>}
            </div>
          )}
        </div>
      </main>
    </>
  );
}

export default Form;
