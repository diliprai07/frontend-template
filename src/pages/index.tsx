import * as React from "react";
import SideBar from "../components/layout/sidebar";
import ResumeMainForm from "../components/resume-detail/resume-main-form";

const HomePage = () => {
  return (
    <div className="container">
      <SideBar />
      <div className="content-main">
        <ResumeMainForm />
      </div>
    </div>
  );
};

export default HomePage;
