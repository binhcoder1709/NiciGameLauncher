import { Button, Spinner } from "@nextui-org/react";
import { FC, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { IGame } from "../../../../../interfaces/game";
import { formatVND } from "../../../../../utils/formatMoney";
import { userUrl } from "../../../../../apis";
import Cookies from "js-cookie";
import { IUserResponse } from "../../../../../interfaces/user";

interface Props {
  gameData: IGame;
}

const LogoAndBtn: FC<Props> = ({ gameData }) => {
  const [isInLib, setIsInLib] = useState<boolean>(false);
  const [loading1, setLoading1] = useState<boolean>(false);
  const [loading2, setLoading2] = useState<boolean>(false);
  const [loading3, setLoading3] = useState<boolean>(false);
  const navigate = useNavigate();
  const handleInstallGame = () => {
    setLoading1(true);
    setTimeout(() => {
      setLoading1(false);
      navigate("/checkout");
    }, 2000);
  };

  const userCookie = Cookies.get("user");
  if (!userCookie) return;
  const parseCookie = JSON.parse(userCookie);

  const handleCheckout = () => {};

  const handleCheckLibrary = async () => {
    try {
      const response = await userUrl.get<IUserResponse>(`/${parseCookie.id}`);
      if (response.status === 200 && response.data.data) {
        const find = response.data.data.library.find(
          (item) => item === gameData.id
        );
        if (find) setIsInLib(true);
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    handleCheckLibrary();
  }, []);

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
        <img
          className="w-full h-[150px] object-cover"
          src={gameData?.logo}
          alt=""
        />
      </div>
      <div>
        <span className="font-bold text-lg">
          {gameData.price === 0 ? "Free" : formatVND(gameData.price)}
        </span>
      </div>
      <div className="flex flex-col gap-2">
        <Button
          onClick={gameData.price === 0 ? handleInstallGame : handleCheckout}
          className={`w-full py-6 ${
            isInLib ? "bg-[#f29b24]" : ""
          } font-semibold`}
          color="primary"
        >
          {loading1 ? (
            <Spinner color="white" />
          ) : gameData.price == 0 ? (
            isInLib ? (
              "In Library"
            ) : (
              "Get"
            )
          ) : (
            "Buy now"
          )}
        </Button>
        {isInLib ? (
          ""
        ) : (
          <>
            {" "}
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
          </>
        )}
      </div>
    </div>
  );
};

export default LogoAndBtn;
