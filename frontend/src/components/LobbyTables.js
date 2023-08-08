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
    <div className="slider">
        <Slider {...settings}>
          <div>
            <h3>1</h3>
          </div>
          <div>
            <h3>2</h3>
          </div>
          <div>
            <h3>3</h3>
          </div>
          <div>
            <h3>4</h3>
          </div>
          <div>
            <h3>5</h3>
          </div>
          <div>
            <h3>6</h3>
          </div>
        </Slider>
    </div>
    </>
    

  
   

  )
}
