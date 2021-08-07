import React,{useState} from 'react'
import AddUser from './Components/Users/AddUser'
import UserList from './Components/Users/UserList'

function App() {
  const[userList,setUserList]=useState([]);

  const addUserHandler=(uname,uage)=>{
    setUserList((prevList)=>{
      //Latest state snapshot
      return [...prevList,{name:uname,age:uage,id:Math.random().toString()}]
    });
  };

  console.log(userList)

  return (
    <>
      <AddUser onAddUser={addUserHandler}/>
      <UserList users={userList}/>
    </>
  );
}

export default App;
