import React from 'react'
import './ProductivityTracker.css'
import filter from '../../assets/filter.png'
import Timeline from '../../Components/Timeline/Timeline'

const ProductivityTracker = () => {
  return (
    <div className='productivity_tracker_container'>
      <div className="productivity_tracker_header">
        <h1>Productivity Tracker</h1>
        <button><img src={filter} alt="filter" /><span>Filter</span></button>
      </div>
      <div className="productivity_tracker_body">
        <Timeline/>
      </div>
    </div>
  )
}

export default ProductivityTracker