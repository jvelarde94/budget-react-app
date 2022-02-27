import React from 'react'
import Button from '@mui/material/Button'

const Reset = ({onClick}) => {
  return (
    <div className="reset">
        <Button variant="contained" color="error" className="reset-data" onClick={onClick}>Clear all</Button>
    </div>
  )
}

export default Reset