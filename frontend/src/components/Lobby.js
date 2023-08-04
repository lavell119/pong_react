import React from 'react'
import ProfilePopup from './popups/ProfilePopup'
import CashierPopup from './popups/CashierPopup'
import LobbyMenu from './LobbyMenu'
import LobbyTables from './LobbyTables'
import { useSelector } from 'react-redux'

export default function Lobby() {
  const profilePopupState = useSelector(state=>state.profile_popup)
  const cashierPopupState = useSelector(state=>state.cashier_popup)


  return (
    <div className="lobby">
        <div className="lobby_header">
          <nav className='nav'>
            <button className="logout_btn">Logout</button>
          </nav>
            <LobbyMenu />
        </div>
        {profilePopupState && <ProfilePopup />}
        {cashierPopupState  &&<CashierPopup />}
        <div className="lobby_content">
            <LobbyTables />
        </div>
    </div>
  )
}
