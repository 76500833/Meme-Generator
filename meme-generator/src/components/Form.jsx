import React from "react";
import memesData from "../memesData.js"
function Form() {

    const [memeImage, setMemeImage] = React.useState("")

    function getMemeImage() {
        //Gets random number
        const memesArray = memesData.data.memes
        const randomNumber = Math.floor(Math.random() * memesArray.length)
        setMemeImage(memesArray[randomNumber].url)
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
                    <img src={memeImage} id="meme-image" alt="" />
                </div>
            </main>
        </>
    )
}
export default Form;
