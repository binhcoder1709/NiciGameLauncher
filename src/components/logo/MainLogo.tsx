export default function MainLogo() {
  return (
    <div className="flex items-center cursor-pointer" onClick={()=> window.location.reload()}>
      <h1 className="text-2xl text-white">Hight</h1>
      <p className="text-2xl text-[#e46767]">Zone.</p>
    </div>
  );
}
