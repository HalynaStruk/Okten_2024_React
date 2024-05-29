import React from 'react';
import './App.css';
import FormComponentUncotrollable from "./components/FormUncontroller_Controled";
import FormComponent from "./components/FormComponent";
import FormComponentValidation from "./components/FormComponentValidation";
import FormComponentValidationJOI from "./components/FormComponentValidationJOI";


const App = () => {


  return (
      <div>
          <FormComponentUncotrollable/>
          <FormComponent/>
          <FormComponentValidation/>
          <FormComponentValidationJOI/>
      </div>
  );
};

export default App;
