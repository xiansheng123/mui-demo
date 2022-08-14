import React, {useEffect, useState} from 'react'
import {Alert, AlertTitle, Collapse} from "@mui/material";

function CustomAlert(props) {
    const {show} = props

    const [open, setOpen] = useState()

    console.log(`CustomAlert outside ${show}`);
    console.log(`CustomAlert inside ${open}`);

    useEffect(() => {
        setOpen(show);
    }, [show])

    return (
        <Collapse in={open}>
            <Alert severity='info' onClose={() => {
                setOpen(false)
            }}>
                <AlertTitle>Success</AlertTitle>
                {props.children}
            </Alert>
        </Collapse>
    )
}

export default CustomAlert
