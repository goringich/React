const ADD_POST = "ADD-POST"

let initialState = {
    postStatistics: [
        {
            id: 1,
            message: "Hi, how are you?",
            likesCount: 231,
            repostCount: 51,
            img: "https://i.pinimg.com/originals/9c/77/46/9c7746225873e02d83b9315501b8dd2f.jpg"
        },
        {
            id: 2,
            message: "Hi, how are you? Wow what about you?",
            likesCount: 321,
            repostCount: 101,
            img: "https://lumpics.ru/wp-content/uploads/2017/11/Programmyi-dlya-sozdaniya-avatarok.png"
        },
        {
            id: 3,
            message: "Hi, how are you? Im fine, thanks",
            likesCount: 751,
            repostCount: 24,
            img: "https://shutniki.club/wp-content/uploads/2019/12/v1-babay29.png"
        }
    ]
}

const profileReduser = (state = initialState, action) => {
    let _addPost = (postMessage) => {
        let newPost = {
            id: 5,
            message: postMessage,
            likesCount: 0,
            repostCount: 0,
            img: "https://avatarko.ru/img/kartinka/2/Gubka_Bob.jpg"
        }
        let copyState = {...state}
        copyState.postStatistics = [...state.postStatistics]
        copyState.postStatistics.push(newPost)
    }

    if (action.type === ADD_POST){
        _addPost(action.postMessage)
    }

    return state
}

export const sendPostActionCreator = (text) => ({type: ADD_POST, postMessage: text})
export default profileReduser
