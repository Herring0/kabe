const SEND_MESSAGE = 'ADD-MESSAGE'
const UPDATE_NEW_MESSAGE_TEXT = 'UPDATE-NEW-MESSAGE_TEXT'

let initialState = {
    dialogsData: [
        {id: 1, name: "Max"},
        {id: 2, name: "Alex"},
        {id: 3, name: "John"},
        {id: 4, name: "Stuart"},
        {id: 5, name: "Andrew"}
    ],
    messagesData: [
        {
            id: 1,
            message: "we are working for the dance and sing songs. this car is very awesome for the youngster. please vote this car and like our post",
            from: 1
        },
        {
            id: 2,
            message: "yes, really very awesome car i see the features of this car in the official website of #Mercedes-Benz and really impressed :-)",
            from: -1
        },
        {
            id: 3,
            message: "i like lexus cars, lexus cars are most beautiful with the awesome features, but this car is really outstanding than lexus",
            from: 1
        }
    ],
    newMessageText: ""
}

const dialogsReducer = (state = initialState, action) => {

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