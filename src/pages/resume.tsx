import * as React from "react";
import SideBar from "../components/layout/sidebar";
import ResumeDetail from "../components/resume-detail/resume-detail";

const Resume = () => {
  return (
    <div className="container">
      <SideBar />
      <div className="content-main">
        <ResumeDetail />
      </div>
    </div>
  );
};

export default Resume;
