import React from 'react'

export default function Payout() {
  return (
    <div className="cashier_widget deposit-widget">
      <div className='deposit_widget_header_strip'>
        <div className='dw_h_btn'></div>
      </div>
      <div class="cashier_widget_title">
      <h3>REQUEST A PAYOUT: STEP 1 OF 2</h3>

      </div>
            <div className="deposit_widget2_content">
                <text class="deposit_widget2_content_header">Deposit using Bitcoin</text>
                <div className="deposit_widget2_content_bottom">
                    <div className="deposit2_logo">
                    </div>
                    <button>Learn more</button>
                    <div className="deposit2_fields_wrapper">
                      <text>Amount:</text>
                      <select name="cars" id="cars">
                        <option value="volvo">USD $ </option>
                        <option value="saab">Saab</option>
                        <option value="mercedes">Mercedes</option>
                        <option value="audi">Audi</option>
                      </select>
                      <input placeholder='Amount'></input>
                      <div className="deposit2_min_max">
                        <p>Min. 20.00</p>
                        <p>Max. 1000000.00</p>
                      </div>
                    </div>
                </div> 
            </div>
            <button id="next-btn">Next</button>
    </div>
  )
}
