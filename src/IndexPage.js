import {Box, Stack, Typography} from "@mui/material";
import {styled} from "@mui/material/styles";
import TableCustomFilter from "./component/TableCustomFilter";
import TableServerSide from "./component/TableServerSide";
import Count from "./component/Count";


const APP_HEADER_HEIGHT = 80;
const SIDE_BAR_WIDTH = 250;
const FOOTER_HEIGHT = 50;

const Main = styled('main', {shouldForwardProp: (prop) => prop !== 'open'})(({theme, open}) => ({
    marginTop: APP_HEADER_HEIGHT,
    borderBottomLeftRadius: 0,
    borderBottomRightRadius: 0,
    ...(!open && {
        transition: theme.transitions.create('margin', {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen
        }),
        width: `calc(100% - ${SIDE_BAR_WIDTH}px)`,
        marginLeft: SIDE_BAR_WIDTH + 20,
    }),
    ...(open && {
        transition: theme.transitions.create('margin', {
            easing: theme.transitions.easing.easeOut,
            duration: theme.transitions.duration.enteringScreen
        }),
        marginLeft: 20,
        width: '100vw',
    }),
    marginBottom: FOOTER_HEIGHT + 10,
}))


function IndexPage() {
    return (
        <Stack>
            <Box sx={{p: 2, border: '1px dashed grey'}}>
                <Typography variant='body2'>123</Typography>
                <Typography variant='outlined'>456</Typography>
                <Typography>789</Typography>
            </Box>
            {/*<Box>*/}
            {/*    <Count></Count>*/}
            {/*</Box>*/}
            <Box sx={{p: 2, border: '1px dashed grey'}}>
               <TableCustomFilter />
            </Box>
            <Box>
                <TableServerSide></TableServerSide>
            </Box>
        </Stack>

    )
}

export default IndexPage;
