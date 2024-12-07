import { Tab, Tabs } from "@nextui-org/react";
import Overview from "./overview";
import CommingSoon from "../../commingSoon";

export default function TabBar() {
  return (
    <Tabs variant="underlined" color="primary" aria-label="Tabs variants">
      <Tab key="overview" title="Overview">
        <Overview />
      </Tab>
      <Tab key="comment" title="Rating" >
        <CommingSoon/>
      </Tab>
    </Tabs>
  );
}
