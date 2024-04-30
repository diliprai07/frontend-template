import * as React from "react";
import SideBar from "../components/layout/sidebar";
import ResumeMainForm from "../components/resume-detail/resume-main-form";

const HomePage = () => {
  return (
    <div className="home_container">
      <SideBar />
      <ResumeMainForm />
    </div>
  );
};

export default HomePage;
