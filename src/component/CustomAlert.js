import React, {useState} from 'react'
import {Alert, AlertTitle, Collapse} from "@mui/material";

function CustomAlert(props) {

    const [open, setOpen] = useState(true)

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
