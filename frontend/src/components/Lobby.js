import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGamepad, faWallet, faGear, faCircleUser } from '@fortawesome/free-solid-svg-icons'


import LobbyTables from './LobbyTables'

export default function Lobby() {
  return (
    <div className="lobby">
        <div className="lobby_header">
          <nav className='nav'>
            <button className="logout_btn">Logout</button>
          </nav>
            <div className="lobby_menu">
                <div className="lobby_menu_item"><FontAwesomeIcon icon={faGamepad} size="xl" style={{color: "#ffffff",}} />Lobby</div>
                <div className="lobby_menu_item"><FontAwesomeIcon icon={faWallet} size="xl" style={{color: "#ffffff",}} />Cashier</div>
                <div className="lobby_menu_item"><FontAwesomeIcon icon={faGear} size="xl" style={{color: "#ffffff",}} />Settings</div>
                <div className="lobby_menu_item"><FontAwesomeIcon icon={faCircleUser} size="xl" style={{color: "#ffffff",}} />Profile</div>

            </div>
        </div>
        <div className="profile_popup">
          <div className="profile_popup_content">
            <h2>My Profile</h2>
          <input></input>
          <input></input>
          <input></input>
          <input></input>
          <input></input>
          <input></input>
          <input></input>
          <input></input>
          <input></input>
          <input></input>
          <input></input>
          <input></input>
          <input></input>
          <input></input>
          <input></input>
          <input></input><input></input>
          <input></input>
          <input></input>
          <input></input>
          <input></input>
          <input></input>
          <input></input>
          <input></input>
          </div>                 
        </div>
        <div className="lobby_content">
            <LobbyTables />
        </div>

    </div>
  )
}
