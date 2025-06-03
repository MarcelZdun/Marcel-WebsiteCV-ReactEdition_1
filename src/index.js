import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import "./styles.css";

function App() {
  return (
    <div className="card">
      <Avatar />
      <div className="data">
        <Intro />
        <SkillList />
      </div>
    </div>
  );
}

function Avatar() {
  return (
    <img className="avatar" src="../public/profile.jpg" alt="PictureProfile" />
  );
}

function Intro() {
  return (
    <div>
      <h1>Marcel Zdunski</h1>
      <p>
        I am a self-taught programmer who is looking to develop a career in web
        developement after my college studies
      </p>
    </div>
  );
}

function SkillList() {
  return (
    <div className="skill-list">
      <Skill skill="JavaScript" emoji="💪" color="lightgreen" />
      <Skill skill="HTML + CSS" emoji="💪" color="lightgreen" />
      <Skill skill="React" emoji="🤓" color="yellow" />
      <Skill skill="PHP" emoji="🤓" color="yellow" />
      <Skill skill="GitHub + Git" emoji="🤓" color="yellow" />
    </div>
  );
}

function Skill(props) {
  return (
    <div className="skill" style={{ backgroundColor: props.color }}>
      <span>{props.skill}</span>
      <span>{props.emoji}</span>
    </div>
  );
}

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <App />
  </StrictMode>
);
