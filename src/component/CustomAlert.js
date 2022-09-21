import React, {useContext} from 'react'
import {Alert, AlertTitle} from "@mui/material";
import {AlertStatusContext} from "../TestPage";

function CustomAlert(props) {
    const {setShowAlert} = useContext(AlertStatusContext)
    const onClose = () => {
        setShowAlert(false)
    }

    return (
        <Alert severity='info' onClose={onClose}>
            <AlertTitle>Success</AlertTitle>
            {props.children}
        </Alert>
    )
}

export default CustomAlert
