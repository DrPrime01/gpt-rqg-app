import React, { useState } from "react";
import QuoteBox from "./Components/QuoteBox";
import { quoteGenerator } from "./script";

function App() {
  const [selectedValue, setSelectedValue] = useState("");
  const [quote, setQuote] = useState("Generate wonderful quotes...");

  const generateQuote = () => {
    quoteGenerator(selectedValue)
      .then((choices) => {
        if (choices && choices.length > 0) {
          setQuote(choices[0].message.content);
          console.log("Quote generated.");
        } else {
          console.log("No quotes generated.");
        }
      })
      .catch((error) => console.error("Error:", error));

    console.log(selectedValue);
  };

  const handleSelectChange = (value) => {
    setSelectedValue(() => value);
  };

  return (
    <div className="d-flex justify-content-center align-items-center min-vh-100 px-2 sm:px-0">
      <QuoteBox
        generateQuote={generateQuote}
        onSelectChange={handleSelectChange}
        selectedValue={selectedValue}
        quote={quote}
      />
    </div>
  );
}

export default App;
