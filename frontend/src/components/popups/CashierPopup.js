import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faXmark } from '@fortawesome/free-solid-svg-icons'
import { useDispatch } from 'react-redux'

export default function CashierPopup() {
    const dispatch = useDispatch()
  return (
    <div className ="cashier_popup">
        <div className="cashier_popup_header">
            <div></div>
            CASHIER
            <div onClick={()=>{dispatch({ type: 'CLOSE_CASHIER_POPUP' })}}><FontAwesomeIcon icon={faXmark} size="lg" style={{color: "#white",}} /> </div>
        </div>
    </div>
  )
}
