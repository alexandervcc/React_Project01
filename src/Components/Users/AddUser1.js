import React, { useState ,useRef} from 'react'
import Wrapper from '../Helpers/Wrapper';
import Button from '../UI/Button';
import Card from '../UI/Card';
import ErrorModal from '../UI/ErrorModal';
import classes from "./AddUser.module.css"

function AddUser(props) {
    //useRef(): only inside functional components
    //ref: content of a DOM node
    const nameInputRef=useRef();
    const ageInputRef=useRef();

    const [user, setUser] = useState('');
    const [age, setAge] = useState('');
    const [error, setError] = useState();

    const addUserHandler = (event) => {
        event.preventDefault();
        const enteredName=nameInputRef.current.value;
        const enteredAge=ageInputRef.current.value;
        
        console.log('RegUser:',nameInputRef.current.value);
        console.log(' RefAge:',ageInputRef.current.value);
        
        //if (user.trim().length === 0 || age.trim() === 0) {
        if (enteredName.trim().length === 0 || enteredAge.trim() === 0) {
                console.log("Invalid Inputs");
            setError({
                title: "Invalid Input",
                message: "Insert valid name and age (no empty)"
            });
            return;
        }
        //if (+age < 1) {
        if (+enteredAge < 1) {
            console.log("Invalid Age");
            setError({
                title: "Invalid Input",
                message: "Insert valid age (greater than 0)"
            });
            return;
        }
        
        console.log(user, age);
        //Props function to update Data
        //props.onAddUser(user, age);
        props.onAddUser(enteredName, enteredAge);

        setUser('')
        setAge('')
    }

    const userChangeHandler = (event) => {
        setUser(event.target.value)
    };
    const ageChangeHandler = (event) => {
        setAge(event.target.value)
    };

    const errorHandler = () => {
        setError(null)
    }

    return (
        <Wrapper>
            {// 'error&&': if error is an object (no empty)
                error && <ErrorModal
                    title={error.title}
                    message={error.message}
                    onConfirm={errorHandler}
                />
            }

            <Card className={classes.input}>
                <form onSubmit={addUserHandler}>
                    <label htmlFor="username">User Name:</label>
                    <input 
                        id="username"
                        type="text"
                        onChange={userChangeHandler}
                        value={user} 
                        ref={nameInputRef}
                    />
                    <label htmlFor="age">Age:</label>
                    <input 
                        id="age"
                        type="number"
                        onChange={ageChangeHandler}
                        value={age} 
                        ref={ageInputRef}
                    />
                    <Button type="submit">Add User</Button>
                </form>
            </Card>
        </Wrapper>
    )
}

export default AddUser
