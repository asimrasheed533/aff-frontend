import { useEffect, useState } from "react";

import Footer from "../components/footer";
import { Head } from "@router";
import Header from "../components/header";
import Loading from "./Loading";
import { Outlet, useLocation } from "react-router-dom";

export default () => {
  const location = useLocation();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 1000);
  }, [location.pathname]);

  return loading ? (
    <Loading />
  ) : (
    <>
      <Head
        title="AFF | Advance Food Flavors"
        image="/favicon.svg"
        url="https://advanceaff-webs.web.app/"
        description="AFF | Advance Food Flavors"
      />
      <Header />
      <Outlet />
      <Footer />
    </>
  );
};
