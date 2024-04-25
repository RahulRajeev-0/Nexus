import React, { useEffect, useRef, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import styled from 'styled-components';
import StarBorderIcon from '@mui/icons-material/StarBorder';
import SendIcon from '@mui/icons-material/Send';
import Button from '@mui/material/Button';
import axios from 'axios';
import BotMessage from './BotMessages';
import IconButton from '@mui/material/IconButton';

const ChatBotChatArea = () => {
  const baseURL = 'http://127.0.0.1:8000';
  const chatRef = useRef();
  const dispatch = useDispatch();

  const [chatMessages, setChatMessages] = useState([]);
  const [message, setMessage] = useState('');

  // function to connect to the websocket
  const handleSubmit = async (event) => {
    event.preventDefault(); // Prevent default form submission behavior
    console.log('Submitted message:', message) // Log the message
    try {
      setChatMessages([...chatMessages, {'message':message,'isSender':true}]);
      const response = await axios.get(baseURL + '/chatbot/chat/', {
        headers: {
          'Content-Type': 'application/json',
        },
        params: {
          message: message,
        },
      });

      if (response.status === 200) {
        const aiResponse = response.data;
        setChatMessages(prevMessages => [...prevMessages, aiResponse]); // Append new message to chatMessages state
        console.log(ChatMessages);
      }
    } catch (error) {
      console.log(error);
    }

    // Clear the input field after submission if needed
    setMessage('');
  };

  return (
    <ChatContainer>
      <Header>
        <HeaderLeft>
          <h4>
            <strong>Nexus Chat Ai</strong>
          </h4>
          <StarBorderIcon />
        </HeaderLeft>
      </Header>
      <ChatMessages>
        <ChatTop />
        {chatMessages.map((message, index) => (
         <BotMessage message={message.message} 
         isSender={message.isSender}/>
        ))}
        <ChatBottom ref={chatRef} />
      </ChatMessages>

      <ChatInputContainer>
        <form onSubmit={handleSubmit}>
          <input
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            placeholder="Message"
          />
          <Button variant="contained" endIcon={<SendIcon />} type="submit">
            Send
          </Button>
        </form>
      </ChatInputContainer>
    </ChatContainer>
  );
};

export default ChatBotChatArea;

const ChatBottom = styled.div`
  padding-bottom: 200px;
`;
const ChatTop = styled.div`
  padding-top: 100px;
`;

const Header = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 20px;
  
  color: white;
  background:#591DA9;
    border-radius:20px;
    padding: 20px;
    margin: 5px 5px;
  position: fixed;
  width: 78%;
`;

const HeaderLeft = styled.div`
  display: flex;
  align-items: center;

  > h4 {
    display: flex;
    text-transform: lowercase;
    margin-right: 10px;
  }
  > h4 > .MuiSvgIcon-root {
    margin-right: 20px;
    font-size: 16px;
  }
`;

const ChatMessages = styled.div``;

const ChatContainer = styled.div`
  flex: 0.9;
  flex-grow: 1;
  overflow-y: scroll;
  margin-top: 60px;
`;

const ChatInputContainer = styled.div`
  border-radius: 20px;
  > form {
    position: relative;
    display: flex;
    justify-content: center;
  }
  > form > input {
    position: fixed;
    bottom: 30px;
    width: 60%;
    height: 35px;
    border: 1px solid gray;
    padding: 20px;
    outline: none;
    border-radius: 10px;
  }
  > form > Button {
    position: fixed;
    bottom: 34px;
    left: 1150px;
  }
`;
