import {NavLink} from "react-router-dom";

const FriendsItem = (props) => {
    let path = "/dialogs/" + props.id;
    return (
        <div className="flex">
                <div className="">
                    <img className="h-12 w-12 rounded-full border-2 border-blue-600 m-2" src={props.avatar} alt=""/>
                </div>

                <div className="flex">
                    <NavLink to={path} className="m-auto text-blue-500 focus:text-black">{props.name}</NavLink>
                </div>
        </div>
    );
}

const Navbar = (props) => {

    let friendsElements = props.state.friends.map(d => <FriendsItem id={d.id} name={d.name} avatar={d.avatar}/>);

    return (
        <nav className="bg-gray-50 pt-6 border-r border-gray-200 h-full">
            <div className="hover:bg-gray-100 w-full pb-2">
                <NavLink to="/profile" className="text-blue-500 focus:text-black ml-6 ">Profile</NavLink>
            </div>
            <div className="hover:bg-gray-100 w-full pb-2">
                <NavLink to="/dialogs" className="text-blue-500 focus:text-black ml-6 ">Messages</NavLink>
            </div>
            <div className="hover:bg-gray-100 w-full pb-2">
                <NavLink to="/news" className="text-blue-500 focus:text-black ml-6 ">News</NavLink>
            </div>
            <div className="hover:bg-gray-100 w-full pb-2">
                <NavLink to="/music" className="text-blue-500 focus:text-black ml-6 ">Music</NavLink>
            </div>
            <div className="hover:bg-gray-100 w-full pb-2">
                <NavLink to="/settings" className="text-blue-500 focus:text-black ml-6 ">Settings</NavLink>
            </div>
            <div className="mt-16 border-t border-gray-200 pt-3">
                <NavLink to="/friends" className="text-blue-500 focus:text-black ml-6 ">Friends</NavLink>
                <div className="mt-6">
                    {friendsElements}
                </div>
            </div>
        </nav>
    );
}

export default Navbar;