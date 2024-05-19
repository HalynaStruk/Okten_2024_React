import React from 'react';
import './App.css';
import {UserComponent} from "./components/UserComponent";

const App = () => {

    const lift = (user:any) => {
        console.log(user);

    }

  return (
      <div>
          <UserComponent lift={lift}/>
          <hr/>

          <hr/>
      </div>
  );
};

export default App;
