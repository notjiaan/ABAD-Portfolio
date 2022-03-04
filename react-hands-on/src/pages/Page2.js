import React from 'react'
import "../style/style.css"

const Page2 = () => {
    return (
        <>

            <div className="container d-flex justify-content-center">
                <div className="row">
                    <div className="col">
                        <div className="card" style={{ width: "18rem" }}>
                            <img className="card-img-top img-fluid" src="https://artincontext.org/wp-content/uploads/2021/10/Famous-Portrait-Paintings-848x530.jpg" alt="Card image cap" />
                            <div className="card-body">
                                <h5 className="card-title">Girl with a Pearl Earring</h5>
                                <p className="card-text painting-info">The girl, who gazes steadily at the viewer, has been portrayed with a captivating expression
                                    that elicited curiosity from audiences when looking at the work.</p>
                                <a href="#" className="btn btn-primary">More info</a>
                            </div>
                        </div>
                    </div>
                    <div className="col">
                        <div className="card" style={{ width: "18rem"}}>
                            <img className="card-img-top" src="https://artincontext.org/wp-content/uploads/2022/01/The-Raft-of-the-Medusa-The%CC%81odore-Ge%CC%81ricault-848x530.jpg" alt="Card image cap" />
                            <div className="card-body">
                                <h5 className="card-title">The Raft of the Medusa</h5>
                                <p className="card-text painting-info"> A scene that followed after the French naval ship Méduse‘s wreck, 
                                which went aground off the coastline of modern-day Mauritania on the 2nd of July, 1816.</p>
                                <a href="#" className="btn btn-primary">More info</a>
                            </div>
                        </div>
                    </div>
                    <div className="col">
                        <div className="card" style={{ width: "18rem" }}>
                            <img className="card-img-top" src="https://artincontext.org/wp-content/uploads/2021/12/Le-De%CC%81jeuner-sur-lherbe-848x530.jpg" alt="Card image cap" />
                            <div className="card-body">
                                <h5 className="card-title">Luncheon on the Grass</h5>
                                <p className="card-text painting-info">The Luncheon on the Grass features an ordinary situation: two female and two male subjects sharing 
                                a picnic—represented as a still life in the lower left corner—in a forest.</p>
                                <a href="#" className="btn btn-primary">More info</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>


        </>
    )
}

export default Page2