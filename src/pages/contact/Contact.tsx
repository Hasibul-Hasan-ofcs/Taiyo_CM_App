import React from "react";
import { Outlet } from "react-router-dom";

const Contact = () => {
  return (
    <div className="py-20">
      <Outlet />
    </div>
  );
};

export default Contact;
