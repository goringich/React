import Dialogs from "./Dialogs"
import { sendSMSActionCreator } from "../redux/dialogs-reduser"
import { connect } from "react-redux"

let mapStateToProps = (state) => {
    return{
        dialogsPage: state.dialogsPage
    }
}

let mapDispatchToProps = (dispatch) => {
    return{
        addSMS: (text) => {
            let action = sendSMSActionCreator(text)
            dispatch(action)
        }
    }
}

const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs)
export default DialogsContainer
