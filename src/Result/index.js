import React from "react";

const Result = ({ result }) => {
  return result && <p className="result">{result}</p>;
};

export default Result;
