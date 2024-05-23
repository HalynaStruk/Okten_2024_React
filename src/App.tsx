import React, {useState} from 'react';
import './App.css';
import Users from "./components/Users/Users";
import Comments from "./components/Comments/Comments";
import Comment from "./components/Comment/Comment";
import post from './components/Comment/Comment'

const App = () => {

    const [userId, setUserId] = useState<any>(null);

    const getPostsFromUsers = (id: number) => {
        setUserId(id);
    }

    return (
      <div>
          <Users getPostsFromUsers={getPostsFromUsers}/>
          <Comments id={userId}/>
      </div>
  );
};

export default App;
