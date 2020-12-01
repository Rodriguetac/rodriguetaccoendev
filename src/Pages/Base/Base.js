import './Base.css';
import { useState, useEffect, useContext } from 'react';
import LanguageContext from '../../languageContext';
import ReactTextTransition, { presets } from "react-text-transition";
import Zoom from 'react-reveal/Zoom';
import Particles from 'react-particles-js';
import RodriguePhoto from "../../IMG/IMG_0338.JPG";
import France from '../../IMG/France.png';
import English from '../../IMG/English.png';


function Base() {
  const [languageDictionary, setLanguageDictionary] = useState({});
  const language = useContext(LanguageContext);

  useEffect(() => {
    setLanguage();
  }, [language]);

  const setLanguage = () => {
    if (language.currentLanguage == "fr") {
      setLanguageDictionary({
        Developer: "Ingénieur",
        FullStack: "Développeur"
      })
    }
    else {
      setLanguageDictionary({
        Developer: "Engineer",
        FullStack: "Developer"
      })
    }
  }

  const flag = () => {
    if (language.currentLanguage == "fr") {
      return <img src={France} />
    }
    else {
      return <img src={English} />
    }
  }
  return (
    <div>
      <div className="Base">
        <div className="Background">
          <Particles
            width={window.width}
            height={window.height}
            params={{
              "particles": {
                "number": {
                  "value": 50
                },
                "size": {
                  "value": 3
                }
              },
              "interactivity": {
                "events": {
                  "onhover": {
                    "enable": false,
                    "mode": "repulse"
                  }
                }
              }
            }}
          />
        </div>
        <div className="Foreground">
          <div className="SwitchLanguage">
            <div className="Flag">
              {flag()}
            </div>
            {language.switchLanguage()}
          </div>
          <Zoom>
            <div className="Cadre">
              <img src={RodriguePhoto} alt="SazuPhoto" className="SazuPhoto" />
            </div>
          </Zoom>
          <div className="Rodrigue">
            {`Rodrigue TACCOEN`.split("").map((n, i) => (
              <ReactTextTransition
                key={i}
                text={n}
                delay={i * 100}
                className="big"
                overflow
                inline
              />
            ))
            }
            <div>
              {`${languageDictionary.Developer}`.split("").map((n, i) => (
                <ReactTextTransition
                  key={i}
                  text={n}
                  delay={i * 175}
                  className="big"
                  overflow
                  inline
                />
              ))
              }
            </div>
            {`${languageDictionary.FullStack}`.split("").map((n, i) => (
              <ReactTextTransition
                key={i}
                text={n}
                delay={i * 175}
                className="big"
                overflow
                inline
              />
            ))
            }
          </div>
        </div>
      </div>
    </div>
  );
}

export default Base;
