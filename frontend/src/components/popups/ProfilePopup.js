import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faXmark } from '@fortawesome/free-solid-svg-icons'

export default function ProfilePopup() {
  return (
    <div className="profile_popup">
          <div className="profile_popup_content">
            <div className="cross_btn_wrapper"><FontAwesomeIcon icon={faXmark} size="lg" style={{color: "#white",}} /></div>
            <h3>MY PROFILE</h3>
            <div className='profile_popup_field'>
              <span>Username</span>
            </div>
            <div className='profile_popup_field'>
              <span>E-Mail Address</span>
              </div>
            <div className='profile_popup_field'>
              <span>First Name</span>
            </div>
            <div className='profile_popup_field'>
            <span>Last Name</span>

            </div>
            <div className="profile_popup_field_divider">
              <div className='mini_profile_popup_field'>
                <span>Birthdate</span>
              </div>
              <div className='mini_profile_popup_field'>
                <span>Gender</span>
              </div>
            </div>
            
            <div className='profile_popup_field'>
              <span>Address Line 1</span>
            </div>
            <div className='profile_popup_field'>
              <span>Address Line 2</span>

            </div>
            <div className='profile_popup_field'>
              <span>City</span>
            </div>
            <div className='profile_popup_field'>
              <span>State/ Province</span>
            </div>
            <div className='profile_popup_field'>
              <span>Zip/ Postal Code</span>
            </div>
            <div className='profile_popup_field'>
              <span>Mobile/ Cell Phone</span>
            </div>
            <div className='profile_popup_field'>
              <span>Daytime Phone</span>
            </div>
            <div className='profile_popup_field'>
              <span>Evening Phone</span>
            </div>

          </div>                 
        </div>
    
  )
}

