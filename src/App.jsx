import React, { useState } from "react";
import ConverterBoard from "./shared/board";

function App() {
  const [mode, setMode] = useState("latin-to-cyrillic");
  return (
    <div>
      <ConverterBoard mode={mode} />
    </div>
  );
}

export default App;
