import React, { useState } from "react";
import Pins from "./components/Pins";
import Navbar from "./components/Navbar";
import PicturecardTemp from "./components/PicturecardTemp";

function App() {
  const [InputKey, setInputKey] = useState("random");

  return (
    <>
      <PicturecardTemp></PicturecardTemp>
      {/* <Navbar onSubmit={setInputKey} />
      <Pins InputKey={InputKey} /> */}
    </>
  );
}

export default App;
