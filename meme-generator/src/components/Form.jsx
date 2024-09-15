import React from "react";
import memesData from "../memesData.js"
function Form() {

    const [meme, setMeme] = React.useState({
        topText: "",
        bottomText: "",
        randomImage: "http://i.imgflip.com/1bij.jpg"
    })
    const [allMemeImages, setAllMemeImages] = React.useState(memesData)

    function getMemeImage() {
        const memesArray = allMemeImages.data.memes
        const randomNumber = Math.floor(Math.random() * memesArray.length)
        const url = memesArray[randomNumber].url
        setMeme(prevMeme => ({
            ...prevMeme,
            randomImage: url
        }))

    }

    return (
        <>
            <main>
                <div id="form-container" action="">
                    <input type="text"
                        id="form-input"
                        placeholder="Top Text"
                    />
                    <input type="text"
                        id="form-input"
                        placeholder="Bottom Text"
                    />
                    <button
                        onClick={getMemeImage}
                        id="form-button">Get A New Meme Image</button>
                </div>
                <div id="meme-container">
                    <img src={meme.randomImage} id="meme-image" alt="" />
                </div>
            </main>
        </>
    )
}

export default Form;
