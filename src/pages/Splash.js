import React from 'react'

export const Splash = (props) => {
  return (
    <div className={props.fadeOut ? "splash animated fadeOut" : "splash"}>
    <div className="animated fadeIn">
      <img className="animated pulse slow infinite" src="netflix512.png" alt="logo"></img>
      </div>
    </div>
  )
}
