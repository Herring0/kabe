import React from 'react';
import {BrowserRouter, Route} from 'react-router-dom';
import './App.css';
import Dialogs from './components/dialogs/Dialogs';
import Header from './components/header/Header';
import Navbar from './components/navbar/Navbar';
import Profile from './components/profile/Profile';

const App = (props) => {
    return (
        <BrowserRouter>
            <div className="app-wrapper">
                <Header/>
                <Navbar sidebarState={props.appState.sidebar}/>
                <div className="app-wrapper-content wrapper">
                    <Route path="/dialogs" render={() => <Dialogs
                        dialogsPage={props.appState.dialogsPage}
                        dispatch={props.dispatch}/>
                    }/>
                    <Route path="/profile" render={() => <Profile
                        profilePage={props.appState.profilePage}
                        dispatch={props.dispatch} />
                    }/>
                </div>
            </div>
        </BrowserRouter>
    );

}

export default App;
