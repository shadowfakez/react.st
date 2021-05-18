import s from './Navbar.module.css';
import {NavLink} from "react-router-dom";

const FriendsItem = (props) => {
    let path = "/dialogs/" + props.id;
    return (
        <div className={s.friends}>
            <img src={props.avatar} alt=""/>
            <NavLink to={path} activeClassName={s.active}>{props.name}</NavLink>
        </div>
    );
}

const Navbar = (props) => {

    let friendsElements = props.state.friends.map(d => <FriendsItem id={d.id} name={d.name} avatar={d.avatar}/>);

    return (
        <nav className={s.nav}>
            <div className={s.item}>
                <NavLink to="/profile" activeClassName={s.active}>Profile</NavLink>
            </div>
            <div className={s.item}>
                <NavLink to="/dialogs" activeClassName={s.active}>Messages</NavLink>
            </div>
            <div className={s.item}>
                <NavLink to="/news" activeClassName={s.active}>News</NavLink>
            </div>
            <div className={s.item}>
                <NavLink to="/music" activeClassName={s.active}>Music</NavLink>
            </div>
            <div className={s.item}>
                <NavLink to="/settings" activeClassName={s.active}>Settings</NavLink>
            </div>
            <div className={s.friendsBlock}>
                <NavLink to="/friends" activeClassName={s.active}>Friends</NavLink>
                <div className={s.friendsList}>
                    {friendsElements}
                </div>
            </div>
        </nav>
    );
}

export default Navbar;