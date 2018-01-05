import React from "react";
import ReactDOM from 'react-dom';
import Questionnaire from "./questionnaire";

document.addEventListener("DOMContentLoaded", function(event) {
  let questionnaire = document.getElementById('questionnaire');
  if (questionnaire) {
    ReactDOM.render(<Questionnaire />, questionnaire);
  }
});
