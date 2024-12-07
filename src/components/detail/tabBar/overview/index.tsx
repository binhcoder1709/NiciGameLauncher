import ImageSlide from "./leftContent/ImageSlide";
import LogoAndBtn from "./rightContent/LogoAndBtn";

export default function Overview() {
  return (
    <>
      <div className="flex w-full justify-between">
        <div className="w-[67.5%]  ">
          <ImageSlide />
        </div>
        <div className="w-[27.5%] ">
          <LogoAndBtn />
        </div>
      </div>
    </>
  );
}
