import { Tab, Tabs } from "@nextui-org/react";
import Overview from "./overview";
import CommingSoon from "../../commingSoon";
import { IGame } from "../../../interfaces/game";
import { FC } from "react";

interface Props {
  gameData: IGame;
}

const TabBar: FC<Props> = ({ gameData }) => {
  return (
    <Tabs variant="underlined" color="primary" aria-label="Tabs variants">
      <Tab key="overview" title="Overview">
        <Overview gameData={gameData} />
      </Tab>
      <Tab key="comment" title="Rating">
        <CommingSoon />
      </Tab>
    </Tabs>
  );
};

export default TabBar;
