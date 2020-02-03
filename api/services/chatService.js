const baseUrl = process.env.REACT_APP_API_URL;
const endpoint = '/check';
import React from 'react';

// Rework to a function for submitting text
class App extends React.Component {
  constructor() {
    super();
    this.state = {
      language: 'en-US',
      text: 'Hello! How are you?',
      submittedNote: '',
      submittedText: '',
      responseText: '',
    };
  }
  handleLanguageChange = e => {
    this.setState({ language: e.target.value });
  };
  handleTextChange = e => {
    this.setState({ text: e.target.value });
  };
  async submitText(text, language) {
    const submittedNote = "You submitted some text with language code '" + language + "': ";
    const submittedText = text;
    const response = await submitChat(text, language);
    let responseText = 'Response: ';
    responseText += response.matches.length === 0 ? 'Looks great!' : response.matches[0].message;
    this.setState({ submittedNote, submittedText, responseText });
  }
}

// Rework to a function for returning a response from the chatbot
// async function post(url, body) {
//   return fetch(url, {
//     method: 'POST', // *GET, POST, PUT, DELETE, etc.
//     mode: 'cors', // no-cors, *cors, same-origin
//     cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
//     credentials: 'omit', // include, *same-origin, omit
//     headers: {
//       'Content-Type': 'application/json',
//       'Content-Type': 'application/x-www-form-urlencoded',
//     },
//     redirect: 'follow', // manual, *follow, error
//     referrerPolicy: 'no-referrer', // no-referrer, *client
//     body: JSON.stringify(body || {}), // body data type must match "Content-Type" header
//   });
// }

async function submitChat(text, language) {
  // return post(baseUrl + endpoint + '?text=' + text + '&language=' + language)
  //   .then(res => res.json())
  //   .catch(console.log);
  console.log(test);
}

export { submitChat };
