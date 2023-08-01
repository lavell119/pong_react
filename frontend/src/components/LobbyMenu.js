import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGamepad, faWallet, faGear, faCircleUser, xmark } from '@fortawesome/free-solid-svg-icons'
import { useDispatch } from "react-redux"


export default function LobbyMenu() {
    const dispatch = useDispatch()
        return (
            <div className="lobby_menu">
                <div className="lobby_menu_item"><FontAwesomeIcon icon={faGamepad} size="xl" style={{color: "#ffffff",}} />Lobby</div>
                <div className="lobby_menu_item" onClick={()=>{dispatch({ type: 'OPEN_CASHIER_POPUP' })}}><FontAwesomeIcon icon={faWallet} size="xl" style={{color: "#ffffff",}} />Cashier</div>
                <div className="lobby_menu_item"><FontAwesomeIcon icon={faGear} size="xl" style={{color: "#ffffff",}} />Settings</div>
                <div className="lobby_menu_item" onClick={()=>{dispatch({ type: 'OPEN_PROFILE_POPUP' })}}><FontAwesomeIcon icon={faCircleUser} size="xl" style={{color: "#ffffff",}} />Profile</div>
            </div>
  )
}
