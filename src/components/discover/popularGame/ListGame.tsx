import { Link } from "react-router-dom";

export default function ListGame() {
  const data = [
    {
      name: "Industry giant 4.0",
      image:
        "https://cdn1.epicgames.com/spt-assets/b7d55c5d63d54d3985b57c35af336be9/industry-giant-40-1ysbq.jpg?resize=1&w=360&h=480&quality=medium",
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
        {data.map((item, index) => (
          <div key={index} className="w-[19%] flex flex-col gap-2">
            <Link to={"/detail"}>
              <img
                className="w-full h-[300px] transition rounded-lg hover:brightness-125 active:brightness-110"
                src={item.image}
                alt=""
              />
            </Link>
            <span className="text-xs text-white/50">Base Game</span>
            <p className="font-bold capitalize">{item.name}</p>
            <span className="text-sm text-white font-semibold">
              {item.price === 0 ? "Free" : `${item.price} đ`}
            </span>
          </div>
        ))}
      </div>
    </>
  );
}
