import React from "react";
import uploadIcon from "../assets/upload_black_24dp.svg";
import Oracle from "../assets/Oracle-Logo-For-Website.png";
import dropup from "../assets/Group 10162.svg";
import dropdown from "../assets/Group 10163.svg";
import checkbox from "../assets/check_box_black_24dp-3.svg";
import active from "../assets/Group 10073.svg";
import inactive from "../assets/Group 10074.svg";

const RightBar = () => {
  return (
    <div>
      <h4 className="org-set">Org Setup</h4>

      {/* title and buttons  */}
      <div className="scroll-data">
        <div className="d-flex-spacebetween upload-container">
          <div>
            <p className="pb5">Details</p>
            <p className="light-grey text14">
              Page to configure all the company details
            </p>
          </div>
          <div className="d-flex-row">
            <button className="upload-btn">
              {" "}
              <img src={uploadIcon} alt="up" />
              Bulk Upload
            </button>
            <button className="save-btn">Save</button>
            <img src={dropup} alt="drop" />
          </div>
        </div>
        <div className="form-wrapper">
          <div className="form-inputs">
            <div className="onchange" style={{ position: "relative" }}>
              <p>Change</p>
              <img src={Oracle} alt="orancle" width={"100%"} />
            </div>
            <div>
              <p className="form-title pb10">Organisation Logo</p>
              <p className="light-grey font14 pb10">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry.
              </p>
              <p className="error">
                Preferred Image Size: 240px x 240px @ 72 DPI Maximum size of
                1MB.
              </p>
            </div>
            <div className="form-grp">
              <h5>Org id</h5>
              <input placeholder="Enter Org Id" />
            </div>
            <div className="form-grp">
              <h5>City name</h5>
              <input placeholder="Enter City name" />
            </div>
            <div className="form-grp">
              <h5>Org name</h5>
              <input placeholder="Enter Org name" />
            </div>
            <div className="form-grp">
              <h5>Team name</h5>
              <input placeholder="Enter Team name" />
            </div>
            <div className="form-grp">
              <h5>No. of Integrations</h5>
              <input placeholder="Enter No. of Integrations" />
            </div>
            <div className="form-grp">
              <h5>Team Count</h5>
              <input placeholder="Enter Team Count" />
            </div>
            <div className="form-grp">
              <h5>Similar Month</h5>
              <input placeholder="Enter Similar Month" />
            </div>
            <div className="form-grp">
              <h5>Go Live month</h5>
              <input type="date" placeholder="Enter Go Live month" />
            </div>
            <div className="form-grp">
              <h5>Integration Months</h5>
              <input type="date" placeholder="Enter Integration Months" />
            </div>
            <div className="form-grp">
              <h5>TAT for Integration</h5>
              <input type="date" placeholder="TAT for Integration" />
            </div>
            <div className="form-grp">
              <h5>AI cycle</h5>
              <input type="date" placeholder="Enter AI cycle" />
            </div>
            <div className="form-grp">
              <h5>Intermediate Date</h5>
              <input type="date" placeholder="Enter Intermediate Date" />
            </div>
            <div className="form-grp">
              <h5>ERP Date(Agreed)</h5>
              <input type="date" placeholder="ERP Date(Agreed)d" />
            </div>
            <div className="form-grp">
              <h5>ISP Date(Agreed)</h5>
              <input type="date" placeholder="Enter ISP Date(Agreed)" />
            </div>
            <div className="form-grp">
              <h5>Active AI Time</h5>
              <input placeholder="Enter Active AI Time" />
            </div>
            <div type="date" className="form-grp">
              <h5>Active AI QC Time</h5>
              <input placeholder="Enter Active AI QC Time" />
            </div>
            <div type="date" className="form-grp"></div>
            <div type="date" className="form-grp d-flex-row">
              <img src={checkbox} alt="img" />
              <h5>Monthly Cycle</h5>
            </div>
            <div className="form-grp switch-btn1 d-flex-spacebetween">
              ERP Module (N/Y) <img alt="active" src={active} />
            </div>
            <div className="form-grp switch-btn2 d-flex-spacebetween">
              AI Format (N/Y) <img alt="inactive" src={inactive} />
            </div>
          </div>
        </div>
        <br />
        <br />
        <div className="enlarge-grp">
          <div>
            <h3 className="pb5">Lock Setup</h3>
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry.
            </p>
          </div>
          <img src={dropdown} alt="drop" />
        </div>
        <div className="enlarge-grp">
          <div>
            <h3 className="pb5">Lock Setup</h3>
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry.
            </p>
          </div>
          <img src={dropdown} alt="dirodow" />
        </div>
        <div className="enlarge-grp">
          <div>
            <h3 className="pb5">Lock Setup</h3>
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry.
            </p>
          </div>
          <img src={dropdown} alt="dropfown" />
        </div>
      </div>
    </div>
  );
};

export default RightBar;
