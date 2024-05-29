import React from 'react';
import './App.css';
import FormComponentUncotrollable from "./components/FormUncontroller_Controled";
import FormComponent from "./components/FormComponent";
import FormComponentValidation from "./components/FormComponentValidation";
import FormComponentValidationJOI from "./components/FormComponentValidationJOI";


const App = () => {


  return (
      <div>
          <p>Uncotrollable Form</p>
          <FormComponentUncotrollable/>
          <hr/>

          <p>useForm</p>
          <FormComponent/>
          <hr/>

          <p>useForm validation</p>
          <FormComponentValidation/>
          <hr/>

          <p>useForm validation joi</p>
          <FormComponentValidationJOI/>
      </div>
  );
};

export default App;
