import React from 'react'
import {useParams, Link} from 'react-router-dom'

export default function LobbyTable(props) {
  const id =props.id
  // const { id } = useParams()
  console.log('table: ',id)
  return (
    <Link to={`table/${id}`}>
          <div className="lobby_table">{`Table ${id}`}</div>
    </Link>
  )
}
