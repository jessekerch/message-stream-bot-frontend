import React from "react";
import { Message } from "../types";

interface MessageItemProps {
  message: Message;
}

const MessageItem: React.FC<MessageItemProps> = ({ message }) => {
  return (
    <div style={{ padding: "10px", borderBottom: "1px solid #ddd" }}>
      <strong>{message.author}:</strong> {message.content}
    </div>
  );
};

export default MessageItem;
