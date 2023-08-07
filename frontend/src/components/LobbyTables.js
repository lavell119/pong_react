import React from 'react'
import LobbyTable from './LobbyTable'


export default function LobbyTables() {
  return (
    <div className="lobby_tables">
    <LobbyTable id="1" stakes = "1/2"/>
    <LobbyTable id="2" stakes = "1/2"/>
    <LobbyTable id="3" stakes = "2/4"/>
    <LobbyTable id="4 "stakes = "2/4"/>
    <LobbyTable id="5" stakes = "4/8"/>
    </div>
    

  )
}
