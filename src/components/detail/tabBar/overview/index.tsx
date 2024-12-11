import { FC } from "react";
import { IGame } from "../../../../interfaces/game";
import ImageSlide from "./leftContent/ImageSlide";
import LogoAndBtn from "./rightContent/LogoAndBtn";

interface Props {
  gameData: IGame;
}

const Overview: FC<Props> = ({ gameData }) => {
  return (
    <>
      <div className="flex w-full justify-between">
        <div className="w-[67.5%]  ">
          <ImageSlide gameData={gameData} />
        </div>
        <div className="w-[27.5%] ">
          <LogoAndBtn gameData={gameData} />
        </div>
      </div>
    </>
  );
};

export default Overview;
