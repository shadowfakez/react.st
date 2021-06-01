import Dialog from "./Dialog/Dialog";
import Messages from "./Messages/Messages";

const Dialogs = (props) => {
    return (
        <div className="grid grid-cols-6">

            <Dialog dialogs={props.dialogsPage.dialogs}/>
            <div className="col-start-2 col-span-5">
                <Messages
                    messages={props.dialogsPage.messages}
                    newMessageText={props.dialogsPage.newMessageText}
                    dispatch={props.dispatch}
                />
            </div>


        </div>
    );
}

export default Dialogs;