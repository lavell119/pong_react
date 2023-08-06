import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faRotateLeft } from '@fortawesome/free-solid-svg-icons'

export default function Payout() {
  return (
    <div className="cashier_widget deposit-widget">
      <div className='deposit_widget_header_strip'>
        <div className='dw_h_btn'>
        <FontAwesomeIcon icon={faRotateLeft} size="lg" style={{color: "white",}} />
        </div>
      </div>
      <div class="cashier_widget_title">
      <h3>REQUEST A PAYOUT: STEP 1 OF 2</h3>

      </div>
            <div className="payout_content">
                <text className="deposit_widget2_content_header">Payout Request</text>
                <div className="payout_middle">
                  <div className="payout_middle_content">
                    <span>Full Name:</span>
                    <span>Lee Williams</span>
                  </div>
                  <div className="payout_middle_content">
                    <span>Account ID:</span>
                    <span>lavell119</span>
                  </div>
              
              </div>
              <div className="payout_bottom">
              Current Balance
              </div>
                
            </div>
            
            <button id="next-btn">Next</button>
    </div>
  )
}
