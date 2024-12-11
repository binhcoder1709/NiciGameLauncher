import ImageBanner from "../components/discover/ImageBanner";
import PopularGame from "../components/discover/popularGame";
import VidBanner from "../components/discover/VidBanner";

export default function Discover() {  
  
  
  return (
    <>
      <div className="flex flex-col gap-14 pb-10">
        <ImageBanner />
        <VidBanner />
        <PopularGame />
      </div>
    </>
  );
}
