import React from "react";
import helpIcon from "../assets/helpIcon.svg";
import searchIcon from "../assets/searchIcon.svg";
import chatIcon from "../assets/chatIcon.svg";
import moreIcon from "../assets/moreIcon.svg";
import bottomArrowIcon from "../assets/bottomArrowIcon.svg";
import arrowIcon from "../assets/arrowIcon.svg";
import downloadIcon from "../assets/downloadIcon.svg";
import ibuttonIcon from "../assets/ibuttonIcon.svg";
import Order from "./Order";
import leftarrowIcon from "../assets/leftarrowIcon.svg";
import rightArrowIcon from "../assets/rightArrowIcon.svg";

const Overview = () => {
  return (
    <>
      <div className="w-full flex flex-col h-full overflow-auto">
        {/* Navbar */}
        <div className="w-full flex h-full px-8 py-3 gap-4 items-center justify-between bg-[#FFFFFF] border-b">
          <div className="w-full ">
            <div className="gap-4 flex">
              <span className="text-regular">Payments</span>
              <div className="gap-[6px] text-[#4D4D4D] flex text-xs items-center">
                <img src={helpIcon} alt="helpIcon" width={12.6} height={12.6} />
                <span className="cursor-pointer text-sm">How it works</span>
              </div>
            </div>
          </div>
          <div className="px-4 py-[9px] bg-[#F2F2F2] w-full rounded-md">
            <div className="flex gap-2 text-[#808080]">
              <img src={searchIcon} width={16} height={16} alt="searchIcon" />
              <input
                className="bg-[#F2F2F2] outline-none"
                type="text"
                placeholder="Search features, tutorials, etc."
              />
            </div>
          </div>
          <div className="gap-2 w-full">
            <div className="gap-3 flex justify-end">
              <div className="w-10 h-10 bg-[#E6E6E6] rounded-full flex justify-center cursor-pointer">
                <img src={chatIcon} width={20} height={20} alt="chatIcon" />
              </div>
              <div className="w-10 h-10 bg-[#E6E6E6] rounded-full flex justify-center cursor-pointer">
                <img src={moreIcon} width={20} height={20} alt="moreIcon" />
              </div>
            </div>
          </div>
        </div>
        {/* Overview */}
        <div className="p-8 w-full">
          <div className="gap-6 ">
            <div className="flex items-center justify-between text-center mb-6">
              <span className="text-center text-[#1A181E] font-medium text-xl">
                Overview
              </span>
              <button className="rounded-md border border-[#D9D9D9] w-[137px] h-[36px] flex justify-between items-center bg-[#FFFFFF]">
                <span className="text-base pl-[14px] py-[6px] text-[#4D4D4D]">
                  Last Month
                </span>
                <img
                  src={bottomArrowIcon}
                  alt="bottomArrowIcon"
                  className="pr-[14px] py-[10px]"
                />
              </button>
            </div>
            <div className="gap-5 flex w-full">
              <div className="flex flex-col bg-[#FFFFFF] w-full p-5 shadow-sm rounded-md">
                <span className="text-base font-normal text-[#4D4D4D] pb-4">
                  Online orders
                </span>
                <span className="text-[32px]">231</span>
              </div>
              <div className="flex flex-col bg-[#FFFFFF] w-full p-5 shadow-sm rounded-md">
                <span className="text-base font-normal text-[#4D4D4D] pb-4">
                  Amount received
                </span>
                <span className="text-[32px]">₹23,92,312.19</span>
              </div>
            </div>
            <div>
              <div className="mt-8 mb-5">
                <span className="text-xl font-medium">
                  Transactions | This Month
                </span>
              </div>
              <div className="bg-[#ffff] p-2 shadow-sm">
                <div className="flex justify-between">
                  <div className="rounded-md flex px-[16px] py-[10px] gap-3 text-center items-center border border-[#D9D9D9] bg-[#FFFFFF]">
                    <img src={searchIcon} alt="serchIcon" />
                    <input
                      type="text"
                      placeholder="Search by order ID..."
                      className="text-[#999999] outline-none"
                    />
                  </div>
                  <div className="flex gap-4">
                    <div className="cursor-pointer flex bg-[#FFFFFF] border border-[#D9D9D9] gap-[6px] items-center px-3 rounded-md">
                      <span className="text-[#4D4D4D] text-base ">Sort</span>
                      <img src={arrowIcon} alt="arrowIcon" />
                    </div>
                    <div className="cursor-pointer flex bg-[#FFFFFF] border border-[#D9D9D9] p-2 rounded-md">
                      <img
                        className="p-2"
                        src={downloadIcon}
                        alt="downloadIcon"
                      />
                    </div>
                  </div>
                </div>
                <div className="bg-[#F2F2F2] mt-3 rounded-md">
                  <div className="flex px-3 py-[10px] text-[#4D4D4D] text-center items-center">
                    <div className="flex items-center w-full ">
                      <span className="w-full justify-start flex">
                        Order ID
                      </span>
                      <div className="flex gap-2 items-center  w-full justify-start">
                        <span>Order date</span>
                        <img src={bottomArrowIcon} alt="bottomArrowIcon" />
                      </div>
                      <span className="w-full justify-end flex">
                        Order amount
                      </span>
                      <div className="flex items-center gap-2 justify-end w-full">
                        <span>Transaction fees</span>
                        <img src={ibuttonIcon} alt="ibuttonIcon" />
                      </div>
                    </div>
                  </div>
                </div>
                <Order />
                <Order />
                <Order />
                <Order />
                <Order />
                <Order />
                <Order />
                <Order />
                <Order />
                <Order />
                <Order />
                <Order />
                <div className="items-center ps-56">
                  <div className="flex w-full py-6 items-center">
                    <div>
                      <button className="rounded-md text-xs flex items-center bg-[#ffff] gap-2 border pt-[6px] pb-[6px] pl-[6px] pr-3">
                        <img src={leftarrowIcon} alt="leftarrowIcon" />
                        <span>Previous</span>
                      </button>
                    </div>
                    <div className="items-center ">
                      <span className="ms-14 text-sm ">1</span>
                      <span className="ms-8 text-sm">...</span>
                      <span className="ms-8 text-sm bg-[#146EB4] p-1 rounded-sm text-white">
                        10
                      </span>
                      <span className="ms-8 text-sm">11</span>
                      <span className="ms-8 text-sm">12</span>
                      <span className="ms-8 text-sm">13</span>
                      <span className="ms-8 text-sm">14</span>
                      <span className="ms-8 text-sm">15</span>
                      <span className="ms-8 text-sm">16</span>
                      <span className="ms-8 text-sm">17</span>
                      <span className="ms-8 text-sm me-14">18</span>
                    </div>
                    <div>
                      <button className="text-xs flex items-center bg-[#ffff] gap-2 border pt-[6px] pb-[6px] pl-[6px] pr-3 rounded-md">
                        <span>Next</span>
                        <img src={rightArrowIcon} alt="rightArrowIcon" />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Overview;
