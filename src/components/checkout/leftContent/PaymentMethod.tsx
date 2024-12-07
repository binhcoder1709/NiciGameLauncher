import { Radio, RadioGroup } from "@nextui-org/react";
import React from "react";
import MainLogo from "../../logo/MainLogo";

export default function PaymentMethod() {
  return (
    <>
      <div className="text-black">
        {/* wallet */}
        <div>
          <h1 className="font-normal">HIGHTZONE WALLET</h1>
          <button className="text-left p-3 bg-[#f7f7f7] w-full">
            {/* <MainLogo /> */}
            WALLET 0đ
          </button>
        </div>
      </div>
    </>
  );
}
