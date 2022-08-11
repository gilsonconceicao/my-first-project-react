import React from "react";

import EventsUseState from "./EventsUseState";
import RenderList from "./RenderList";

import "../assets/css/App.css";

const AboutAplication = () => {
  return (
    <div className="body-element">
      <div>
        <h2>O que estará no projeto?</h2>
        <ul>
          <li>Component</li>
          <li>Hirarquia De Componentes</li>
          <li>Events</li>
          <li>Templet Expression</li>
          <li>Hooks (useState)</li>
          <li>Render List</li>
        </ul>
      </div>
    </div>
  );
};

export default AboutAplication;
