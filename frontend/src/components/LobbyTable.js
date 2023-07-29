import React from 'react'
import {useParams, Link} from 'react-router-dom'

export default function LobbyTable(props) {
  const id =props.id
  // const { id } = useParams()
  console.log('table: ',id)
  return (
    
          <div className="lobby_table">
            <h4> {`Table ${id}`} </h4> 
            <text><b>Stakes:</b> 1/2 </text>
            <div className="lobby_table_table"></div>
            <Link to={`table/${id}`}>
              <button class="join_table_btn">Join Table</button>
            </Link>
           </div>
    
  )
}
