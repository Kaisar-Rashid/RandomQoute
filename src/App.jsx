import "./App.css";

import React, { useState, useEffect } from "react";
import axios from "axios";

const App = () => {
  const [quote, setQuote] = useState("");
  const [savedQuotes, setSavedQuotes] = useState([]);

  useEffect(() => {
    fetchQuote();
  }, []);

  const fetchQuote = async () => {
    try {
      const response = await axios.get(
        "https://ron-swanson-quotes.herokuapp.com/v2/quotes"
      );
      console.log(response);
      setQuote(response.data[0]);
    } catch (error) {
      console.error("Error fetching quote:", error);
    }
  };

  const handleSave = () => {
    if (quote && !savedQuotes.includes(quote)) {
      setSavedQuotes([...savedQuotes, quote]);
    }
  };

  return (
    <div className="container">
      <h1>Random Quote Generator</h1>
      <div className="quote-card">
        <p>{quote}</p>
        <button onClick={fetchQuote} className="get_Quote">
          Get Another Quote
        </button>
        <button onClick={handleSave} className="get_Quote">
          Save Quote
        </button>
      </div>
      <h2>Saved Quotes</h2>
      <div className="saved-quotes">
        {savedQuotes.map((savedQuote, index) => (
          <div key={index} className="saved-quote">
            <p>{savedQuote}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default App;
