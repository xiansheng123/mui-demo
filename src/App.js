import IndexPage from './IndexPage';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import {styled} from '@mui/material/styles';

const Main = styled('main')(({theme}) => ({
    backgroundColor: 'rgba(255,255,255,0.15)'
}))

function App() {
    return (
        <BrowserRouter>

            <Switch>
                <Route path="*" component={IndexPage}/>
            </Switch>


        </BrowserRouter>
    );
}

export default App;
