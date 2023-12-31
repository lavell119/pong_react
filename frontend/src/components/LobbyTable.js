import React from 'react'
import {useParams, Link} from 'react-router-dom'

export default function LobbyTable(props) {
  const id =props.id
  const stakes = props.stakes
  // const { id } = useParams()
  console.log('table: ',id)
  return (
    
          <div className="lobby_table">
            <h3> {`Table ${id}`} </h3> 
            <text class="stakes">Stakes: {stakes} </text>
            <div className="lobby_table_table">
              <div className='player'></div>
              <div className='player'></div>

            </div>
            <text class="players">Players: 0/2 </text>

            <Link to={`table/${id}`}>
              <button class="join_table_btn">Join Table</button>
            </Link>
           </div>
    
  )
}
