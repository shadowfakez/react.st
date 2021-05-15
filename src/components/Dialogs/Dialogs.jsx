import s from './Dialogs.module.css';
import {NavLink} from "react-router-dom";

const Dialogs = (props) => {
    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                <div className={s.dialog}>
                    <NavLink to="/dialogs/1" activeClassName={s.active}>Oleg</NavLink>
                </div>
                <div className={s.dialog + " " + s.active}>
                    <NavLink to="/dialogs/2" activeClassName={s.active}>Vika</NavLink>
                </div>
                <div className={s.dialog}>
                    <NavLink to="/dialogs/3" activeClassName={s.active}>Zheka</NavLink>
                </div>
                <div className={s.dialog}>
                    <NavLink to="/dialogs/4" activeClassName={s.active}>Dimas</NavLink>
                </div>
                <div className={s.dialog}>
                    <NavLink to="/dialogs/5" activeClassName={s.active}>Andrej</NavLink>
                </div>
                <div className={s.dialog}>
                    <NavLink to="/dialogs/6" activeClassName={s.active}>Kolyan</NavLink>
                </div>
                <div className={s.dialog}>
                    <NavLink to="/dialogs/7" activeClassName={s.active}>Tolyan</NavLink>
                </div>
            </div>
            <div className={s.messages}>
                <div className={s.message}>
                    sup beatch!
                </div>
                <div className={s.message}>
                    shalomchiki
                </div>
                <div className={s.message}>
                    go bukhat'!
                </div>
                <div className={s.message}>
                    go!go!go!
                </div>
            </div>
        </div>
    );
}

export default Dialogs;