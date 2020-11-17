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
                <Navbar/>
                <div className="app-wrapper-content wrapper">
                    <Route path="/dialogs" render={() => <Dialogs
                        dialogsState={props.appState.messagesPage}/>}/>
                    <Route path="/profile" render={() => <Profile
                        profileState={props.appState.profilePage}/>}/>
                </div>
            </div>
        </BrowserRouter>
    );

}

export default App;
