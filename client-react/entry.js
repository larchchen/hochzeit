import React from "react";
import ReactDOM from 'react-dom';
import GuestNameForm from "./guestNameForm";

document.addEventListener("DOMContentLoaded", function(event) {
  ReactDOM.render(
   <GuestNameForm />,
   document.getElementById('guestForm')
  );
});
