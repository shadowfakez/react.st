import React from "react";

const MessageItem = (props) => {

    return (
        <div className="grid grid-cols-4">
            <div className="text-gray-900 text-xl border-2 rounded-md border-gray-900 bg-gray-400 p-1 m-1 col-start-3 col-span-2">
                {props.message}
            </div>
        </div>
    );
}

const Messages = (props) => {


    let messagesElements = props.messages.map(m => <MessageItem message={m.message}/>)

    let newMesEl = React.createRef();
    let newMess = () => {
        let message = newMesEl.current.value;
        alert(message);
    }

    return (
        <div className="">
            <div className="p-4">
                {messagesElements}
            </div>
            <div className="flex">
                <textarea className="m-4 p-4 w-full h-32 rounded-md resize-none border-2 border-gray-700"
                          ref={newMesEl}/>
            </div>

            <div className="flex justify-center p-4">
                <button
                    className="bg-white hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded "
                    onClick={newMess}>Add new message
                </button>
            </div>

        </div>

    );
}

export default Messages;