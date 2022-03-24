import React from 'react'
import "../style/style.css";
import { Carousel } from 'react-bootstrap';

export const Sunday = () => {
    return (
        <>
            <div className="container mb-5 ">
                <Carousel>
                    <Carousel.Item className="item-filter">
                        <img
                            className="d-block w-100 sunday-img"
                            src="https://images.unsplash.com/photo-1582745177104-71733881745f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&q=80"
                            alt="First slide"
                        />
                        <Carousel.Caption>
                            <h3>Road trip</h3>
                            <p>During this day I went to somewhere quiet where I can unwind and have some time with myself.</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item className="item-filter">
                        <img
                            className="d-block w-100 sunday-img"
                            src="https://c4.wallpaperflare.com/wallpaper/161/681/157/sports-weightlifting-man-muscle-hd-wallpaper-preview.jpg"
                            alt="First slide"
                        />
                        <Carousel.Caption>
                            <h3>Work Out</h3>
                            <p>I started to work out again to prepare myself for the training prepared for me by my dad's friend around summer </p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    
                    <Carousel.Item className="item-filter">
                        <img
                            className="d-block w-100 sunday-img"
                            src="https://media.discordapp.net/attachments/933974314670252072/950323690971750470/unknown.png?width=1202&height=676"
                            alt="Second slide"
                        />

                        <Carousel.Caption>
                            <h3>Play Valorant</h3>
                            <p>Played valorant with friends to relax and toy with people in unrated. We usually leave them tilted because of the way we play</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item className="item-filter">
                        <img
                            className="d-block w-100 sunday-img"
                            src="https://dg.imgix.net/what-to-pray-for-voiqbabq-en/landscape/what-to-pray-for-voiqbabq.jpg?ts=1475260312&ixlib=rails-4.2.0&fit=crop&w=2000&h=1050"
                            alt="Third slide"
                        />

                        <Carousel.Caption>
                            <h3>Pray and attended virtual mass</h3>
                            <p>Attended Father Fidel's online mass which is live on facebook.</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                </Carousel>


            </div>



        </>
    )
}
export default Sunday;