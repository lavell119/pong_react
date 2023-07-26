import React from 'react'
import {useParams, Link} from 'react-router-dom'

export default function LobbyTable(props) {
  const id =props.id
  // const { id } = useParams()
  console.log('table: ',id)
  return (
    <Link to={`table/${id}`}>
          <div className="lobby_table">
            <h3> {`Table ${id}`} </h3> 
            <div className="lobby_table_table"></div>
            <button>Join Table</button>
           </div>
    </Link>
  )
}
