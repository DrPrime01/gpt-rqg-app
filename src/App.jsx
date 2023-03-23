import React, { useState, useEffect } from "react";
import QuoteBox from "./Components/QuoteBox";

function App() {
  const [selectedValue, setSelectedValue] = useState("");

  const generateQuote = () => {
    console.log("Quote generated.");
  };
  const handleSelectChange = (value) => {
    setSelectedValue(() => value);
  };

  useEffect(() => {
    console.log(selectedValue)
  }, [selectedValue])
  return (
    <div>
      <QuoteBox
        generateQuote={generateQuote}
        onSelectChange={handleSelectChange}
        selectedValue={selectedValue}
      />
    </div>
  );
}

export default App;
