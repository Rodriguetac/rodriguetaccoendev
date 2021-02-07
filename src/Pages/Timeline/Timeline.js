import './Timeline.css';
import { useState, useEffect, useContext } from 'react';
import LanguageContext from '../../languageContext';
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import DevIcon from "devicon-react-svg"

function Timeline() {
  const [languageDictionary, setLanguageDictionary] = useState({});
  const language = useContext(LanguageContext);

  useEffect(() => {
    setLanguage();
  }, [language]);


  const setLanguage = () => {
    if (language.currentLanguage == "fr") {
      setLanguageDictionary({
        Bac: "Baccalauréat Scientifique",
        BacSub: "Lycée Saint-Paul Lille, FRANCE",
        Cesi: "CESI École d'ingénieurs",
        CesiSub: "Méthodologie Problem-based learning, où l'évaluation finale est un projet fait en équipe",
        DateStage2020: "Mars - Juillet 2020",
        Stage2020: "Stage chez Neu Automation",
        Stage2020Sub: "Projet d'Application pour Mobile, ces applications ont été développées pour gérer la production d'Entreprises industrielles",
        DateWorkNeu2020 : "Août - Septembre 2020",
        LastLine: "En recherche de stage",
      })
    }
    else {
      setLanguageDictionary({
        Bac: "Baccalaureate of Science",
        BacSub: "Saint-Paul High-School Lille, FRANCE",
        Cesi: "CESI Engineering school",
        CesiSub: "Engineering school using PBL methodology, where final exams are real projects done in a team",
        DateStage2020: "March - July 2020",
        Stage2020: "Internship at Neu Automation",
        Stage2020Sub: "Mobile Applications Project in Xamarin, these applications are used to manage production in industrial Companies",
        DateWorkNeu2020 : "August - September 2020",
        LastLine: "Looking for an internship",
      })
    }
  }

  return (
    <div className="Base">
      <div>
        <h2>
          Experiences
        </h2>
      </div>
      <VerticalTimeline>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentStyle={{ background: 'rgb(33, 150, 243)', color: 'black' }}
          contentArrowStyle={{ borderRight: '7px solid  rgb(33, 150, 243)' }}
          date="2018"
          iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}

        >
          <h3 className="vertical-timeline-element-title">{languageDictionary.Bac}</h3>
          <h4 className="vertical-timeline-element-subtitle">{languageDictionary.BacSub}</h4>

        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          date="2018 - 2023"
          iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}

        >
          <h3 className="vertical-timeline-element-title">{languageDictionary.Cesi}</h3>
          <h4 className="vertical-timeline-element-subtitle">Lille, FRANCE</h4>
          <p>
            {languageDictionary.CesiSub}
          </p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          date={languageDictionary.DateStage2020}
          iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
          icon={<DevIcon icon="react" style={{ fill: "White" }} />}
        >
          <h3 className="vertical-timeline-element-title">{languageDictionary.Stage2020}</h3>
          <p>
            {languageDictionary.Stage2020Sub}
          </p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          date={languageDictionary.DateWorkNeu2020}
          iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
          icon={<DevIcon icon="terminal_badge" style={{ fill: "White" }} />}
        >
          <h3 className="vertical-timeline-element-title">{languageDictionary.Stage2020}</h3>

        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          date="2021"
          iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
          icon={<DevIcon icon="terminal_badge" style={{ fill: "White" }} />}
        >
          <h3 className="vertical-timeline-element-title">{languageDictionary.Stage2020}</h3>

        </VerticalTimelineElement>

      </VerticalTimeline>
    </div>
  );
}

export default Timeline;
