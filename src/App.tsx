import React from 'react';
import './App.css';
import ToggleComponent from "./components/Toggle";
import PreviousValue from "./components/PreviousValue";
import StoreValue from "./components/StoreValue";


const App = () => {


  return (
      <div>
          <ToggleComponent/>
          <PreviousValue/>
          <StoreValue/>
      </div>
  );
};

export default App;
