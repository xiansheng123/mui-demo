import TestPage from './TestPage';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import {styled} from '@mui/material/styles';
import {createTheme, CssBaseline, GlobalStyles, ThemeProvider} from "@mui/material";

const Main = styled('main')(({theme}) => ({
    backgroundColor: 'rgba(255,255,255,0.15)'
}))

const darkTheme = createTheme({
    palette: {
        mode: 'light',
    },
});

function App() {
    return (
        <>

            {/*<GlobalStyles*/}
            {/*    styles={{*/}
            {/*        h1: {color: "red"},*/}
            {/*        h2: {color: "green"},*/}
            {/*        body: {backgroundColor: "lightpink"}*/}
            {/*    }}*/}
            {/*/>*/}
            <ThemeProvider theme={darkTheme}>
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
