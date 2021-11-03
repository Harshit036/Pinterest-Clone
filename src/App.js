import React, { useState } from "react";
import Pins from "./components/Pins";
import Navbar from "./components/Navbar";
import Dropdown from "./components/Dropdown";
// import PicturecardTemp from "./components/PicturecardTemp";

function App() {
  const [InputKey, setInputKey] = useState("random");

  return (
    <>
      <Dropdown></Dropdown>
      {/* <PicturecardTemp></PicturecardTemp> */}
      {/* <Navbar onSubmit={setInputKey} /> */}
      {/* <Pins InputKey={InputKey} /> */}
    </>
  );
}

export default App;
