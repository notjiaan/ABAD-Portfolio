import React from 'react'
import "../style/style.css"

const Saturday = () => {
    return (
        <>

            <div className="container">
                <div className="row">
                    <div className="col saturday-column d-flex justify-content-center" >
                        <div className="card saturday-card" >
                            <img className="card-img-top saturday-img" src="https://www.sleepscore.com/wp-content/uploads/2020/07/Header-1024x576.jpg" alt="Card image cap" />
                            <div className="card-body">
                                <h5 className="card-title saturday-title">Sleep</h5>
                                <p className="card-text saturday-info">I took the time and tried to sleep more to compensate the hours of sleep that I lost during the week.</p>
                            </div>
                        </div>
                    </div>
                    <div className="col saturday-column d-flex justify-content-center">
                        <div className="card saturday-card">
                            <img className="card-img-top saturday-img" src="https://earlygame.com/uploads/images/_1200x630_crop_center-center_82_none/Neon-Agent-Valorant.png?mtime=1641405562" alt="Card image cap" />
                            <div className="card-body">
                                <h5 className="card-title saturday-title">Played Valorant</h5>
                                <p className="card-text saturday-info"> I played valorant with my friends. We trolled during unrated games while we played serious during rank games.</p>
                            </div>
                        </div>
                    </div>
                    <div className="col saturday-column d-flex justify-content-center">
                        <div className="card saturday-card" >
                            <img className="card-img-top saturday-img" src="https://cdn.images.express.co.uk/img/dynamic/20/590x/Peaky-Blinders-879836.jpg" alt="Card image cap" />
                            <div className="card-body ">
                                <h5 className="card-title saturday-title">Watched Series</h5>
                                <p className="card-text saturday-info">I finished watching my favorite series Peaky Blinders so that I am updated even if the season 6 is not yet finished.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>


        </>
    )
}

export default Saturday