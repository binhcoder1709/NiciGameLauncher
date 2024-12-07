import Header from "../components/checkout/leftContent/Header";
import PaymentMethod from "../components/checkout/leftContent/PaymentMethod";

export default function Checkout() {
  //   const n = useNavigate();
  //   const h = () => {
  //     n("/detail");
  //   };
  return (
    <div className="w-full h-screen flex bg-white px-52">
      <div className="w-[65%] h-full p-2">
        <Header />
        <PaymentMethod />
      </div>
      <div className="w-[35%] h-full p-2 bg-slate-100"></div>
    </div>
  );
}
