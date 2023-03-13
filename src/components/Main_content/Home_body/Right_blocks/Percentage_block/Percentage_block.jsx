import React from 'react'
import './Percentage_block.css'
const Percentage_block = () => {
  return (
    <div className="Percentage_block">
        <div className="column_percentage">
        <div className="Percentage_completed">
        Training completed
        </div>
        <div className="Out_of">
          Out of 100%
        </div>
        </div>
        <div className="Percentage">
        36%
        </div>
    </div>
  )
}

export default Percentage_block