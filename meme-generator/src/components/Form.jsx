import React from "react";

function Form() {
    return (
        <>  
        <div id="both-forms">
        <div id="top-form">
            <label htmlFor="top">Top Text</label>
            <input
                type="text"
                name="top"
            />
    </div>
            <div id="bottom-form">
            <label htmlFor="bottom">Bottom Text</label>
            <input
             
                type="text"
                name="bottom"
            />
            </div>
            </div>
            <div id="button-container">
            <button id="submit">Submit</button>
            </div>
        </>
    )
}
export default Form;
