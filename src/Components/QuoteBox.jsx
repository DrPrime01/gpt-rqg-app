import React from "react";

function QuoteBox({ generateQuote, onSelectChange, selectedValue }) {
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
      <option value="" key={i} disabled defaultValue>
        {option}
      </option>
    ) : (
      <option value={option} key={i}>
        {option}
      </option>
    );
  });

  const handleSelectChange = (e) => {
    onSelectChange(e.target.value);
  }
  return (
    <div className="col-md-6">
      <div className="h-100 p-5 text-white bg-dark rounded-3">
        <h2>Quote Of The Day</h2>
        <p>
          Swap the background-color utility and add a `.text-*` color utility to
          mix up the jumbotron look. Then, mix and match with additional
          component themes and more.
        </p>
        <div className="d-flex flex-row justify-content-between">
          <button
            className="btn btn-outline-light"
            onClick={generateQuote}
            type="button"
          >
            Generate
          </button>
          <select value={selectedValue} onChange={handleSelectChange}>
            {quoteFilterOption}
          </select>
        </div>
      </div>
    </div>
  );
}

export default QuoteBox;
