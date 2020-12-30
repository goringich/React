import s from "./peoples/People.module.css"
import People from "./peoples/People"

let Users = (props) => {
    let Peoples = props.users.map( p => <People key={p.id} name={p.name} img={p.img} id={p.id} city={p.city} status={p.status} country={p.country}/>)

    return (
        <div>
            <div className={s.title}>Users</div>
            <div className={s.inner}>
                <div className={s.more}>{Peoples} 
                    <div className={s.more2}>Show more</div>
                </div>
            </div>
        </div>
    )
}

export default Users
