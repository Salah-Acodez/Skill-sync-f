import React from "react";
import "./Timeline.css";
import timeline_goal from "../../assets/timeline_goal.png";
import timeline_assessment from "../../assets/timeline_assessment.png";
import timeline_task from "../../assets/timeline_task.png";

const Timeline = () => {
  const items = [
    {
      date: "Today",
      type: "timeline_goal",
      name: "Goal name",
      change: "+0.3%",
      changeType: "positive",
    },
    {
      date: "12 Dec 2024",
      type: "timeline_assessment",
      name: "Assessment Name",
      change: "+0.1%",
      changeType: "positive",
    },
    {
      date: "12 Dec 2024",
      type: "timeline_task",
      name: "Task Name",
      change: "-0.1%",
      changeType: "negative",
    },
    {
      date: "11 Dec 2024",
      type: "timeline_goal",
      name: "Goal name",
      change: "+0.2%",
      changeType: "positive",
    },
    {
      date: "8 Dec 2024",
      type: "timeline_assessment",
      name: "Assessment Name",
      change: "+0.1%",
      changeType: "positive",
    },
    {
      date: "7 Dec 2024",
      type: "timeline_task",
      name: "Task Name",
      change: "+0.3%",
      changeType: "positive",
    },
  ];

  return (
    <div className="timeline_container">

        <div className="dashed_line"></div>


    {items.map((item, index) => (
        <div className="timeline" key={index}>
          <div className="timeline_logo">
            <img src={item.type === "timeline_goal" ? timeline_goal : item.type === "timeline_assessment" ? timeline_assessment : timeline_task} alt="goal icon" />
          </div>
          <div className="timeline_body">          
            <h2>{item.name}</h2>
            <h3 className={item.changeType === "positive" ? "positive" : "negative"}>{item.change}</h3>
          </div>
          <div className="timeline_sub_header">
            <p>{item.date}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Timeline;
