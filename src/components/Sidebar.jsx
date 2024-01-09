import React from "react";
import logo from "../assets/logo.svg";
import bottomArrowIconWhite from "../assets/bottomArrowIconWhite.svg";
import homeIcon from "../assets/homeIcon.svg";
import orderIcon from "../assets/orderIcon.svg";
import productsIcon from "../assets/productsIcon.svg";
import deliveryIcon from "../assets/deliveryIcon.svg";
import marketingIcon from "../assets/marketingIcon.svg";
import analyticsIcon from "../assets/analyticsIcon.svg";
import paymentsIcon from "../assets/paymentsIcon.svg";
import toolsIcon from "../assets/toolsIcon.svg";
import discountsIcon from "../assets/discountsIcon.svg";
import audienceIcon from "../assets/audienceIcon.svg";
import AppearanceIcon from "../assets/AppearanceIcon.svg";
import pluginsIcon from "../assets/pluginsIcon.svg";
import walletIcon from "../assets/walletIcon.svg";

const Sidebar = () => {
  return (
    <>
      <div className="w-72 bg-[#1E2640] h-screen py-4 px-4 overflow-auto justify-between flex-col flex">
        <div>
          <div className="flex w-full  justify-between items-center">
            <div className="flex w-full gap-5">
              <img src={logo} alt="logo" className="cursor-pointer" />

              <div className="text-white">
                <h1 className="text-[16px]">Nishyan</h1>
                <span className="underline cursor-pointer text-[13px] text-white/80">
                  Visit store
                </span>
              </div>
            </div>
            <img
              src={bottomArrowIconWhite}
              alt="bottomArrowIconWhite"
              className="text-white"
            />
          </div>
          <div className="pt-6 w-full">
            <div className=" text-white w-full">
              <div className="px-4 gap-3 flex w-full my-3 rounded cursor-pointer">
                <img src={homeIcon} alt="homeIcon" />
                <span>Home</span>
              </div>
              <div className="px-4 gap-3 flex w-full rounded cursor-pointer">
                <img src={orderIcon} alt="orderIcon" />
                <span>Orders</span>
              </div>
              <div className="px-4 gap-3 flex w-full my-3 rounded cursor-pointer">
                <img src={productsIcon} alt="productsIcon" />
                <span>Products</span>
              </div>
              <div className="px-4 gap-3 flex w-full rounded cursor-pointer">
                <img src={deliveryIcon} alt="deliveryIcon" />
                <span>Delivery</span>
              </div>
              <div className="px-4 gap-3 flex w-full my-3 rounded cursor-pointer">
                <img src={marketingIcon} alt="marketingIcon" />
                <span>Marketing</span>
              </div>
              <div className="px-4 gap-3 flex w-full rounded cursor-pointer">
                <img src={analyticsIcon} alt="analyticsIcon" />
                <span>Analytics</span>
              </div>
              <div className="px-4 gap-3 flex w-full my-3 py-3 rounded bg-white/10 cursor-pointer">
                <img src={paymentsIcon} alt="paymentsIcon" />
                <span>Payments</span>
              </div>
              <div className="px-4 gap-3 flex w-full rounded cursor-pointer">
                <img src={toolsIcon} alt="toolsIcon" />
                <span>Tools</span>
              </div>
              <div className="px-4 gap-3 flex w-full my-3 rounded cursor-pointer">
                <img src={discountsIcon} alt="discountsIcon" />
                <span>Discounts</span>
              </div>
              <div className="px-4 gap-3 flex w-full rounded cursor-pointer">
                <img src={audienceIcon} alt="audienceIcon" />
                <span>Audience</span>
              </div>
              <div className="px-4 gap-3 flex w-full my-3 rounded cursor-pointer">
                <img src={AppearanceIcon} alt="AppearanceIcon" />
                <span>Appearance</span>
              </div>
              <div className="px-4 gap-3 flex w-full rounded cursor-pointer">
                <img src={pluginsIcon} alt="pluginsIcon" />
                <span>Plugins</span>
              </div>
            </div>
          </div>
        </div>
        <div className="flex text-white  bg-white/10 mt-[82px] rounded-md p-2">
          <div className="flex gap-3 px-3 items-center">
            <div className="bg-white/10 items-center p-2 rounded-md">
            <img src={walletIcon} alt="walletIcon" />
            </div>
            <div className="flex flex-col">
              <span className="text-[13px] opacity-70">Available credits</span>
              <span>222.10</span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Sidebar;
