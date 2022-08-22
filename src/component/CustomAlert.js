import React, {useEffect, useState} from 'react'
import {Alert, AlertTitle, Collapse} from "@mui/material";

function CustomAlert(props) {
    let {onClose} = props

    return (
        <Alert severity='info' onClose={onClose}>
            <AlertTitle>Success</AlertTitle>
            {props.children}
        </Alert>
    )
}

export default CustomAlert
