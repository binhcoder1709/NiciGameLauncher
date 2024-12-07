import MainLogo from "../logo/MainLogo";
import NavBar from "./NavBar";

export default function MainNav() {
  return (
    <>
      <div className="w-full">
        {/* logo */}
        <div className="h-[100px] flex justify-center">
          <MainLogo />
        </div>
        {/* navbar */}
        <NavBar />
      </div>
    </>
  );
}
