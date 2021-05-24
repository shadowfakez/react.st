import Dialog from "./Dialog/Dialog";
import Messages from "./Messages/Messages";

const Dialogs = (props) => {
    return (
        <div className="grid grid-cols-6">

            <Dialog dialogs={props.state.dialogs}/>
            <div className="col-start-2 col-span-5">
                <Messages messages={props.state.messages}/>
            </div>


        </div>
    );
}

export default Dialogs;