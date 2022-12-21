import React, { useContext } from "react";
import { useLoaderData } from "react-router-dom";
import { AuthProvider } from "../../UserContext/UserContext";
import Service from "./Service";
import Loading from "../../Components/Loading/Loading"

const Services = () => {
  //collect data from server
  const { pageTitle, pageLoading,setPageLoading } = useContext(AuthProvider);
  pageTitle("Services");
  const services = useLoaderData();
  setPageLoading(true);
  return (
    <>
      <div className={`${pageLoading ? "" : "hidden"}`}>
        <Loading />
      </div>
      <div className={`grid grid-cols-1 md:grid-cols-2 gap-6 lg:grid-cols-3 justify-between my-5 container mx-auto ${pageLoading ? "hidden": ""}`}>
        {services.map((service) => (
          <Service service={service} key={service._id}></Service>
        ))}
        {
          setPageLoading(false)
        }
      </div>
    </>
  );
};

export default Services;
