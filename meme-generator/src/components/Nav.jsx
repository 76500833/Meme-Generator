import React from "react";

function Navbar() {
    return (
        <section id="nav-bar">

            <div id="left-side">
                <img src="/pepe2.png" alt="pepe the meme" id="pepe" />
                <h3 id="title">Meme Generator</h3>
                <p id="description">{"{React Course}"} <span id="project-three">Project Three</span></p>
            </div>

        </section>
    )
}

export default Navbar;