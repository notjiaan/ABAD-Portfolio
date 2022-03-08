import React from 'react';
import '../styles/WaysOfStyling.css';

const WaysOfStyling = () => {

    const internal = {
        height: "25px",
        width: "100%",
        backgroundColor: "gold"
    }

    return (
        <>
            {
                //internal css
            }
            <div style={internal}>
                <p>Internal</p>
            </div>
            {
                //external css
            }
            <div className="external">
                <p>External class</p>
            </div>
            {
                //external id
            }
            <div id="external">
                <p>External id</p>
            </div>
            {
                //internal id
            }
            <div style={{width: "100%",  height: "25px", backgroundColor: "red" }}>
                <p>External id</p>
            </div>

        </>
    )
}

export default WaysOfStyling