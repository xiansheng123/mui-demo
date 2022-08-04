import React, {useEffect, useState} from 'react';
import {Box, Button, Typography} from "@mui/material";

function Count() {
    const [count, setCount] = useState(1);
    return (
        <>
            <Box sx={{p: 2, border: '1px dashed grey'}}>
                <Typography>Count:{count}</Typography>
            </Box>
            <Box sx={{p: 2, border: '1px dashed grey'}}>
                <Button onClick={() => setCount(1)}>Reset</Button>
                <Button onClick={() => setCount(count + 1)}>Add</Button>
                <Button onClick={() => setCount(count - 1)}>Minus</Button>
            </Box>

        </>
    )
}

export default Count
