import logo from '../../logo.svg';
import './About.css';
import { useState, useEffect, useContext } from 'react';
import LanguageContext from '../../languageContext';
import Fast from '../../IMG/Fast.png';
import Ampoule from '../../IMG/Ampoule.png';
import Teamwork from '../../IMG/Teamwork.png';
import Polyvalent from '../../IMG/Polyvalent.png';
import SkillBar from 'react-skillbars';
import Flip from 'react-reveal/Flip';

function About() {
  const [languageDictionary, setLanguageDictionary] = useState({});
  const language = useContext(LanguageContext);

  useEffect(() => {
    setLanguage();
  }, [language]);

  const setLanguage = () => {
    if (language.currentLanguage == "fr") {
      setLanguageDictionary({
        About: "À propos",
        Fast: "Rapide",
        FastContent: "bite Le Lorem Ipsum est simplement du faux texte employé dans en page avant impression.",
        Efficient: "Efficace",
        EfficientContent: "bite Le Lorem Ipsum est simplement du faux texte employé dans en page avant impression.",
        Versatile: "Polyvalent",
        VersatileContent: "bite Le Lorem Ipsum est simplement du faux texte employé dans en page avant impression.",
        TeamWork: "Travail d'équipe",
        TeamWorkContent: "bite Le Lorem Ipsum est simplement du faux texte employé dans en page avant impression.",
        Profil: "Profil",
        ProfilContent: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.",
        Skill: "Compétences",
      })
    }
    else {
      setLanguageDictionary({
        About: "About",
        Fast: "Fast",
        FastContent: "Le Lorem Ipsum est simplement du faux texte employé dans en page avant impression.",
        Efficient: "Efficient",
        EfficientContent: "bite Le Lorem Ipsum est simplement du faux texte employé dans en page avant impression.",
        Versatile: "Versatile",
        VersatileContent: "bite Le Lorem Ipsum est simplement du faux texte employé dans en page avant impression.",
        TeamWork: "Team Work",
        TeamWorkContent: "bite Le Lorem Ipsum est simplement du faux texte employé dans en page avant impression.",
        Profil: "Profile",
        ProfilContent: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.",
        Skill: "Skills",
      })
    }
  }

  const skills = [
    { type: "C#", level: 100 },
    { type: "C", level: 75 },
    { type: 'C++', level: 50 },
  ];
  const colors =
  {
    bar: 'blue',
    title: {
      text: 'blue',
      background: '#fff'
    }
  };

  return (
    <div className="About">
      <div className="About-header">
        <h2>{languageDictionary.About}</h2>
      </div>
      <div className="Main-Asset">
        <div className="HexagonParent">
          <div className="Hexagon1">
            <Flip left delay={300}>
              <img src={Fast} />
            </Flip>
            <h3>{languageDictionary.Fast}</h3>
            <p>{languageDictionary.FastContent}</p>
          </div>
          <div className="Hexagon1">
            <Flip left delay={400}>
              <img src={Ampoule} />
            </Flip>
            <h3>{languageDictionary.Efficient}</h3>
            <p>{languageDictionary.EfficientContent}</p>
          </div>
        </div>
        <div className="HexagonParent">
          <div className="Hexagon1">
            <Flip right delay={500}>
              <img src={Polyvalent} />
            </Flip>
            <h3>{languageDictionary.Versatile}</h3>
            <p>{languageDictionary.VersatileContent}</p>
          </div>
          <div className="Hexagon1">
            <Flip right delay={600}>
              <img src={Teamwork} />
            </Flip>
            <h3>{languageDictionary.TeamWork}</h3>
            <p>{languageDictionary.TeamWorkContent}</p>
          </div>
        </div>
      </div>
      <div className="Content">
        <div className="Profil">
          <h2>{languageDictionary.Profil}</h2>
          <p>{languageDictionary.ProfilContent}</p>
        </div>
        <div className="SkillBars">
          <h2>{languageDictionary.Skill}</h2>
          <SkillBar skills={skills} colors={colors} />
        </div>
      </div>
    </div>
  );
}

export default About;
