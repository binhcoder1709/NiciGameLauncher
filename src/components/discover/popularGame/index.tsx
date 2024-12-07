import ListGame from "./ListGame";

export default function PopularGame() {
  return (
    <>
      <div className="flex flex-col gap-4">
        <h2 className="text-2xl font-bold">Popular Game</h2>
        <ListGame/>
      </div>
    </>
  );
}
