import React from 'react'
import {useParams} from 'react-router-dom'

export default function Table() {
    const {id} = useParams()
    console.log('table ',id + ' open')
  return (
    <div className='table'>
        <h3>{'Table '+id }</h3>
        <div className='game_table'></div>
        
    </div>

  )
}
