import { Tab, Tabs } from "@nextui-org/react";
import ListGame from "./listGame";
import CommingSoon from "../../commingSoon";

export default function TabBar() {
  return (
    <>
      <div>
        <Tabs variant={"underlined"} color="primary">
          <Tab key="all" title="All">
            <ListGame/>
          </Tab>
          <Tab key="favorites" title="Favorites"><CommingSoon/></Tab>
        </Tabs>
        
      </div>
    </>
  );
}
