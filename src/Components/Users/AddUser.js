import React,{useState} from 'react'
import Button from '../UI/Button';
import Card from '../UI/Card';
import ErrorModal from '../UI/ErrorModal';
import classes from "./AddUser.module.css"

function AddUser(props) {
    const [user,setUser]=useState('');
    const [age,setAge]=useState('');
    const[error,setError]=useState();
    

    const addUserHandler=(event)=>{
        event.preventDefault();
        if(user.trim().length===0||age.trim()===0){
            console.log("Invalid Inputs");
            setError({
                title:"Invalid Input",
                message:"Insert valid name and age (no empty)"
            }); 
            return;
        }
        if(+age<1){
            console.log("Invalid Age");
            setError({
                title:"Invalid Input",
                message:"Insert valid age (greater than 0)"
            }); 
            return; 
        }
        console.log(user,age);
        props.onAddUser(user,age);
        setUser('')
        setAge('')
    }

    const userChangeHandler=(event)=>{
        setUser(event.target.value)
    };
    const ageChangeHandler=(event)=>{
        setAge(event.target.value)
    };

    const errorHandler=()=>{
        setError(null)
    }

    return (
        <div>
            {// 'error&&': if error is an object (no empty)
             error&& <ErrorModal 
                title={error.title} 
                message={error.message}
                onConfirm={errorHandler}
                />
             }
        
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
        </div>
    )
}

export default AddUser
