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
        FastContent: "Les deadlines ne me font pas peur, je sais rester à jour sur le travail à fournir",
        Efficient: "Efficace",
        EfficientContent: "Je sais être efficace pour répondre à vos besoins",
        Versatile: "Polyvalent",
        VersatileContent: "Je suis capable de m'adapter rapidement à vos projets et choix techniques",
        TeamWork: "Travail d'équipe",
        TeamWorkContent: "Je suis à l'aise avec le travail d'équipe, notamment grâce à la formation Problem-based learning proposé dans mon école",
        Profil: "Profil",
        ProfilContent: "Je suis un informaticien passionné et motivé ayant de l'expérience autant en développement WEB qu'en programmation de logiciels. Je cherche actuellement un stage du 04/01/2021 au 16/04/2021 durant lequel je pourrai acquérir des compétences et les mettre au service de vos projets.",
        Skill: "Compétences",
      })
    }
    else {
      setLanguageDictionary({
        About: "About",
        Fast: "Fast",
        FastContent: "Deadlines do not scare me, I know how to be up-to-date with workloads",
        Efficient: "Efficient",
        EfficientContent: "I will be efficient in order to answer to your needs",
        Versatile: "Versatile",
        VersatileContent: "I am able to adapt to your project, and your technical choices",
        TeamWork: "Team Work",
        TeamWorkContent: "I am comfortable with teamwork, I have been specially trained with Problem-based learning",
        Profil: "Profile",
        ProfilContent: "I am a passionate and motivated professional used to work in a team-based environment. I am looking for an internship from 04/01/2021 to 16/04/2021 in which I could acquire skills and to put them at the service of your projetcs.",
        Skill: "Skills",
      })
    }
  }

  const skills = [
    { type: "C#/.NET", level: 80 },
    { type: "Xamarin", level: 75 },
    { type: "SQLServer", level: 75 },
    { type: "Node.js", level:75 },
    { type: "Java", level: 70 },
    { type: "C++", level: 70},
    { type: "PHP", level: 65 },
    { type: "React", level: 60 }
  ];
  const colors =
  {
    bar: '#1FB9EE',
    title: {
      text: '#1FB9EE',
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
