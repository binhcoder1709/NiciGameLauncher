import {
  Avatar,
  Dropdown,
  DropdownItem,
  DropdownMenu,
  DropdownTrigger,
  Input,
} from "@nextui-org/react";
import {  NavLink, useLocation } from "react-router-dom";

export default function MainHeader() {
  const { pathname } = useLocation();
  return (
    <div className="flex items-center justify-between h-[100px]">
      <div className="flex items-center gap-8">
        <button
          title="Back"
          className="text-white/40 hover:text-white rounded-full"
        >
          <svg
            className="w-6 h-6 text-white/70 transition hover:text-white"
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
              stroke-linejoin="round"
              stroke-width="2"
              d="m14 8-4 4 4 4"
            />
          </svg>
        </button>
        <Input
          type="search"
          placeholder="search game..."
          variant="underlined"
          //   startContent={
          //     <MailIcon className="text-2xl text-default-400 pointer-events-none flex-shrink-0" />
          //   }
        />
        {pathname === "/library" ? (
          ""
        ) : (
          <>
            {" "}
            <NavLink
              className={`${
                pathname === "/" ? "text-white" : "text-[#80888a]"
              }  hover:text-white`}
              to={"/"}
            >
              Discover
            </NavLink>
            <NavLink
              className={`${
                pathname === "/browse" ? "text-white" : "text-[#80888a]"
              }  hover:text-white`}
              to={"/browse"}
            >
              Browse
            </NavLink>
            <NavLink
              className={`${
                pathname === "/news" ? "text-white" : "text-[#80888a]"
              }  hover:text-white`}
              to={"/news"}
            >
              News
            </NavLink>
          </>
        )}
      </div>
      <div className="flex items-center gap-5">
        <NavLink
          className={`${
            pathname === "/wishlist" ? "text-white" : "text-[#80888a]"
          }  hover:text-white`}
          to={"/wishlist"}
        >
          Wishlist
        </NavLink>
        <NavLink
          className={`${
            pathname === "/cart" ? "text-white" : "text-[#80888a]"
          }  hover:text-white`}
          to={"/cart"}
        >
          Cart
        </NavLink>
        <div className="w-[2px] h-[30px] bg-[#404044]"></div>
        <Avatar
          className="bg-[#404044] hover:bg-[#636366] cursor-pointer text-xl text-white"
          size="md"
          fallback={
            <svg
              className="w-6 h-6 text-gray-800 dark:text-white"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                fill-rule="evenodd"
                d="M12 6a3.5 3.5 0 1 0 0 7 3.5 3.5 0 0 0 0-7Zm-1.5 8a4 4 0 0 0-4 4 2 2 0 0 0 2 2h7a2 2 0 0 0 2-2 4 4 0 0 0-4-4h-3Zm6.82-3.096a5.51 5.51 0 0 0-2.797-6.293 3.5 3.5 0 1 1 2.796 6.292ZM19.5 18h.5a2 2 0 0 0 2-2 4 4 0 0 0-4-4h-1.1a5.503 5.503 0 0 1-.471.762A5.998 5.998 0 0 1 19.5 18ZM4 7.5a3.5 3.5 0 0 1 5.477-2.889 5.5 5.5 0 0 0-2.796 6.293A3.501 3.501 0 0 1 4 7.5ZM7.1 12H6a4 4 0 0 0-4 4 2 2 0 0 0 2 2h.5a5.998 5.998 0 0 1 3.071-5.238A5.505 5.505 0 0 1 7.1 12Z"
                clip-rule="evenodd"
              />
            </svg>
          }
        />
        <Dropdown className="bg-[#18181c]">
          <DropdownTrigger>
            <Avatar
              name="B"
              className="bg-[#404044] cursor-pointer hover:bg-[#636366] text-xl text-white"
              size="md"
              src="https://i.pravatar.cc/150?u=a04258114e29026302d"
            />
          </DropdownTrigger>
          <DropdownMenu aria-label="Profile Actions" variant="flat">
            <DropdownItem key="profile" className="h-14 gap-2">
              <p className="font-semibold">Signed in as</p>
              <p className="font-semibold">binhtommy@gmail.com</p>
            </DropdownItem>
            <DropdownItem key="settings">Setting</DropdownItem>
            <DropdownItem key="logout" color="danger">
              Log out
            </DropdownItem>
          </DropdownMenu>
        </Dropdown>
      </div>
    </div>
  );
}
