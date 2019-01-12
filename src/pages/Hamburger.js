import React, { Component } from 'react'
import { PlusCircle, Bell, Check, ChevronRight, Edit2 } from 'react-feather';

export default class Hamburger extends Component {
  render() {
    return (
      <div className="menu-container animated fadeIn faster">
        <div className="profile-container">
          <div className="profile">
            <img src="https://mir-s3-cdn-cf.behance.net/project_modules/disp/1bdc9a33850498.56ba69ac2ba5b.png" alt="John Doe" />
            <span className="active-user">Batman</span>
          </div>
          <div className="profile">
            <img src="https://mir-s3-cdn-cf.behance.net/project_modules/disp/f9fa8a33850498.56ba69ac2cc3a.png" alt="Jane Doe" />
            <span>Jane</span>
          </div>
          <div className="profile">
            <PlusCircle width="48" height="48" strokeWidth="0.5" fill="#171717"/>
            <span>Add profile</span>
          </div>
          <div className="edit-profile">
          <div><Edit2 stroke="grey" strokeWidth="1"/>Edit profiles</div>
          </div>
        </div>
        <div className="menu-items-container">
          <div className="menu-item-more">
          <Bell />
            <span>Notifications</span>
            <span className="float-right">
            <ChevronRight />
            </span>
          </div>
          
          <div className="menu-item-more">
          <Check />
            <span>My list</span>
            <span className="float-right">
            <ChevronRight />
            </span>
          </div>
          <div className="menu-item">
            <span>App settings</span>
          </div>
          <div className="menu-item">
            <span>Privacy</span>
          </div>
          <div className="menu-item">
            <span>Help</span>
          </div>
          <div className="menu-item">
            <span>Logout</span>
          </div>
          <div className="menu-item version">
            <span>Version: 11.15.2(45) 5.0.1-001</span>
          </div>
          <div className="menu-item placeholder"></div>
        </div>
      </div>
    )
  }
}
