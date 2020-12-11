import React from 'react';
import Dialog from './dialog/Dialog';
import css from './Dialogs.module.css';
import Message from './message/Message';
import {sendMessageActionCreator, onMessageChangeActionCreator} from "../../redux/dialogs-reducer";

const Dialogs = (props) => {

    let dialogsComponents =
        props.dialogsPage.dialogsData.map(dialogData => <Dialog
            className={css.dialog_item}
            name={dialogData.name}
            id={dialogData.id}/>)

    let messagesComponents =
        props.dialogsPage.messagesData.map(messageData => <Message
            message={messageData.message}
            from={messageData.from}/>)

    let newMessageArea = React.createRef()

    let sendMessage = () => {
        let action = sendMessageActionCreator()
        props.dispatch(action)
    }

    let onNewMessageChange = () => {
        let newText = newMessageArea.current.value
        let action = onMessageChangeActionCreator(newText)
        props.dispatch(action)
    }

    return (
        <div className={css.dialogs_wrapper}>
            <div className={css.dialogs}>
                {dialogsComponents}
            </div>
            <div className={css.messages}>
                <div className={css.conversation_head}>
                    <figure>
                        <img
                            src="https://i2-prod.mirror.co.uk/incoming/article20422987.ece/ALTERNATES/s1200c/2_Poirot-The-Theft-of-the-Royal-Ruby-TV-Programme-1991dca.jpg"
                            alt="img"/>
                    </figure>
                    <span>
                        Herring
                        <i>Online</i>
                    </span>
                </div>
                {messagesComponents}
                <div className={css.new_message_container}>
                    <textarea className={css.tf} onChange={onNewMessageChange} placeholder='Enter your message'
                              ref={newMessageArea} value={props.dialogsPage.newMessageText}/>
                    <button onClick={sendMessage}>Send</button>
                </div>
            </div>
        </div>
    );
}

export default Dialogs;