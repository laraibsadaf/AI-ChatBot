import React from 'react';

function ChatDisplay({ messages }) {
    return (
        <div>
            {messages.map((msg, idx) => (
                <p key={idx}>{msg}</p>
            ))}
        </div>
    );
}

export default ChatDisplay;
