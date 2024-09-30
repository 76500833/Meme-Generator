import React, { useState } from "react";
import memesData from "../memesData.js";
import "../form.css"; // Import your CSS for styling

function Form() {
    // State for meme image and text
    const [memeImage, setMemeImage] = useState("");
    const [top, setTop] = useState("");
    const [bottom, setBottom] = useState("");

    const handleInputChange = (e) => {
        const { name, value } = e.target; // Get name and value
        if (name === "top") {
            setTop(value); // Update top text
        } else if (name === "bottom") {
            setBottom(value); // Update bottom text
        }
    };

    const getMemeImage = () => {
        const memesArray = memesData.data.memes;
        const randomNumber = Math.floor(Math.random() * memesArray.length);
        setMemeImage(memesArray[randomNumber].url); // Set random meme image
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
                            <img src="https://i.imgflip.com/43iacv.jpg" id="meme-image" alt="Meme" />
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
