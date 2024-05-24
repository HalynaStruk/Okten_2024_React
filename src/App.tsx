import React, {useState} from 'react';
import './App.css';
import Users from "./components/Users/Users";
import Comments from "./components/Comments/Comments";

const App = () => {

    const [userId, setUserId] = useState<number| null>(null)

    const getPostsFromUsers = (id: number) => {
        console.log(id);
        setUserId(id)
    }
    console.log(userId);
    return (
      <div>
          <Users getPostsFromUsers={getPostsFromUsers}/>
          <Comments userId={userId}/>
      </div>
  );
};

export default App;
