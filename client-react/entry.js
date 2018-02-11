import React from "react";
import ReactDOM from 'react-dom';
import Questionnaire from "./questionnaire";

document.addEventListener("DOMContentLoaded", function(event) {
  let questionnaire = document.getElementById('questionnaire');
  if (questionnaire) {
    let lang = questionnaire.dataset.lang;
    ReactDOM.render(<Questionnaire lang={lang} />, questionnaire);
  }
});
