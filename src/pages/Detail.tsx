import { useEffect, useState } from "react";
import { gameUrl } from "../apis";
import MainTitle from "../components/detail/MainTitle";
import TabBar from "../components/detail/tabBar";
import { IGame, IGameResponse } from "../interfaces/game";
import { useParams } from "react-router-dom";

export default function Detail() {
  const [gameData, setGameData] = useState<IGame>();
  const { id } = useParams();
  const fetchGame = async () => {
    try {
      const response = await gameUrl.get<IGameResponse>(`/${id}`);
      if (response.status === 200 && response.data.data)
        setGameData(response.data.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchGame();
  }, []);
  return (
    <>
      <div className="flex flex-col gap-3">
        {gameData ? (
          <>
            <MainTitle gameData={gameData} />
            <TabBar gameData={gameData} />
          </>
        ) : (
          <p>Loading...</p>
        )}
      </div>
    </>
  );
}
