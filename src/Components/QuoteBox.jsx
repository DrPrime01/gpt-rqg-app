import React from "react";

function QuoteBox({generateQuote}) {
  return (
    <div className="col-md-6">
      <div className="h-100 p-5 text-white bg-dark rounded-3">
        <h2>Quote Of The Day</h2>
        <p>
          Swap the background-color utility and add a `.text-*` color utility to
          mix up the jumbotron look. Then, mix and match with additional
          component themes and more.
        </p>
        <div className="d-flex justify-between">
            <button className="btn btn-outline-light" onClick={generateQuote} type="button">Generate</button>
        </div>
      </div>
    </div>
  );
}

export default QuoteBox;
