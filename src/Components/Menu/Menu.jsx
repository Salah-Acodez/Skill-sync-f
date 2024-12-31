import React, { useState } from "react";
import { useNavigate } from "react-router";
import "./Menu.css";
import dashboard_icon from "../../assets/category-2.svg";
import p_tracker from "../../assets/p-tracker.svg";
import goal_icon from "../../assets/goal.svg";
import assessment_icon from "../../assets/book.svg";

const Menu = () => {
  const [activeItem, setActiveItem] = useState("dashboard");
  const navigate = useNavigate();

  const menuItems = [
    { id: "dashboard", icon: dashboard_icon, url: "/dashboard", alt: "dashboard" },
    { id: "p-tracker", icon: p_tracker, url: "/productivity-tracker", alt: "productivity tracker" },
    { id: "goal-tracker", icon: goal_icon, url: "/goal-tracker", alt: "goal tracker" },
    { id: "assessment-tracker", icon: assessment_icon, url: "/assessment-tracker", alt: "assessment tracker" },
  ];

  const handleMenuClick = (id, url) => {
    setActiveItem(id);
    navigate(url);
  };

  return (
    <div className="menu_container">
      <div className="menu_wrapper">
        <ul>
          {menuItems.map((item) => (
            <li key={item.id}>
              <div
                className={`navbar_icon ${activeItem === item.id ? "active" : ""}`}
                onClick={() => handleMenuClick(item.id, item.url)}
              >
                <img src={item.icon} alt={item.alt} className="svg_icon" />
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Menu;
