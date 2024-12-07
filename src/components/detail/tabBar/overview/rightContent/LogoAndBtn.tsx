import { Button, Spinner } from "@nextui-org/react";
import logo from "../../../../../assets/dev/blade-of-god-x-logo-1a1yv.png";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function LogoAndBtn() {
  const navigate = useNavigate();
  const [loading1, setLoading1] = useState<boolean>(false);
  const [loading2, setLoading2] = useState<boolean>(false);
  const [loading3, setLoading3] = useState<boolean>(false);
  const handleClick1 = () => {
    setLoading1(true);
    setTimeout(() => {
      setLoading1(false);
      navigate("/checkout");
    }, 2000);
  };
  const handleClick2 = () => {
    setLoading2(true);
    setTimeout(() => {
      setLoading2(false);
    }, 2000);
  };
  const handleClick3 = () => {
    setLoading3(true);
    setTimeout(() => {
      setLoading3(false);
    }, 2000);
  };
  return (
    <div className="flex flex-col gap-3">
      <div className="p-4 ">
        <img className="w-full h-[150px] object-cover" src={logo} alt="" />
      </div>
      <div>
        <span className="font-bold text-lg">Free</span>
      </div>
      <div className="flex flex-col gap-2">
        <Button
          onClick={handleClick1}
          className="w-full py-6 font-semibold"
          color="primary"
        >
          {loading1 ? <Spinner color="white" /> : "Get"}
        </Button>
        <Button
          onClick={handleClick2}
          className="w-full bg-[#404044] py-6 font-semibold text-white"
        >
          {loading2 ? <Spinner color="white" /> : "Add To Wishlist"}
        </Button>
        <Button
          onClick={handleClick3}
          className="w-full bg-[#404044] py-6 font-semibold text-white"
        >
          {loading3 ? <Spinner color="white" /> : "Add To Cart"}
        </Button>
      </div>
    </div>
  );
}
