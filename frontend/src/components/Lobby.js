import React from 'react'
import LobbyTables from './LobbyTables'

export default function Lobby() {
  return (
    <div className="lobby">
        <div className="lobby_header">
            <div className="lobby_menu">
                <div className="lobby_menu_item"></div>
                <div className="lobby_menu_item"></div>
                <div className="lobby_menu_item"></div>
                <div className="lobby_menu_item"></div>

            </div>
        </div>
        <div className="lobby_content">
            <LobbyTables />
        </div>

    </div>
  )
}