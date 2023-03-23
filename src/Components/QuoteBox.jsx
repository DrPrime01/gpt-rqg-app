import React from "react";

function QuoteBox({ generateQuote, onSelectChange, selectedValue, quote }) {
  const quoteFilterOptions = [
    "Filter",
    "Inspiration",
    "Motivation",
    "Academic",
    "Religious",
    "Masculine",
    "Feminine",
  ];
  const quoteFilterOption = quoteFilterOptions.map((option, i) => {
    return option === "Filter" ? (
      <option value="" key={i} disabled defaultValue className="text-dark">
        {option}
      </option>
    ) : (
      <option value={option} key={i} className="text-dark">
        {option}
      </option>
    );
  });

  const handleSelectChange = (e) => {
    onSelectChange(e.target.value);
  };
  return (
    <div className="col-md-6">
      <div className="h-100 p-5 text-white bg-dark rounded-3">
        <h2>Quote Of The Day</h2>
        <p>
          {quote ? quote : "Generate beautiful quotes..."}
        </p>
        <div className="d-flex flex-row justify-content-between">
          <button
            className="btn btn-outline-light"
            onClick={generateQuote}
            type="button"
          >
            Generate
          </button>
          <select
            value={selectedValue}
            onChange={handleSelectChange}
            className="bg-transparent border rounded-3 text-white p-2"
          >
            {quoteFilterOption}
          </select>
        </div>
      </div>
    </div>
  );
}

export default QuoteBox;
