import React from 'react'
import Card from '../UI/Card'
import classes from './UserList.module.css'

function UserList(props) {
    
    return (
    <Card className={classes.users}>
        <ul>{
            props.users.map((us)=>{
                return <li key={us.id}>{us.name} ({us.age} years old)</li>
            })
            }
        </ul>
    </Card>
    )
}

export default UserList
