import React from "react";
import "./Dashboard.css";
import assessment_logo from "../../assets/assessment-score.png";
import daily_goal_logo from "../../assets/daily-goal.png";
import loader from "../../assets/loader.png";
import MonthlyChart from "../../Components/MonthlyChart/Monthly";
import badge1 from "../../assets/badge1.png";
import badge2 from "../../assets/badge2.png";
import badge3 from "../../assets/badge3.png";
import badge4 from "../../assets/badge4.png";
import badge5 from "../../assets/badge5.png";
import first from "../../assets/first.png";
import badge_first from "../../assets/badge-first.png";
import frame_39 from "../../assets/leaderboard/frame-39.png";
import frame_36 from "../../assets/leaderboard/frame-36.png";
import frame from "../../assets/leaderboard/Frame.png";
import frame_40 from "../../assets/leaderboard/Frame-40.png";
import frame_40_1 from "../../assets/leaderboard/Frame-40-1.png";
import frame_40_2 from "../../assets/leaderboard/Frame-40-2.png";
import frame_40_3 from "../../assets/leaderboard/Frame-40-3.png";
import frame_40_4 from "../../assets/leaderboard/Frame-40-4.png";
import group from "../../assets/leaderboard/Group.png";
import group_1 from "../../assets/leaderboard/Group-1.png";
import group_22 from "../../assets/leaderboard/Group-22.png";
import group_23 from "../../assets/leaderboard/Group-23.png";
import group_2 from "../../assets/leaderboard/Group-2.png";
import group_3 from "../../assets/leaderboard/Group-3.png";

const Dashboard = () => {
  return (
    <div className="dashboard_container">
      <div className="dashboard_left">
        <div className="dashboard_left_top">
          <div className="score_container">
            <div className="score_logo">
              <img src={assessment_logo} alt="assessment logo" />
            </div>

            <div className="score">
              <p className="score_p">
                8.2/10 <span className="assessment_name">score</span>
              </p>
              <p className="assessment_name">Assessment name</p>
            </div>
          </div>
          <div className="score_container daily_goal_container">
            <div className="score_logo">
              <img src={daily_goal_logo} alt="daily_goal_logo" />
            </div>

            <div className="score">
              <p className="score_p daily_goal">
                Daily goal completed <span>1/2</span>
              </p>
              <div className="loader_logo">
                <img src={loader} className="loader" alt="loader" />
              </div>
            </div>
          </div>
        </div>
        <div className="dashboard_left_middle">
          <div className="productivity_chart_wrapper">
            <h1>Productivity</h1>
            <MonthlyChart />
          </div>
        </div>
        <div className="dashboard_left_bottom">
          <div className="mybadges_wrapper">
            <h2>My Badges</h2>
            <ul className="badges_list">
              <li>
                <div className="badge">
                  <img src={badge1} alt="badge1" />
                </div>
              </li>
              <li>
                <div className="badge">
                  <img src={badge2} alt="badge2" />
                </div>
              </li>
              <li>
                <div className="badge">
                  <img src={badge3} alt="badge3" />
                </div>
              </li>
              <li>
                <div className="badge">
                  <img src={badge4} alt="badge4" />
                </div>
              </li>
              <li>
                <div className="badge">
                  <img src={badge5} alt="badge4" />
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="dashboard_right">
        <h1>Leaderboard</h1>
        <div className="first_conatiner">
          <div className="first_image">
            {" "}
            <img src={first} alt="first" />
          </div>
          <div className="name_box">
            <h2>Jakob Levin</h2>
            <p>2467 points</p>
          </div>
          <div className="badge_earned">
            <img src={badge_first} className="first_badge" alt="" />
          </div>
        </div>
        <div className="remaining_container">
          <div className="prize_container">
            <div className="image_first"><img src={frame_39} alt="test" /></div>
            <div className="image_second"><img src={group} alt="frame" /></div>
          </div>
          <div className="prize_container">
            <div className="image_first"><img src={frame_36} alt="test" /></div>
            <div className="image_second"><img src={frame} alt="frame" /></div>
          </div>
          <div className="prize_container">
            <div className="image_first"><img src={frame_40} alt="test" /></div>
            <div className="image_second"><img src={group_1} alt="frame" /></div>
          </div>
          <div className="prize_container">
            <div className="image_first"><img src={frame_40_1} alt="test" /></div>
            <div className="image_second"><img src={group_22} alt="frame" /></div>
          </div>
          <div className="prize_container">
            <div className="image_first"><img src={frame_40_2} alt="test" /></div>
            <div className="image_second"><img src={group_2} alt="frame" /></div>
          </div>
          <div className="prize_container">
            <div className="image_first"><img src={frame_40_3} alt="test" /></div>
            <div className="image_second"><img src={group_23} alt="frame" /></div>
          </div>
          <div className="prize_container">
            <div className="image_first"><img src={frame_40_4} alt="test" /></div>
            <div className="image_second"><img src={group_3} alt="frame" /></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
