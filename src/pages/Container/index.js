import React, { Fragment } from "react";
import Header from "../../Components/Header/";
import Footer from "../../Components/Footer/Footer";

export default function LandBoxContainer({
  activeUser,
  showWaxModal,
  onUserLogout,
  children,
}) {
  return (
    <Fragment>

      <div className="main-content">
        <Header
          activeUser={activeUser}
          showWaxModal={showWaxModal}
          onUserLogout={onUserLogout}
        />

        {children}
      </div>

      <Footer />
    </Fragment>
  );
}
