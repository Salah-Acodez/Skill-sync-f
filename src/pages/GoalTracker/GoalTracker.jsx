import React from 'react'
import plus_btn from '../../assets/plus-btn.png'
import './GoalTracker.css'
import GoalDnD from '../../Components/GoalDnD/GoalDnD'

const GoalTracker = () => {
  return (
    <div className='goal_tracker_container'>
        <div className="goal_tracker_header">
            <h1>Personal Goals</h1>
            <button><span>Add New</span><img src={plus_btn} alt="filter" /></button>
        </div>
        <div className="goal_tracker_body">
            <GoalDnD/>
        </div>
    </div>
  )
}

export default GoalTracker