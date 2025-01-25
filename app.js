import React, { useState } from 'react';
import ChatInput from './ChatInput';
import ChatDisplay from './ChatDisplay';
import axios from 'axios';

function App() {
    const [messages, setMessages] = useState([]);

    const handleSend = async (query) => {
        try {
            const response = await axios.get(`http://127.0.0.1:8000/products`);
            setMessages([...messages, `Query: ${query}`, JSON.stringify(response.data)]);
        } catch (error) {
            setMessages([...messages, `Error: ${error.message}`]);
        }
    };

    return (
        <div style={{ padding: '20px' }}>
            <h1>Chatbot</h1>
            <ChatDisplay messages={messages} />
            <ChatInput onSend={handleSend} />
        </div>
    );
}

export default App;
