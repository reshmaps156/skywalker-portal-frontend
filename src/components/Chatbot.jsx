import React, { useState } from 'react';
import axios from 'axios';
import { getNewTokenApi } from '../services/api';
import './chatbot.css';

const Chatbot = () => {
  const [messages, setMessages] = useState([
    { text: 'Hi! How can I help you?', sender: 'bot' },
  ]);
  const [input, setInput] = useState('');

  const handleSendMessage = async () => {
    if (!input.trim()) return;

    const userMessage = { text: input, sender: 'user' };
    setMessages([...messages, userMessage]);

    try {
      const response = await fetchDialogflowResponse(input);
      const botMessage = { text: response, sender: 'bot' };

      setMessages([...messages, userMessage, botMessage]);
    } catch (error) {
      console.error('Error in handleSendMessage:', error);
      const botMessage = { text: 'Sorry, something went wrong. Please try again.', sender: 'bot' };
      setMessages([...messages, userMessage, botMessage]);
    }
    setInput('');
  };

  const fetchDialogflowResponse = async (message) => {
    const sessionId = Date.now();
    const accessToken = await getNewTokenApi(); 
    const token = accessToken.data.token
    
    const dialogflowURL = `https://dialogflow.googleapis.com/v2/projects/superheroagent-wjek/agent/sessions/${sessionId}:detectIntent`;

    const response = await axios.post(
      dialogflowURL,
      {
        queryInput: {
          text: {
            text: message,
            languageCode: 'en',
          },
        },
      },
      {
        headers: {
          Authorization: `Bearer ${token}`,
          'Content-Type': 'application/json',
        },
      }
    );

    return response.data.queryResult.fulfillmentText;
  };

  return (
    <div className="chatbot-container" style={{ maxWidth: '300px' }}>
      <div className="chatbox">
        <div className="messages">
          {messages.map((msg, index) => (
            <div key={index} className={`message ${msg.sender}`}>
              {msg.text}
            </div>
          ))}
        </div>
        <div className="input-container">
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Type a message"
            className="input-field"
          />
          <button onClick={handleSendMessage} className="send-button">
            Send
          </button>
        </div>
      </div>
    </div>
  );
};

export default Chatbot;
