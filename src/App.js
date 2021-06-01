
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import Profile from "./components/Profile/Profile";
import Dialogs from "./components/Dialogs/Dialogs";
import News from "./components/News/News";
import Music from "./components/Music/Music";
import Settings from "./components/Settings/Settings";
import Friends from "./components/Friends/Friends";
import {Route} from "react-router-dom";

const App = (props) => {

    return (
            <div className="grid grid-cols-8 gap-4 w-">
                <div className="col-start-1 col-span-8 bg-gray-50 border-b border-gray-200 h-full">
                    <Header />
                </div>

                <div className="col-start-2 col-end-3 ">
                    <Navbar state={props.state.navbar}/>
                </div>


                <div className="col-start-3 col-end-8 bg-gray-50 border-l border-gray-200 h-full">
                    <Route path="/profile"
                           render={() => <Profile
                               profilePage={props.state.profilePage}
                               dispatch={props.dispatch}
                                         />}
                    />
                    <Route path="/dialogs"
                           render={() => <Dialogs
                               dialogsPage={props.state.dialogsPage}
                               dispatch={props.dispatch}
                    />}/>
                    <Route path="/news" component={News}/>
                    <Route path="/music" component={Music}/>
                    <Route path="/settings" component={Settings}/>
                    <Route path="/friends" render={() => <Friends state={props.state.navbar}/>}/>
                </div>
            </div>
    );
}

export default App;
