import React from 'react'

export default function Deposit() {
  return (
    <div className="cashier_widget deposit-widget">
        <h3>DEPOSIT TO ACCOUNT</h3>
        <div className="deposit_widget_content">
            <div className="deposit_welcome">
                <div className="deposit_welcome_top">
                    <div>
                        <div>Welcome User.</div>
                        <div>Deposit Now!</div>
                    </div>   
                    <button>Live Chat</button>
                </div>
            </div>
            <div className="deposit_option">
                <div className="deposit_option_img"><img src="/images/btc_logo.png" /></div>
                <div className="deposit_option_right">
                    <h4>Bitcoin -BTC</h4>
                    <p>Deposit directly using Bitcoin. DO you prefer proceeding with Bitcoin Cash? Contace Client Care for instructions!</p>
                    <button>Learn more</button>
                </div>
            </div>
            <div className="deposit_option">
                <div className="deposit_option_img"><img src="/images/litecoin.png" /></div>
                <div className="deposit_option_right">
                    <h4>Litecoin -LTC</h4>
                    <p>Deposit instantly using Litecoin</p>
                    <button>Learn more</button>
                </div>
            </div>
            <div className="deposit_option"></div>
            <div className="deposit_option"></div>

           
        </div>
       
    </div>
  )
}
