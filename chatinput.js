import React, { useState } from 'react';

function ChatInput({ onSend }) {
    const [query, setQuery] = useState("");

    const handleSend = () => {
        if (query.trim()) {
            onSend(query);
            setQuery("");
        }
    };

    return (
        <div style={{ display: 'flex', gap: '10px' }}>
            <input 
                type="text" 
                value={query} 
                onChange={(e) => setQuery(e.target.value)} 
                placeholder="Type your query..." 
                style={{ flex: 1, padding: '8px' }}
            />
            <button onClick={handleSend} style={{ padding: '8px' }}>Send</button>
        </div>
    );
}

export default ChatInput;
