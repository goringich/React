import s from "./People.module.css"

const People = (props) => {
    if (props.users.length === 0){
        props.setUsers([
            {
                id: 1,
                name: "Gubanov Daun",
                status: "Im nigger sheet bitch, im loh.",
                city: "Moscow",
                country: "Russia",
                img: "https://i.pinimg.com/originals/9c/77/46/9c7746225873e02d83b9315501b8dd2f.jpg",
                followed: true
            },
            {
                id: 1,
                name: "Gubanov Daun",
                status: "Im nigger sheet bitch, im loh.",
                city: "Moscow",
                country: "Russia",
                img: "https://i.pinimg.com/originals/9c/77/46/9c7746225873e02d83b9315501b8dd2f.jpg",
                followed: true
            },
            {
                id: 1,
                name: "Gubanov Daun",
                status: "Im nigger sheet bitch, im loh.",
                city: "Moscow",
                country: "Russia",
                img: "https://i.pinimg.com/originals/9c/77/46/9c7746225873e02d83b9315501b8dd2f.jpg",
                followed: false
            }
        ])
    }

    return(
        <div className={s.people}>
            <div className={s.left}>
                <img src={props.img} alt={props.id}/>
                {
                    props.users.map( p => 
                        {p.followed
                            ? <button onClick={() => { props.follow(p.id) }}>follow</button>
                            : <button onClick={() => { props.unfollow(p.id) }}>unfollow</button>
                        } 
                     )
                }
            </div>
            <div className={s.right}>
                <div className={s.who}>
                    <div className={s.name}>{props.name}</div>
                    <div className={s.status}>{props.status}</div>
                </div>
                <div className={s.where}>
                    <div className={s.country}>,{props.city}</div>
                    <div className={s.city}>{props.country}</div>
                </div>
            </div>
        </div>
    )
}

export default People
