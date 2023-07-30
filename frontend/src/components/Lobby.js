import React from 'react'
import { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGamepad, faWallet, faGear, faCircleUser, xmark } from '@fortawesome/free-solid-svg-icons'
import { useSelector } from 'react-redux'
import ProfilePopup from './popups/ProfilePopup'

import LobbyTables from './LobbyTables'

export default function Lobby() {
  const test = useSelector(state=>state.test)
  console.log(test)
  const [profilePopupDisplay, setProfilePopupDisplay] = useState(false)
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
                <div className="lobby_menu_item" onClick={()=>setProfilePopupDisplay(true)}><FontAwesomeIcon icon={faCircleUser} size="xl" style={{color: "#ffffff",}} />Profile</div>

            </div>
        </div>
        {profilePopupDisplay && <ProfilePopup />}
        <div className="lobby_content">
            <LobbyTables />
        </div>

    </div>
  )
}
