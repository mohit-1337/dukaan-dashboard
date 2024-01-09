import React from "react";
import Sidebar from "./components/Sidebar";
import Overview from "./components/Overview";

const App = () => {
  return (
    <>
      <div className="flex w-full overflow-hidden h-screen">
        <Sidebar />
        <Overview />
      </div>
    </>
  );
};

export default App;
