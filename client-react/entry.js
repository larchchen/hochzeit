import React from "react";
import ReactDOM from 'react-dom';
import Questionnaire from "./questionnaire";

document.addEventListener("DOMContentLoaded", function(event) {
  ReactDOM.render(
   <Questionnaire />,
   document.getElementById('questionnaire')
  );
});
