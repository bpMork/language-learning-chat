import React, { useState } from 'react';
import ThemedExample from './components/ChatBot';
import './App.css';
import BaseCard from './components/BaseCard';
import AppContainer from './components/AppContainer';

// @material-ui imports
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';

function AppRouter() {
  const [language, setLanguage] = useState();
  const [text, setText] = useState();
  const [submittedNote] = useState();
  const [responseText] = useState();

  return (
    <AppContainer>
      <React.Fragment>
        <CssBaseline />
        <BaseCard>
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
              color="secondary"
              onClick={() => this.submitText(text, language)}
            >
              Submit Text
            </Button>
          </FormControl>
          <ThemedExample />

          <div style={{ padding: 20 }}>
            <div>{submittedNote}</div>
            <div>{setText}</div>
            <div style={{ paddingTop: 20 }}>{responseText}</div>
          </div>
        </BaseCard>
      </React.Fragment>
    </AppContainer>
  );
}

export default AppRouter;
