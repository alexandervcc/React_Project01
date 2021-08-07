import React from 'react'
import ReactDOM from 'react-dom'
import Button from './Button'
import Card from './Card'
import classes from "./ErrorModal.module.css"

const Backdrop=props=>{
    return <div className={classes.backdrop} onClick={props.onConfirm}></div>
}

const ModalOverlay =({title,message,onConfirm})=>{
    return ( 
        <Card className={classes.modal}>
        <header className={classes.header}>
            <h2>{title}</h2>
        </header>
        <div className={classes.content}>
            <p>
                {message}
            </p>
        </div>
        <footer className={classes.actions}>
            <Button onClick={onConfirm}>Okay</Button>
        </footer>
    </Card>
    )
}

function ErrorModal({
    onConfirm,
    title,
    message
}){
    return (
        <React.Fragment>
            {ReactDOM.createPortal(
                <Backdrop 
                    onConfirm={onConfirm}/>,
                    document.getElementById('backdrop-root')
                )}
            {ReactDOM.createPortal(
                <ModalOverlay title={title} message={message} onConfirm={onConfirm}/>,
                document.getElementById('overlay-root')
                )
           }
        </React.Fragment>
    )
}

export default ErrorModal
