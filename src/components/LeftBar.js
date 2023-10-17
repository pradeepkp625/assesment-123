import React from "react";
import dashboard from "../assets/dashboard_black_24dp.svg";
import work from "../assets/work_history_black_24dp.svg";
import tune from "../assets/tune_black_24dp.svg";
import auto from "../assets/auto_graph_black_24dp.svg";
import read from "../assets/read_more_black_24dp.svg";
const LeftBar = () => {
  return (
    <div className="dashboard-wrapper">
      <div className="menu-wrapper menus">
        <div>
          <img src={dashboard} alt="dashboard" />
          <p className="small-text">DashBoard</p>
        </div>
        <div>
          <img src={work} alt="work" />
          <p className="small-text">Monthly Process</p>
        </div>
        <div className="active">
          <img src={tune} alt="tune" />
          <p className="small-text">Super Configura</p>
        </div>
        <div>
          <img src={auto} alt="auto" />
          <p className="small-text">Master Reports</p>
        </div>
        <div>
          <img src={read} alt="read" />
          <p className="small-text">More</p>
        </div>
      </div>
      <div className="dashboard-content">
        <br />
        <p className="font14 pb10">
          <center>Services Offered</center>
        </p>
        <div className="org-setup">org setup</div>
      </div>
    </div>
  );
};

export default LeftBar;
