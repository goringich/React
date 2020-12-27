let initialState = {
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

const sidebarReduser = (state = initialState, action) => {
    return state
}

export default sidebarReduser
