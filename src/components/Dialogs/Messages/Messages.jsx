import React from "react";
import {NavLink} from "react-router-dom";
import s from "./Messages.module.css";

const MessageItem = (props) => {

    return (
        <div className={s.message}>
            {props.message}
        </div>
    );
}

const Messages = (props) => {


    let messagesElements = props.messages.map( m => <MessageItem message={m.message} /> )

    let newMesEl = React.createRef();
    let newMess = () => {
        let message = newMesEl.current.value;
        alert(message);
    }

    return (
        <div className={s.messagesItems}>

            {messagesElements}

            <textarea name="" id="" cols="30" rows="10" ref={newMesEl}></textarea>
            <button onClick={ newMess }>Add new message</button>
        </div>

    );
}

export default Messages;