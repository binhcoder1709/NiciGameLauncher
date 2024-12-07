import MainNav from "../components/nav";
import MainHeader from "../components/header";
import { Outlet, useNavigate } from "react-router-dom";
import Cookies from "js-cookie";
import { useEffect } from "react";

export default function MainLayout() {
  const navigate = useNavigate();
  const checkCookie = () => {
    if (!Cookies.get("AT") || !Cookies.get("RT") || !Cookies.get("data")) {
      navigate("/login");
    }
  };
  useEffect(() => {
    checkCookie();
  }, []);
  return (
    <div className="w-full flex">
      <div className="w-[16%] h-screen ">
        <MainNav />
      </div>
      <div className="px-9 w-[84%] ">
        <div className="w-full">
          <MainHeader />
        </div>
        <div className="overflow-x-auto h-[calc(100vh-100px)] w-full ">
          <Outlet />
        </div>
      </div>
    </div>
  );
}
