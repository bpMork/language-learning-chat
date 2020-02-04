import React from 'react';
import { ThemeProvider } from 'styled-components';
import ChatBot from 'react-simple-chatbot';

// all available props

const config = {
  width: '500px',
};
const theme = {
  background: '#f5f8fb',
  fontFamily: 'Helvetica Neue',
  headerBgColor: '#FE6B8B',
  headerFontColor: '#fff',
  headerFontSize: '15px',
  botBubbleColor: '#FE6B8B',
  botFontColor: '#fff',
  userBubbleColor: '#fff',
  userFontColor: '#4a4a4a',
};

const steps = [
  {
    id: 'Greet',
    message: 'Hello!',
    trigger: 'Ask Name',
  },
  {
    id: 'Ask Name',
    message: 'Please type your name?',
    trigger: 'Waiting user input for name',
  },
  {
    id: 'Waiting user input for name',
    user: true,
    trigger: 'Asking options to eat',
  },
  {
    id: 'Asking options to eat',
    message: 'Hi {previousValue}, Glad to know you !!',
    trigger: 'Done',
  },
  {
    id: 'Done',
    message: 'Have a great day !!',
    end: true,
  },
];

const ThemedExample = () => (
  <ThemeProvider theme={theme}>
    <ChatBot steps={steps} {...config} />;
  </ThemeProvider>
);
export default ThemedExample;
