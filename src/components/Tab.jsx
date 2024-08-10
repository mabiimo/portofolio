import React, { useState } from "react";

const Tab = () => {
  const [activeTab, setActiveTab] = useState("tab1");

  const handleTabChange = (tab) => {
    setActiveTab(tab);
  };

  return (
    <div className="flex items-center  justify-center px-4 py-4">
      <div className=" rounded-full p-1  ">
        <div className="flex bg-[#f0f0f0] shadow-md  rounded-full">
          <button
            className={`px-3 py-1 bg-white m-1 ${
              activeTab === "tab1"
                ? "poppins-medium bg-white shadow-sm text-[#111111] rounded-full"
                : "poppins-medium rounded-full bg-[#f0f0f0] text-[#98989e]"
            }`}
            onClick={() => handleTabChange("tab1")}
            style={{ marginRight: '20px' }} 
          >
            Tab 1
          </button>
          <button
            className={`px-3 py-1 bg-white m-1 ${
              activeTab === "tab2"
                ? "poppins-medium bg-white shadow text-[#111111] rounded-full"
                : "poppins-medium rounded-full bg-[#f0f0f0] text-[#98989e]"
            }`}
            onClick={() => handleTabChange("tab2")}
          >
            Tab 2
          </button>
        </div>

        <div className="p-4 border mt-3 border-gray-300 rounded">
          {activeTab === "tab1" && <div>shadow</div>}
          {activeTab === "tab2" && <div>Test 2</div>}
        </div>
      </div>
    </div>
  );
};

export default Tab;
