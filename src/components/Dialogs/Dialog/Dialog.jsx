import {NavLink} from "react-router-dom";
import s from "./Dialog.module.css";

const DialogItem = (props) => {
    let path = "/dialogs/" + props.id;
    return (
        <div className={s.dialog}>
            <img src={props.avatar} alt=""/>
            <NavLink to={path} activeClassName={s.active}>{props.name}</NavLink>
        </div>
    );
}

const Dialog = (props) => {
    let dialogsElements = props.dialogs.map( d => <DialogItem id={d.id} name={d.name} avatar={d.avatar} /> );

    return (
        <div className={s.dialogsItems}>

            {dialogsElements}

        </div>
    );
}

export default Dialog;