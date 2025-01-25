import React, { useState } from "react";
import axios from "axios";

const Chatbot = () => {
  const [query, setQuery] = useState("");
  const [response, setResponse] = useState("");

  const handleQuery = async () => {
    try {
      const res = await axios.post("http://localhost:3306/query", { query });
      setResponse(res.data.answer);
    } catch (error) {
      console.error(error);
      setResponse("Error fetching data.");
    }
  };

  return (
    <div className="chatbot-container">
      <h1>Supplier & Product Chatbot</h1>
      <input
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Enter your query"
      />
      <button onClick={handleQuery}>Ask</button>
      <div className="response">{response}</div>
    </div>
  );
};

export default Chatbot;
