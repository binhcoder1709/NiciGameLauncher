import MainNav from "../components/nav";
import MainHeader from "../components/header";
import { Outlet } from "react-router-dom";

export default function MainLayout() {
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
