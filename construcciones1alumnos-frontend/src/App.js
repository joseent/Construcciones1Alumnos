//@ts-check
import React from 'react';
import Background from './components/background/Background';
import LoginForm from "./components/loginForm/LoginForm";
import ForumList from './components/ForumList/ForumList';
import NewForumQuestion from './components/newForumQuestion/NewForumQuestion';


function App() {
  return (
    <div>
<Background/>
{/* <LoginForm /> */}
<NewForumQuestion/>
<ForumList/>

      </div>
  );
}

export default App;
