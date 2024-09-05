import React from "react";

function Form() {
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
            <button id="form-button">Get A New Meme Image</button>
            </div>
        </main>
        
        </>
    )
}
export default Form;
