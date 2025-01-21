import React, { useState, useEffect } from "react";
import axios from "axios";
import MessageList from "./components/MessageList";
import { Message } from "./types";

const App: React.FC = () => {
  const [messages, setMessages] = useState<Message[]>([]);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchMessages = async () => {
      try {
        const response = await axios.get<Message[]>(
          "http://localhost:3000/messages"
        ); // Replace with your back-end URL
        setMessages(response.data);
      } catch (err) {
        setError("Failed to fetch messages. Is the back-end running?");
        console.error("Error: ", err);
      }
    };

    // Poll the API every 2 seconds
    const interval = setInterval(fetchMessages, 2000);
    fetchMessages();

    return () => clearInterval(interval); // Cleanup interval on unmount
  }, []);

  return (
    <div>
      <h1>Discord Message Stream</h1>
      {error && <p style={{ color: "red" }}>{error}</p>}
      <MessageList messages={messages} />
    </div>
  );
};

export default App;
