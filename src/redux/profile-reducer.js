const ADD_POST = 'ADD-POST'
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT'

let initialState = {
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
}

const profileReducer = (state = initialState, action) => {

    switch (action.type) {
        case ADD_POST:
            let newPost = {
                id: 5,
                post: state.newPostText
            }
            state.postsData.push(newPost)
            state.newPostText = ''
            break;
        case UPDATE_NEW_POST_TEXT:
            state.newPostText = action.newText
            break;
    }

    return state;
}

export const addPostActionCreator = () => ({type: ADD_POST})
export const onPostChangeActionCreator = (newText) =>
    ({
        type: UPDATE_NEW_POST_TEXT,
        newText: newText
    })

export default profileReducer