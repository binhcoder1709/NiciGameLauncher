import TabBar from "../components/library/tabBar";

export default function Library() {
  return (
    <div className="flex flex-col gap-4 pb-10">
      <h1 className="text-3xl font-bold">Library</h1>
      {/* tab bar */}
      <TabBar />
    </div>
  );
}
