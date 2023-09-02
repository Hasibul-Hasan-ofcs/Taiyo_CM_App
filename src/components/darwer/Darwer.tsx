import React, { useContext } from "react";
import style from "./drawer.module.css";
import { RxCross1 } from "react-icons/rx";
import { Link } from "react-router-dom";
import { MainContext } from "../../providers/ContextProvider";
import { BsBarChartLineFill } from "react-icons/bs";
import { RiContactsBookFill } from "react-icons/ri";

const Drawer = () => {
  const contextData = useContext(MainContext);

  let sideBarActiveData = contextData?.sideBarActive,
    setSideBarActiveData = contextData?.setSideBarActive;

  let cstmStyle, overlayStyle, closeBtnStyle;

  if (sideBarActiveData) {
    cstmStyle = {
      display: "block",
      left: 0,
    };

    overlayStyle = {
      display: "block",
    };

    closeBtnStyle = {
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
    };
  }

  const closeSideBarHandler = () => {
    if (setSideBarActiveData) setSideBarActiveData(false);
  };

  return (
    <>
      <div
        className={style.overlay}
        style={overlayStyle}
        onClick={closeSideBarHandler}
      ></div>
      <button
        className={style.close_sidebar_btn}
        style={closeBtnStyle}
        onClick={closeSideBarHandler}
      >
        <RxCross1></RxCross1>
      </button>
      <div className={style.drawer} style={cstmStyle}>
        <div className={`${style.drawer_items} flex flex-col p-5 gap-3`}>
          <Link
            to="/"
            className={`flex items-center gap-2 border ${style.bs_common}`}
          >
            <RiContactsBookFill></RiContactsBookFill>
            <span className="text-xl">Contacts</span>
          </Link>
          <Link
            to="/chartsandmaps"
            className={`flex items-center gap-2 border ${style.bs_common}`}
          >
            <BsBarChartLineFill></BsBarChartLineFill>
            <span className="text-xl">Charts and Maps</span>
          </Link>
        </div>
      </div>
    </>
  );
};

export default Drawer;
