import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import logo from './logo.svg';
import './App.css';
import { submitChat } from './services/chat-service';

// @material-ui imports
import { styled } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import Card from '@material-ui/core/Card';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';

const AppContainer = styled(Card)({
  background: 'linear-gradient(45deg, #FF8E53 30%, #FE6B8B 90%)',
  textAlign: 'center',
});

const MyCard = styled(Card)({
  background: 'white',
  border: 0,
  borderRadius: '5vh',
  boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
  height: '90vh',
  minWidth: '400px',
  width: '80%',
  maxWidth: '600px',
  marginTop: '5vh',
  marginBottom: '5vh',
  marginLeft: 'auto',
  marginRight: 'auto',
  padding: '5%',
});

function AppRouter() {
  const [language, setLanguage] = useState();
  const [text, setText] = useState();
  const [submittedNote] = useState();
  const [responseText] = useState();

  return (
    <AppContainer>
      <React.Fragment>
        <CssBaseline />
        <MyCard>
          <Typography component="div" />
          <FormControl>
            <div style={{ paddingBottom: 10 }}>
              <InputLabel id="language-select-label">Language</InputLabel>
              <Select
                labelId="language-select-label"
                id="language-select"
                style={{ width: 200, textAlign: 'left' }}
                value={language}
                onChange={setLanguage}
              >
                <MenuItem value="en-US">English</MenuItem>
                <MenuItem value="fr">French</MenuItem>
              </Select>
            </div>
            <TextField
              id="standard-multiline-flexible"
              label="Text"
              multiline
              rowsMax="8"
              placeholder="Placeholder"
              style={{ width: 200, paddingBottom: 20 }}
              value={text}
              onChange={setText}
            />
            <Button
              variant="contained"
              color="primary"
              onClick={() => this.submitText(text, language)}
            >
              Submit Text
            </Button>
          </FormControl>
          <div style={{ padding: 20 }}>
            <div>{submittedNote}</div>
            <div>{setText}</div>
            <div style={{ paddingTop: 20 }}>{responseText}</div>
          </div>
        </MyCard>
      </React.Fragment>
    </AppContainer>
  );
}

export default AppRouter;
