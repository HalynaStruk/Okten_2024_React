import React from 'react';
import './App.css';
import ToggleComponent from "./components/Toggle";
import PreviousValue from "./components/PreviousValue";


const App = () => {


  return (
      <div>
          <ToggleComponent/>
          <PreviousValue/>
      </div>
  );
};

export default App;
