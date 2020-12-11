import profileReducer from "./profile-reducer";
import dialogsReducer from "./dialogs-reducer";

let store = {
    _state: {
        profilePage: {
            postsData: [
                {
                    id: 1,
                    post: "Curabitur Lonely Cat Enjoying in Summer #mypage ullamcorper ultricies nisi. Nam eget dui. Etiam rhoncus. Maecenas tempus, tellus eget condimentum rhoncus, sem quam semper libero, sit amet adipiscing sem neque sed ipsum. Nam quam nunc"
                },
                {
                    id: 2,
                    post: "we are working for the dance and sing songs. this video is very awesome for the youngster. please vote this video and like our channel"
                },
                {
                    id: 3,
                    post: "Amazon #amazonee the most beatuiful lamp available in america and the saudia arabia, you can purchase for the home and shop for increase the room beauty"
                },
                {
                    id: 4,
                    post: "Curabitur #amazon_shop ullamcorper ultricies nisi. Nam eget dui. Etiam rhoncus. Maecenas tempus, tellus eget condimentum rhoncus, sem quam semper libero, sit amet adipiscing sem neque sed ipsum. Nam quam nunc"
                },
                {
                    id: 5,
                    post: "It's hard to remember shortcuts when there are a large number of options. A more efficient way is to take advantage of editor's Insert Live Template shortcut."
                }
            ],
            newPostText: ""
        },
        dialogsPage: {
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
        },
        sidebar: {
            friendsData: [
                {id: 1, name: "Alex", imgPath: "https://s9.vcdn.biz/static/f/2317521141/image.jpg"},
                {id: 2, name: "Ciara", imgPath: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRlf1L0ltyOwt2thGsgTFJBWXzZpDgk8McHOg&usqp=CAU"},
                {id: 3, name: "Emilia", imgPath: "data:image/jpeg;base64,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"}
            ]
        }
    },
    _callSubscriber() {
        console.log('state changed')
    },
    subscribe(observer) {
        this._callSubscriber = observer
    },

    getState() {
        return this._state;
    },

    dispatch(action) {
        this._state.profilePage = profileReducer(this._state.profilePage, action);
        this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action);
        // this._state.profilePage = profileReducer(this._state.profilePage, action);
        this._callSubscriber(this._state)
    }
}

export default store