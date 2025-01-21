import React from "react";
import MessageItem from "./MessageItem";
import { Message } from "../types";

interface MessageListProps {
  messages: Message[];
}

const MessageList: React.FC<MessageListProps> = ({ messages }) => {
  return (
    <div>
      {messages.length > 0 ? (
        messages.map((msg, index) => <MessageItem key={index} message={msg} />)
      ) : (
        <p>No messages yet.</p>
      )}
    </div>
  );
};

export default MessageList;
