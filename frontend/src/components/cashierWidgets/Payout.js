import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faRotateLeft } from '@fortawesome/free-solid-svg-icons'
import { useDispatch } from 'react-redux'

export default function Payout() {
  const dispatch = useDispatch()
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
                    <span class="big_text">Lee Williams</span>
                  </div>
                  <div className="payout_middle_content">
                    <span>Account ID:</span>
                    <span class="big_text">lavell119</span>
                  </div>
              
              </div>
              <div className="payout_bottom">
                  <div className="payout_middle_content">
                    <span>Current Balance:</span>
                    <span class="big_text">$ 0.00 USD</span>
                  </div>
                  <div className="payout_middle_content">
                    <span>No Pending Payouts:</span>
                    <span class="big_text">$ 0.00 USD</span>
                  </div>
                  <div className="payout_middle_content">
                    <span>Available Balance:</span>
                    <span class="big_text">$ 0.00 USD</span>
                  </div>
              </div>
                
            </div>
            <div className="payout_request_div">
              <div className='payout_request_div_left'>Payout Request</div>
              <div className='payout_request_div_right'>Withdrawal not allowed</div>

            </div>
            <div className="deposit_option payout_option">
                <div className="deposit_option_img"><img src="/images/btc_logo.png" onClick={()=>{dispatch({ type: 'CASHIER_DEPOSIT2' })}}></img></div>
                <div className="deposit_option_right payout_option_right">
                    <h4>Bitcoin - BTC</h4>
                    <p>For: Free!</p>
                    <button>Learn more</button>
                </div>
            </div>
            <div className="deposit_option payout_option">
                <div className="deposit_option_img"><img src="/images/litecoin.png" onClick={()=>{dispatch({ type: 'CASHIER_DEPOSIT2' })}}/></div>
                <div className="deposit_option_right payout_option_right">
                    <h4>Litecoin - LTC</h4>
                    <p>For: Free!</p>
                    <button>Learn more</button>
                </div>
            </div>
            <div className="deposit_option payout_option">
            <div className="deposit_option_img"><img src="/images/tether_logo.png" onClick={()=>{dispatch({ type: 'CASHIER_DEPOSIT2' })}}/></div>
                <div className="deposit_option_right payout_option_right">
                    <h4>Tether - USDT</h4>
                    <p>For: Free!</p>
                    <button>Learn more</button>
                </div>
            </div>
            <div className="deposit_option payout_option">
            <div className="deposit_option_img"><img src="/images/eth_logo.png" onClick={()=>{dispatch({ type: 'CASHIER_DEPOSIT2' })}} /></div>
                <div className="deposit_option_right payout_option_right">
                    <h4>Ethereum - ETH</h4>
                    <p>For: Free!</p>
                    <button>Learn more</button>
                </div>
                <div className="payout_option_far_right">
                  <div className="payout_min_max">
                    <span>Min:</span>
                    <span>$ 150</span>
                  </div>
                  <div className="payout_min_max">
                    <span>Max:</span>
                    <span>$ 2500</span>
                  </div>

                </div>
            </div>
     
    </div>
  )
}
