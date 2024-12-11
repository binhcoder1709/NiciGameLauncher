import {
  Dropdown,
  DropdownItem,
  DropdownMenu,
  DropdownTrigger,
  useDisclosure,
} from "@nextui-org/react";
import InstallGameModal from "./InstallGameModal";
import { useEffect, useState } from "react";
import { IGame, IGameResponse } from "../../../../interfaces/game";
import { userUrl } from "../../../../apis";
import Cookies from "js-cookie";
import { IUserLibraryResponse } from "../../../../interfaces/user";

export default function ListGame() {
  const [games, setGames] = useState<IGame[]>([]);
  console.log(games);
  
  const { isOpen, onOpen, onOpenChange } = useDisclosure();

  const userCookie = Cookies.get("user");
  if (!userCookie) return;
  const parseCookie = JSON.parse(userCookie);

  const fetchData = async () => {
    try {
      const response = await userUrl.get<IUserLibraryResponse>(
        `/library/${parseCookie.id}`
      );
      if (response.status === 200 && response.data.data)
        setGames(response.data.data);
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
    {
      name: "the axis unseen",
      image:
        "https://cdn1.epicgames.com/spt-assets/315690ce6cc14e97851dc45c604270c4/the-axis-unseen-1yki8.jpg?resize=1&w=360&h=480&quality=medium",
      price: 261000,
    },
  ];
  return (
    <>
      <div className="flex justify-between gap-y-5 flex-wrap">
        {games.map((item, index) => (
          <div key={index} className="w-[19%] flex flex-col gap-1">
            <button onClick={onOpen}>
              <img
                className="w-full h-[300px] object-cover transition rounded-lg hover:brightness-125 active:brightness-110"
                src={item.banner_image}
                alt=""
              />
            </button>
            <InstallGameModal onOpenChange={onOpenChange} isOpen={isOpen} />
            <div className="flex justify-between">
              <p className="font-bold capitalize text-ellipsis text-nowrap overflow-hidden">
                {item.game_name}
              </p>
              <Dropdown className="bg-black">
                <DropdownTrigger>
                  <button>
                    <svg
                      className="w-6 h-6 text-gray-800 dark:text-white"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      fill="none"
                      viewBox="0 0 24 24"
                    >
                      <path
                        stroke="currentColor"
                        stroke-linecap="round"
                        stroke-width="2"
                        d="M6 12h.01m6 0h.01m5.99 0h.01"
                      />
                    </svg>
                  </button>
                </DropdownTrigger>
                <DropdownMenu aria-label="Static Actions">
                  <DropdownItem key="new">New file</DropdownItem>
                  <DropdownItem key="copy">Copy link</DropdownItem>
                  <DropdownItem key="edit">Edit file</DropdownItem>
                  <DropdownItem
                    key="delete"
                    className="text-danger"
                    color="danger"
                  >
                    Delete file
                  </DropdownItem>
                </DropdownMenu>
              </Dropdown>
            </div>
            <span className="text-xs text-white/50 flex items-center gap-1">
              <svg
                className="w-4 h-4 text-gray-800 dark:text-white"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  fill-rule="evenodd"
                  d="M13 11.15V4a1 1 0 1 0-2 0v7.15L8.78 8.374a1 1 0 1 0-1.56 1.25l4 5a1 1 0 0 0 1.56 0l4-5a1 1 0 1 0-1.56-1.25L13 11.15Z"
                  clip-rule="evenodd"
                />
                <path
                  fill-rule="evenodd"
                  d="M9.657 15.874 7.358 13H5a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-4a2 2 0 0 0-2-2h-2.358l-2.3 2.874a3 3 0 0 1-4.685 0ZM17 16a1 1 0 1 0 0 2h.01a1 1 0 1 0 0-2H17Z"
                  clip-rule="evenodd"
                />
              </svg>
              Install
            </span>
          </div>
        ))}
      </div>
    </>
  );
}
