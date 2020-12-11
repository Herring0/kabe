const SEND_MESSAGE = 'ADD-MESSAGE'
const UPDATE_NEW_MESSAGE_TEXT = 'UPDATE-NEW-MESSAGE_TEXT'

const dialogsReducer = (state, action) => {

    switch (action.type) {
        case SEND_MESSAGE:
            let newMessage = {
                id: 4,
                message: state.newMessageText,
                from: -1
            }
            state.messagesData.push(newMessage)
            state.newMessageText = '';
            break;
        case UPDATE_NEW_MESSAGE_TEXT:
            state.newMessageText = action.newText
            break;
    }

    return state;
}

export const sendMessageActionCreator = () => ({type: SEND_MESSAGE})
export const onMessageChangeActionCreator = (newText) =>
    ({
        type: UPDATE_NEW_MESSAGE_TEXT,
        newText: newText
    })

export default dialogsReducer