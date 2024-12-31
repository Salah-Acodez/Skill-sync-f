import React from 'react';
import { useSortable } from '@dnd-kit/sortable';
import { CSS } from '@dnd-kit/utilities';
import DnD_icon from '../../assets/DnD-icon.png';
import edit_icon from '../../assets/edit-icon.png';

export function SortableGoal({ goal }) {
  const {
    attributes,
    listeners,
    setNodeRef,
    transform,
    transition,
    isDragging,
  } = useSortable({ id: goal.id });

  const style = {
    transform: CSS.Transform.toString(transform),
    transition,
  };

  return (
    <div
      ref={setNodeRef}
      style={style}
      className={`goal-card ${isDragging ? 'dragging' : ''}`}
      {...attributes}
      {...listeners}
    >
        <div className="dnd_icon">
          <img src={DnD_icon} alt={"icon dnd"} />
        </div>
      <div className="goal-content">
        <div className="goal-header">
          <h3>{goal.name}</h3>
          <button className="more-options"><img src={edit_icon} alt="edit" /></button>
        </div>
        <p className="goal-description">{goal.description}</p>
        <button className={`status-button ${goal.status}`}>
          {goal.status === 'done' ? 'Done' : 'Start'}
        </button>
      </div>
    </div>
  );
}
