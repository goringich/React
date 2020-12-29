const ADD_SMS = "ADD-SMS"

let initialState = {
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
            id: 5,
            name: "Kirill Kim",
            photo: "https://shutniki.club/wp-content/uploads/2019/12/v1-babay29.png"
        },
        {
            id: 6,
            name: "Gubanov Ivan",
            photo: "https://i.pinimg.com/originals/9c/77/46/9c7746225873e02d83b9315501b8dd2f.jpg"
        },
        {
            id: 7,
            name: "Kirill Kim",
            photo: "https://shutniki.club/wp-content/uploads/2019/12/v1-babay29.png"
        },
        {
            id: 8,
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
}

const dialogsReduser = (state = initialState, action) => {
    debugger
    let _addSMS = (SMS) => {
        let newSMS = {
            name: "Igor Kim",
            id: 5,
            message: SMS,
            photo: "https://i.pinimg.com/originals/9c/77/46/9c7746225873e02d83b9315501b8dd2f.jpg"
        }
        return {
            ...state,
            sms: [...state.sms, newSMS]
        }
    }
    if (action.type === ADD_SMS){
        _addSMS(action.SMS)
    }
    return {...state}
}

export const sendSMSActionCreator = (text) => ({type: ADD_SMS, SMS: text})
export default dialogsReduser
