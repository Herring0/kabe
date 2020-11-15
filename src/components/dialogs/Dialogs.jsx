import React from 'react';
import Dialog from './dialog/Dialog';
import css from './Dialogs.module.css';
import Message from './message/Message';

const Dialogs = (props) => {

    let dialogsComponents = [
        props.dialogsState.dialogsData.map(dialogData => <Dialog name={dialogData.name} id={dialogData.id}/>)
    ]

    let messagesComponents = [
        props.dialogsState.messagesData.map(messageData => <Message message={messageData.message}/>)
    ]

    let messageArea = React.createRef()

    let sendMessage = () => {
        let messageText = messageArea.current.value;
        alert('message sended: ' + messageText);
    }

    return (
        <div className={css.dialogs_wrapper}>
            <div className={css.dialogs_items}>
                {dialogsComponents}
            </div>
            <div className={css.messages}>
                {messagesComponents}
                <div>
                    <textarea ref={messageArea}></textarea>
                    <button onClick={sendMessage}>Send</button>
                </div>
            </div>
        </div>
    );
}

export default Dialogs;