import { Link } from "react-router-dom";
import { formatVND } from "../../../utils/formatMoney";
import { useEffect, useState } from "react";
import { IGame } from "../../../interfaces/game";
import Cookies from "js-cookie";
import { userUrl } from "../../../apis";
import { IDashboardResponse } from "../../../interfaces/user";

export default function ListGame() {
  const [games, setGames] = useState<IGame[]>();
 
  const fetchData = async () => {
    try {
      const response = await userUrl.get<IDashboardResponse>(`/dashboard`);
      setGames(response.data.data?.games);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    fetchData();
  }, []);

  const data = [
    {
      name: "Industry giant 4.0",
      image:
        "https://firebasestorage.googleapis.com/v0/b/tommy-studio-93d6f.appspot.com/o/game_assets%2Funnamed.png?alt=media&token=a91a924a-851e-4290-9a11-c58b7d6221ef",
      price: 0,
    },
    {
      name: "two fall (nishu takuatshina)",
      image:
        "https://cdn1.epicgames.com/spt-assets/2d02bff7f771451d95df945f4e09fdfa/two-falls--nishu-takuatshina-1o14i.png?resize=1&w=360&h=480&quality=medium",
      price: 209000,
    },
    {
      name: "blade of god x: orisols",
      image:
        "https://cdn1.epicgames.com/spt-assets/557fb2a2e101498bb9fe6998ee36154b/blade-of-god-x-15b0l.jpg?resize=1&w=360&h=480&quality=medium",
      price: 0,
    },
    {
      name: "AWAKEN - astral blade",
      image:
        "https://cdn1.epicgames.com/spt-assets/ed271d32f51c4563b205007dfad298d9/awaken--astral-blade-1g00u.png?resize=1&w=360&h=480&quality=medium",
      price: 260000,
    },
    {
      name: "the axis unseen",
      image:
        "https://cdn1.epicgames.com/spt-assets/315690ce6cc14e97851dc45c604270c4/the-axis-unseen-1yki8.jpg?resize=1&w=360&h=480&quality=medium",
      price: 261000,
    },
  ];
  return (
    <>
      <div className="flex justify-between">
        {games?.map((item, index) => (
          <div key={index} className="w-[19%] flex flex-col gap-2">
            <Link to={`/detail/${item.id}`}>
              <img
                className="w-full h-[300px] transition object-cover rounded-lg hover:brightness-125 active:brightness-110"
                src={item.banner_image}
                alt=""
              />
            </Link>
            <span className="text-xs text-white/50">Base Game</span>
            <p className="font-bold capitalize">{item.game_name}</p>
            <span className="text-sm text-white font-semibold">
              {item.price === 0 ? "Free" : `${formatVND(item.price)}`}
            </span>
          </div>
        ))}
      </div>
    </>
  );
}
