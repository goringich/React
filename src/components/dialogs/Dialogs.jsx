import React from "react"
import s from "./Dialogs.module.css"
import {BrowserRouter} from "react-router-dom"
import DialogItem from "./dialog/DialogItem"
import Message from "./messages/Message"

const Dialogs = (props) => {
    let MessageElements = props.dialogsPage.sms.map( m => <Message id={m.id} key={m.id} message={m.message} name={m.name} photo={m.photo} />)
    let DialogsElements = props.dialogsPage.dialogs.map( d => <DialogItem id={d.id} key={d.id} name={d.name} photo={d.photo} />)

    let newSMSElement = React.createRef()
    let sendSMS = () => {
        let text = newSMSElement.current.value
        props.addSMS(text)
        newSMSElement.current.value = ""
    }

    return(
        <BrowserRouter className={s.Dialogs}>
            <div className={s.title}>Dialogs</div>
            <div className={s.dialogs}>
                <div className={s.person}>
                    {DialogsElements} 
                </div> 
                <div className={s.right}>
                    <div className={s.messages}>
                        {MessageElements}
                    </div>
                    <textarea ref={newSMSElement} type="text" placeholder="Input sms..."></textarea>
                    <button className={s.btn} onClick={sendSMS}>Отправить</button>
                </div>
            </div>
        </BrowserRouter>
    )
}

export default Dialogs
