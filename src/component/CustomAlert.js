import React from 'react'
import {Alert, AlertTitle} from "@mui/material";

function CustomAlert(props) {

    return (
        <Alert severity='info'>
            <AlertTitle>Success</AlertTitle>
            {props.children}
        </Alert>
    )
}

export default CustomAlert
