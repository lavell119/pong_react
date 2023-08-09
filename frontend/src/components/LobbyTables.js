import React from 'react'
import LobbyTable from './LobbyTable'
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"

import Slider from "react-slick"

export default function LobbyTables() {

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 1,
    arrows: true
  }

  return (
    <>
    {/* <div className="lobby_tables">
    <LobbyTable id="1" stakes = "1/2"/>
    <LobbyTable id="2" stakes = "1/2"/>
    <LobbyTable id="3" stakes = "2/4"/>
    <LobbyTable id="4 "stakes = "2/4"/>
    <LobbyTable id="5" stakes = "4/8"/>
    </div> */}
    <div className="lobby_tables">
    <div className="slider">
        <Slider {...settings}>
    <LobbyTable id="1" stakes = "1/2"/>
    <LobbyTable id="2" stakes = "1/2"/>
    <LobbyTable id="3" stakes = "2/4"/>
    <LobbyTable id="4 "stakes = "2/4"/>
    <LobbyTable id="5" stakes = "4/8"/>
    <LobbyTable id="6" stakes = "4/8"/>
    <LobbyTable id="7" stakes = "5/10"/>
    <LobbyTable id="8" stakes = "5/10"/>
    <LobbyTable id="9 "stakes = "10/20"/>
    <LobbyTable id="10" stakes = "10/20"/>
        </Slider>
    </div>
    </div>
    </>
    

  
   

  )

}
