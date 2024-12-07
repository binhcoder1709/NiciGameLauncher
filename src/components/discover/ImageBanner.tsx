export default function ImageBanner() {
  return (
    <>
      <div className="flex justify-between">
        <img
          className="w-[32.5%] object-cover rounded-lg h-[210px]"
          src="https://cdn2.unrealengine.com/fnbr-33-00-c6s1-egs-launcher-keyart-breaker-1920x1080-1920x1080-1f740221098e.jpg?resize=1&w=854&h=480&quality=medium"
          alt=""
        />
        <img
          className="w-[32.5%] object-cover rounded-lg h-[210px]"
          src="https://cdn2.unrealengine.com/en-rewardsboosted2024-breaker-asset-1920x1080-537a9c06b396.jpg?resize=1&w=854&h=480&quality=medium"
          alt=""
        />
        <img
          className="w-[32.5%] object-cover rounded-lg h-[210px]"
          src="https://cdn2.unrealengine.com/egs-fortnite-v-bucks-breaker-1920x1080-474255011968.jpg?resize=1&w=854&h=480&quality=medium"
          alt=""
        />
      </div>
    </>
  );
}
