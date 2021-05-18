import s from './Dialogs.module.css';
import {NavLink} from "react-router-dom";
import Dialog from "./Dialog/Dialog";
import Messages from "./Messages/Messages";

const Dialogs = (props) => {
    return (
        <div className={s.dialogs}>

                <Dialog dialogs={props.state.dialogs} />

                <Messages messages={props.state.messages} />

        </div>
    );
}

export default Dialogs;