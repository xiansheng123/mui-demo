import TestPage from './TestPage';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import {styled} from '@mui/material/styles';
import {Button, createTheme, CssBaseline, GlobalStyles, ThemeProvider} from "@mui/material";
import {useState} from "react";
import CustomActionColumns from "./component/CustomActionColumns";
import Example from "./component/testDemo";

// const Main = styled('main')(({theme}) => ({
//     backgroundColor: 'rgba(255,255,255,0.15)'
// }))
//
const lightTheme = createTheme();

function App() {
    const [count, setCount] = useState(0);

    const myClick = () => {
        setCount(x => x + 1)
    }
    return (
        <>
            {/*<ThemeProvider theme={lightTheme}>*/}
            {/*    <CustomActionColumns></CustomActionColumns>*/}
            {/*    <Example></Example>*/}
            {/*</ThemeProvider>*/}
            {/* <Button variant="contained"  onClick={myClick}>count</Button>*/}
            {/*<div>{count}</div>*/}
            {/*<GlobalStyles*/}
            {/*    styles={{*/}
            {/*        h1: {color: "red"},*/}
            {/*        h2: {color: "green"},*/}
            {/*        body: {backgroundColor: "lightpink"}*/}
            {/*    }}*/}
            {/*/>*/}
            <ThemeProvider theme={lightTheme}>
                <CssBaseline/>
                <BrowserRouter>
                    <Switch>
                        <Route path="*" component={TestPage}/>
                    </Switch>
                </BrowserRouter>
            </ThemeProvider>
        </>
    );
}

export default App;
