import profileReduser from "./components/redux/profile-reduser"
import dialogsReduser from "./components/redux/dialogs-reduser"
import sidebarReduser from "./components/redux/sidebar-reduser"

let store = {
    _appState: {
        profilePage: {
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
        },
        dialogsPage:{
            dialogs: [
                {
                    id: 1,
                    name: "Igor Kim",
                    photo: "https://i.pinimg.com/originals/9c/77/46/9c7746225873e02d83b9315501b8dd2f.jpg"
                },
                {
                    id: 2,
                    name: "Gubanov Ivan",
                    photo: "https://lumpics.ru/wp-content/uploads/2017/11/Programmyi-dlya-sozdaniya-avatarok.png"
                },
                {
                    id: 3,
                    name: "Kirill Kim",
                    photo: "https://shutniki.club/wp-content/uploads/2019/12/v1-babay29.png"
                },
                {
                    id: 4,
                    name: "Gubanov Ivan",
                    photo: "https://lumpics.ru/wp-content/uploads/2017/11/Programmyi-dlya-sozdaniya-avatarok.png"
                },
                {
                    id: 3,
                    name: "Kirill Kim",
                    photo: "https://shutniki.club/wp-content/uploads/2019/12/v1-babay29.png"
                },
                {
                    id: 5,
                    name: "Gubanov Ivan",
                    photo: "https://i.pinimg.com/originals/9c/77/46/9c7746225873e02d83b9315501b8dd2f.jpg"
                },
                {
                    id: 3,
                    name: "Kirill Kim",
                    photo: "https://shutniki.club/wp-content/uploads/2019/12/v1-babay29.png"
                },
                {
                    id: 6,
                    name: "Gubanov Ivan",
                    photo: "https://i.pinimg.com/originals/9c/77/46/9c7746225873e02d83b9315501b8dd2f.jpg"
                },
                {
                    id: 3,
                    name: "Kirill Kim",
                    photo: "https://shutniki.club/wp-content/uploads/2019/12/v1-babay29.png"
                },
                {
                    id: 7,
                    name: "Gubanov Ivan",
                    photo: "https://i.pinimg.com/originals/9c/77/46/9c7746225873e02d83b9315501b8dd2f.jpg"
                }
            ],
            sms: [
                {
                    name: "Igor Kim",
                    photo: "https://i.pinimg.com/originals/9c/77/46/9c7746225873e02d83b9315501b8dd2f.jpg",
                    id: 1,
                    message: "Hi, my name is Igor, What is your name?"
                },
                {
                    name: "Kirill Kim",
                    photo: "https://lumpics.ru/wp-content/uploads/2017/11/Programmyi-dlya-sozdaniya-avatarok.png",
                    id: 2,
                    message: "Wow, you are so fun, nice idea, yes of course"
                },
                {
                    name: "Igor Kim",
                    photo: "https://i.pinimg.com/originals/9c/77/46/9c7746225873e02d83b9315501b8dd2f.jpg",
                    id: 3,
                    message: "Are ypo down?"
                },
                {
                    name: "Kirill Kim",
                    photo: "https://lumpics.ru/wp-content/uploads/2017/11/Programmyi-dlya-sozdaniya-avatarok.png",
                    id: 4,
                    message: "Yes, I am"
                },
            ]
        },
        sidebar: {
            friends: [
                {
                    name: "Igor",
                    img: "https://whatsism.com/uploads/posts/2018-05/thumbs/1525351974_kung_fu_panda.jpg"
                },
                {
                    name: "Ivan",
                    img: "https://bipbap.ru/wp-content/uploads/2017/10/3-6.png"
                },
                {
                    name: "Kirill",
                    img: "https://shutniki.club/wp-content/uploads/2020/01/smeshnye_avatarki_6_17105635.jpg"
                }
            ]
        }
    },

    getState() {
        return this._appState
    },

    subscribe(observer) {
        this._callSubscriber = observer
    },

    _callSubscriber() {
        console.log("state")
    },

    dispatch(action) {
        this._appState.profilePage = profileReduser(this._appState.profilePage, action)
        this._appState.dialogsPage = dialogsReduser(this._appState.dialogsPage, action)
        this._appState.sidebar = sidebarReduser(this._appState.sidebar, action)

        this._callSubscriber(this._appState)
    }
}

export default store
window.store = store


















