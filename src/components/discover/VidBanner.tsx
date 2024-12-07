import video from "../../assets/video/VidTwo.mp4";

export default function VidBanner() {
  return (
    <>
      <div className="w-full h-[570px] flex justify-between">
        <div className="w-[79%]">
          <video
            autoPlay
            muted
            className="w-full object-cover h-full rounded-lg"
            src={video}
          />
        </div>
        <div className=" w-[20%] h-full rounded-lg justify-between flex flex-col">
          <div className="w-full rounded-lg bg-[#28282c] h-[16%] gap-2 p-4 flex items-center">
            <div className="w-[30%] h-full">
              <img
                className="h-full w-full object-cover rounded-md"
                src="https://cdn2.unrealengine.com/egs-warhammer-space-marine-2-carousel-thumb-1200x1600-21e79fdc1511.jpg?resize=1&w=96&h=128&quality=medium"
                alt=""
              />
            </div>
            <div className="w-[70%]">
              <span className="h-full w-full  break-words">sdâdddddddddddddddd</span>
            </div>
          </div>
          <div className="w-full rounded-lg hover:bg-[#28282c] h-[16%] gap-2 p-4 flex items-center">
            <div className="w-[30%] h-full">
              <img
                className="h-full w-full object-cover rounded-md"
                src="https://cdn2.unrealengine.com/egs-warhammer-space-marine-2-carousel-thumb-1200x1600-21e79fdc1511.jpg?resize=1&w=96&h=128&quality=medium"
                alt=""
              />
            </div>
            <div className="w-[70%]">
              <span className="h-full w-full  break-words">sdâdddddddddddddddd</span>
            </div>
          </div>
          <div className="w-full rounded-lg hover:bg-[#28282c] h-[16%] gap-2 p-4 flex items-center">
            <div className="w-[30%] h-full">
              <img
                className="h-full w-full object-cover rounded-md"
                src="https://cdn2.unrealengine.com/egs-warhammer-space-marine-2-carousel-thumb-1200x1600-21e79fdc1511.jpg?resize=1&w=96&h=128&quality=medium"
                alt=""
              />
            </div>
            <div className="w-[70%]">
              <span className="h-full w-full  break-words">sdâdddddddddddddddd</span>
            </div>
          </div>
          <div className="w-full rounded-lg hover:bg-[#28282c] h-[16%] gap-2 p-4 flex items-center">
            <div className="w-[30%] h-full">
              <img
                className="h-full w-full object-cover rounded-md"
                src="https://cdn2.unrealengine.com/egs-warhammer-space-marine-2-carousel-thumb-1200x1600-21e79fdc1511.jpg?resize=1&w=96&h=128&quality=medium"
                alt=""
              />
            </div>
            <div className="w-[70%]">
              <span className="h-full w-full  break-words">sdâdddddddddddddddd</span>
            </div>
          </div>
          <div className="w-full rounded-lg hover:bg-[#28282c] h-[16%] gap-2 p-4 flex items-center">
            <div className="w-[30%] h-full">
              <img
                className="h-full w-full object-cover rounded-md"
                src="https://cdn2.unrealengine.com/egs-warhammer-space-marine-2-carousel-thumb-1200x1600-21e79fdc1511.jpg?resize=1&w=96&h=128&quality=medium"
                alt=""
              />
            </div>
            <div className="w-[70%]">
              <span className="h-full w-full  break-words">sdâdddddddddddddddd</span>
            </div>
          </div>
          <div className="w-full rounded-lg hover:bg-[#28282c] h-[16%] gap-2 p-4 flex items-center">
            <div className="w-[30%] h-full">
              <img
                className="h-full w-full object-cover rounded-md"
                src="https://cdn2.unrealengine.com/egs-warhammer-space-marine-2-carousel-thumb-1200x1600-21e79fdc1511.jpg?resize=1&w=96&h=128&quality=medium"
                alt=""
              />
            </div>
            <div className="w-[70%]">
              <span className="h-full w-full  break-words">sdâdddddddddddddddd</span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
