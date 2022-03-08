import React from 'react'

const ComponentTutorial = () => {
    //js
    if (true) {
        console.log(1);
    }
    let x = 0
    const y = () => {
        return "Hello World"
    }
    let z = <h6>
        Kono Sekai
    </h6>

    let a = <h1>1213: {x}</h1>
    let b = <h1>1213: {y()}</h1>
    let c = ["qwerty", "uiop", 1]
    let d = false
    let e = { fname: "Jiaan", lname: "Abad" }
    return (
        <>

            {
                //jsx
            }

            <h1>{x}</h1>
            <h1>{y()}</h1>
            {z}
            {a}
            {b}
            {c}
            {d}
            <br />
            {e.fname}
            <br />
            {e.lname}

        </>
    )
}

export default ComponentTutorial