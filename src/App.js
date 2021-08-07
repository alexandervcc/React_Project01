import React,{useState} from 'react'
import AddUser from './Components/Users/AddUser'
import UserList from './Components/Users/UserList'

function App() {
  const[userlist,setUserlist]=useState();

  const handleAddUser=()=>{

  };

  return (
    <div>
      <AddUser/>
      <UserList users={[]}/>
    </div>
  );
}

export default App;
