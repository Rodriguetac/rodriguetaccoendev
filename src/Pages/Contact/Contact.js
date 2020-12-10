import './Contact.css';
import { useState, useEffect, useContext } from 'react';
import LanguageContext from '../../languageContext';
import ReactTextTransition, { presets } from "react-text-transition";
import Button from '@material-ui/core/Button';
import emailjs from 'emailjs-com';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import TextareaAutosize from '@material-ui/core/TextareaAutosize';
import SendIcon from '@material-ui/icons/Send';

function Contact() {
  const [languageDictionary, setLanguageDictionary] = useState({});
  const [userName, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [isSent, setIsSent] = useState(false);

  const language = useContext(LanguageContext);


  useEffect(() => {
    setLanguage();
  }, [language]);

  const useStyles = makeStyles((theme) => ({
    root: {
      '& > *': {
        margin: theme.spacing(1),
        width: '25ch',
      },
      textField: {
        marginLeft: theme.spacing(1),
        marginRight: theme.spacing(1),
      },
      button: {
        margin: theme.spacing(1),
      },

    },
  }));

  const classes = useStyles();


  const handleSubmit = (event) => {
    event.preventDefault();
    setIsSent(true);
    var payload = {
      from_name: userName,
      to_name: email,
      message: message
    }
    console.log(payload);
    emailjs.send('service_b9rq5v6', 'template_jo60n0s', payload, 'user_0Eb2LbE8Jgm19DgzrzIzi')
      .then(function (response) {
        console.log('SUCCESS!', response.status, response.text);
      }, function (error) {
        console.log('FAILED...', error);
      });
  }


  const setLanguage = () => {
    if (language.currentLanguage == "fr") {
      setLanguageDictionary({
        Developer: "Développeur",
        FullStack: "Full-Stack"
      })
    }
    else {
      setLanguageDictionary({
        Developer: "Full-Stack",
        FullStack: "Developer"
      })
    }
  }


  const sentButton = () => {
    if (isSent) {
      return (
        <div>
          <Button
            color="primary"
            className={classes.button}
            endIcon={<SendIcon />}
          >
            OK!
          </Button>
        </div>
      )
    }
    else {
      return (
        <div>
          <Button
            color="primary"
            className={classes.button}
            endIcon={<SendIcon />}
            type="submit">
            Send
          </Button>
        </div>
      )
    }

  }
  return (
    <div className="Contact">
      <h2> Contact me!</h2>
      <form className={classes.root} autoComplete="off" onSubmit={(event) => { handleSubmit(event) }}>
        <div className="ContactTextBox">
          <TextField required id="standard-basic" label="Nom" fullWidth value={userName} onChange={e => setUserName(e.target.value)} />
        </div>
        <div className="ContactTextBox">
          <TextField required id="filled-basic" label="Email" fullWidth value={email} onChange={e => setEmail(e.target.value)} />
        </div>
        <div className="ContactTextBox">
          <TextField
            required
            id="outlined-multiline-static"
            label="Message"
            fullWidth
            multiline
            rows="10"
            className={classes.textField}
            margin="normal"
            variant="outlined"
            value={message}
            onChange={e => setMessage(e.target.value)}
          />
        </div>
        {sentButton()}
      </form>
    </div>
  );
}

export default Contact