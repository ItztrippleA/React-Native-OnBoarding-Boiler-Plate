import React, { useState } from "react";
import Onboard from "./components/Onboard";
import Home from "./components/Home";

export default function App() {
  const [showOnboard, setShowOnboard] = useState(true);

  const handleOnboardFinish = () => {
    setShowOnboard(false);
  };

  return (
    <>
      {showOnboard && <Onboard onBoardDone={handleOnboardFinish} />}
      {!showOnboard && <Home />}
    </>
  );
}
