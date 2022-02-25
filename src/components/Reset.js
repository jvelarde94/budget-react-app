import React from 'react'

const Reset = ({onClick}) => {
  return (
    <div className="reset">
        <button className="reset-data" onClick={onClick}>Reset</button>
    </div>
  )
}

export default Reset