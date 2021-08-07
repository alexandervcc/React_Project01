import React,{useState} from 'react'
import Button from '../UI/Button';
import Card from '../UI/Card';
import classes from "./AddUser.module.css"

function AddUser(props) {
    const [user,setUser]=useState('');
    const [age,setAge]=useState('');
    

    const addUserHandler=(event)=>{
        event.preventDefault();
        if(user.trim().length===0||age.trim()===0){
            console.log("Invalid Inputs"); 
            return;
        }
        if(+age<1){
            console.log("Invalid Age");
            return; 
        }
        console.log(user,age);
        setUser('')
        setAge('')
    }

    const userChangeHandler=(event)=>{
        setUser(event.target.value)
    };
    const ageChangeHandler=(event)=>{
        setAge(event.target.value)
    };

    return (
        <Card className={classes.input}>
        <form onSubmit={addUserHandler}>
            <label htmlFor="username">User Name:</label>
            <input id ="username" 
                type="text" 
                onChange={userChangeHandler}
                value={user}/>
            <label htmlFor="age">Age:</label>
            <input id ="age" 
                type="number" 
                onChange={ageChangeHandler}
                value={age}/>
            <Button type="submit">Add User</Button>

        </form>
        </Card>
    )
}

export default AddUser
