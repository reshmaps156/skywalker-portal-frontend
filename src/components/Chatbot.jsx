import React, { useState, useEffect, useRef } from 'react';
import axios from 'axios';
import { getNewTokenApi } from '../services/api';
import './chatbot.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPaperPlane } from '@fortawesome/free-solid-svg-icons';


const Chatbot = () => {
  const [messages, setMessages] = useState([{ text: 'Hi! How can I help you?', sender: 'bot' }]);
  const [input, setInput] = useState(''); //to store input
  const messagesEndRef = useRef(null); // Reference to the end of messages container

  const handleSendMessage = async () => {
    if (!input.trim()) return;

    const userMessage = { text: input, sender: 'user' };
    setMessages((prevMessages) => [...prevMessages, userMessage]);

    try {
      const response = await fetchDialogflowResponse(input);
      const botMessage = { text: response, sender: 'bot' };
      setMessages((prevMessages) => [...prevMessages, userMessage, botMessage]);
    } catch (error) {
      console.error('Error in handleSendMessage:', error);
      const botMessage = { text: 'Sorry, something went wrong. Please try again.', sender: 'bot' };
      setMessages((prevMessages) => [...prevMessages, userMessage, botMessage]);
    }

    setInput('');
  };

  const fetchDialogflowResponse = async (message) => {
    const sessionId = Date.now();
    const accessToken = await getNewTokenApi(); 
    const token = accessToken.data.token;
    
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

  // Scroll to the bottom of the message container when new messages are added
  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]); // Call scrollToBottom when messages update

  return (
    <div className="chatbot-container">
      <div className="chatbox">
        <div className="messages">
          {messages.map((msg, index) => (
            <div key={index} className={`message ${msg.sender}`}>
              {msg.text}
            </div>
          ))}
          <div ref={messagesEndRef} /> 
        </div>
        <div className="input-container">
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Type a message"
            className="input-field"
          />
          <button onClick={handleSendMessage} className="btn btn-warning ms-2">
          <FontAwesomeIcon icon={faPaperPlane} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Chatbot;
