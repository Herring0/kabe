let store = {
    _state: {
    profilePage: {
        postsData: [
            { id: 1, post: "Curabitur Lonely Cat Enjoying in Summer #mypage ullamcorper ultricies nisi. Nam eget dui. Etiam rhoncus. Maecenas tempus, tellus eget condimentum rhoncus, sem quam semper libero, sit amet adipiscing sem neque sed ipsum. Nam quam nunc" },
            { id: 2, post: "we are working for the dance and sing songs. this video is very awesome for the youngster. please vote this video and like our channel" },
            { id: 3, post: "Amazon #amazonee the most beatuiful lamp available in america and the saudia arabia, you can purchase for the home and shop for increase the room beauty" },
            { id: 4, post: "Curabitur #amazon_shop ullamcorper ultricies nisi. Nam eget dui. Etiam rhoncus. Maecenas tempus, tellus eget condimentum rhoncus, sem quam semper libero, sit amet adipiscing sem neque sed ipsum. Nam quam nunc" },
            { id: 5, post: "It's hard to remember shortcuts when there are a large number of options. A more efficient way is to take advantage of editor's Insert Live Template shortcut." }
        ],
        newPostText: ""
    },
    messagesPage: {
        dialogsData: [
            { id: 1, name: "Max" },
            { id: 2, name: "Alex" },
            { id: 3, name: "John" },
            { id: 4, name: "Stuart" },
            { id: 5, name: "Andrew" }
        ],
        messagesData: [
            { id: 1, message: "we are working for the dance and sing songs. this car is very awesome for the youngster. please vote this car and like our post", from: 1},
            { id: 2, message: "yes, really very awesome car i see the features of this car in the official website of #Mercedes-Benz and really impressed :-)", from: -1},
            { id: 3, message: "i like lexus cars, lexus cars are most beautiful with the awesome features, but this car is really outstanding than lexus", from: 1 }
        ]
    }
},
    _callSubscriber() {
        console.log('state changed')
    },

    getState() {
        return this._state;
    },
    _addPost() {
        let newPost = {
            id: 5,
            post: this._state.profilePage.newPostText
        }
        this._state.profilePage.postsData.push(newPost)
        this._state.profilePage.newPostText = '';
        this._callSubscriber(this._state)
    },
    _updateNewPostText(newText) {
        this._state.profilePage.newPostText = newText
        this._callSubscriber(this._state)
    },
    subscribe(observer) {
        this._callSubscriber = observer
    },

    dispatch(action) {
        if (action.type === 'ADD-POST') {
            this._addPost();
        } else if (action.type === 'UPDATE-NEW-POST-TEXT') {
            this._updateNewPostText(action.newText)
        }
    }
}



export default store;