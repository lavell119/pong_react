import React from 'react'

export default function Account() {
  return (
    <div className="cashier_widget account_widget">
        <p>Enter the date range below and then select 'Search' to see your past transactions.</p>
        <div>
          <label for="from_date">From</label>
          <input id ="from_date"></input>
          <label for="to_date">To</label>
          <input id ="to_date"></input>        </div>
    </div>
  )
}
