import React from 'react'
import next from '../../../images/next.png'

export const LeftButton = (onClick, onDisable) => {
  return (
    <img
      src={next}
      alt="next"
      height="35px"
      width="35px"
      onClick={onClick}
      onDisable={onDisable}
      style={{ float: "left", cursor: "pointer", marginTop: "220px" }}

    />
  )
}
