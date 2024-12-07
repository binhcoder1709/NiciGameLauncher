import MainTitle from "../components/detail/MainTitle";
import TabBar from "../components/detail/tabBar";

export default function Detail() {
  return (
    <>
      <div className="flex flex-col gap-3">
        <MainTitle />
        <TabBar/>
      </div>
    </>
  );
}
