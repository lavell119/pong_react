import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faXmark } from '@fortawesome/free-solid-svg-icons'
import { useDispatch } from 'react-redux'
import Deposit from '../cashierWidgets/Deposit'
import Deposit2 from '../cashierWidgets/Deposit2'
import { useSelector } from 'react-redux'




export default function CashierPopup() {
    const dispatch = useDispatch()
    const profilePopupComponent = useSelector(state=>state.cashier_popup_component)
    console.log(profilePopupComponent)

  return (
    <div className ="cashier_popup">
        <div className="cashier_popup_header">
            <div></div>
            CASHIER
            <div onClick={()=>{dispatch({ type: 'CLOSE_CASHIER_POPUP' })}}><FontAwesomeIcon icon={faXmark} size="lg" style={{color: "#white",}} /> </div>
        </div>
        <div className="cashier_popup_subheader">
          <div className="cashier_btn selected">Deposit</div>
          <div className="cashier_btn">Payout</div>
          <div className="cashier_btn">Bonuses</div>
          <div className="cashier_btn">My Account</div>
          <div className="cashier_btn balance_btn">$0.00</div>
        </div>
        <div className='cashier_popup_content'>
          <div className="cashier_popup_component">
            <Deposit2 />
          </div>
        </div>
    </div>
  )
}
