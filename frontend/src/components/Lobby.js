import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGamepad, faWallet, faGear, faCircleUser } from '@fortawesome/free-solid-svg-icons'


import LobbyTables from './LobbyTables'

export default function Lobby() {
  return (
    <div className="lobby">
        <div className="lobby_header">
            <div className="lobby_menu">
                <div className="lobby_menu_item"><FontAwesomeIcon icon={faGamepad} size="xl" style={{color: "#ffffff",}} />Lobby</div>
                <div className="lobby_menu_item"><FontAwesomeIcon icon={faWallet} size="xl" style={{color: "#ffffff",}} />Cashier</div>
                <div className="lobby_menu_item"><FontAwesomeIcon icon={faGear} size="xl" style={{color: "#ffffff",}} />Settings</div>
                <div className="lobby_menu_item"><FontAwesomeIcon icon={faCircleUser} size="xl" style={{color: "#ffffff",}} />Profile</div>

            </div>
        </div>
        <div className="lobby_content">
            <LobbyTables />
        </div>

    </div>
  )
}
