let state = {
    profilePage: {
        postsData: [
            { id: 1, post: "hi, mate" },
            { id: 2, post: "hello world" },
            { id: 3, post: "gj man" },
            { id: 4, post: "first" },
            { id: 5, post: "Andrew" }
        ]
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
}

export default state;