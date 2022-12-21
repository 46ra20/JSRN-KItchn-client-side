import React, { useContext } from "react";
import { Outlet } from "react-router-dom";
import Loading from "../../Components/Loading/Loading";
import { AuthProvider } from "../../UserContext/UserContext";
import PageFooter from "../Footer/PageFooter";
import MenuBar from "../MenuBar/MenuBar";

const LayOut = () => {
  const { pageLoading, setPageLoading } = useContext(AuthProvider);
  setPageLoading(true);
  return (
    <>
      <div className={`${pageLoading ? "" : "hidden"}`}>
        <Loading />
      </div>
      <div className={`${pageLoading ? "hidden" : ""}`}>
        <MenuBar></MenuBar>
        <Outlet></Outlet>
        <PageFooter></PageFooter>
      </div>
    </>
  );
};

export default LayOut;
