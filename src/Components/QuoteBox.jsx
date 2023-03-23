import React from "react";
import { FiClipboard } from "react-icons/fi";
import { RiWhatsappFill } from "react-icons/ri";
import { FaTwitter } from "react-icons/fa";


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

  const copyToClipboard = async () => {
    try {
      await navigator.clipboard.writeText(quote);
      alert("Quote copied to clipboard");
    } catch (err) {
      console.error("Failed to copy text: ", err);
    }
  };

  return (
    <div className="col-md-6">
      <div className="h-100 p-5 text-white bg-dark rounded-3">
        <div className="d-flex flex-row justify-content-between align-items-center">
          <h2>Quote Of The Day</h2>
          <a onClick={copyToClipboard} className="clipboard">
            <FiClipboard className="grey-icons" />
          </a>
        </div>
        <p>{quote ? quote : "Generate beautiful quotes..."}</p>
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
        <div className="socials mt-4">
          <a
            target="_blank"
            href={`https://twitter.com/intent/tweet?text=${quote}`}
            className="me-2"
          >
            <FaTwitter className="grey-icons"/>
          </a>
          <a
            target="_blank"
            href={`https://api.whatsapp.com/send?text=${quote}`}
          >
            <RiWhatsappFill className="grey-icons"/>
          </a>
        </div>
      </div>
    </div>
  );
}

export default QuoteBox;
