import {NavLink} from "react-router-dom";

const DialogItem = (props) => {
    let path = "/dialogs/" + props.id;
    return (
        <div className="flex p-2">
            <div>
                <img className="h-12 w-12 rounded-full border-2 border-blue-600 m-2" src={props.avatar} alt=""/>
            </div>
            <div className="flex">
                <NavLink className="text-blue-400 pl-2 m-auto hover:text-gray-800 focus:text-white" to={path}>{props.name}</NavLink>
            </div>


        </div>
    );
}

const Dialog = (props) => {
    let dialogsElements = props.dialogs.map(d => <DialogItem id={d.id} name={d.name} avatar={d.avatar}/>);

    return (
        <div className="">

            {dialogsElements}

        </div>
    );
}

export default Dialog;