import React from 'react'
import prev from '../../../images/prev.png'

export const RightButton = (onClick, onDisable) => {
  return (
    <img
      src={prev}
      alt="next"
      height="35px"
      width="35px"
      onClick={onClick}
      onDisable={onDisable}
      style={{ float: "right", cursor: "pointer", marginTop: "220px" }}

    />
  )
}
