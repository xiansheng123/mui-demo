import {Box, Grid, Stack, Typography} from "@mui/material";
import {styled} from "@mui/material/styles";
import TableCustomFilter from "./component/TableCustomFilter";
import TableServerSide from "./component/TableServerSide";
import Count from "./component/Count";
import CustomAlert from "./component/CustomAlert";
import SatisfactionChartCard from "./component/chart/SatisfactionChartCard";
import chartData from "./component/chart/chartData";
import ConversionsChartCard from "./component/chart/ConversionsChartCard";


const APP_HEADER_HEIGHT = 80;
const SIDE_BAR_WIDTH = 250;
const FOOTER_HEIGHT = 50;

export const gridSpacing = 3;
export const drawerWidth = 260;
export const appDrawerWidth = 320;

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
        <>
            <Stack>
                {/*<Box>*/}
                {/*    <CustomAlert>*/}
                {/*        <div>yes, I am from parent</div>*/}
                {/*    </CustomAlert>*/}
                {/*</Box>*/}
                {/*<Box sx={{p: 2, border: '1px dashed grey'}}>*/}
                {/*    <Typography variant='body2'>123</Typography>*/}
                {/*    <Typography>789</Typography>*/}
                {/*</Box>*/}
                {/*<Box sx={{p: 2, border: '1px dashed grey'}}>*/}
                {/*   <TableCustomFilter />*/}
                {/*</Box>*/}
                {/*<Box>*/}
                {/*    <TableServerSide></TableServerSide>*/}
                {/*</Box>*/}
                {/*<Box>*/}
                {/*    <Count></Count>*/}
                {/*</Box>*/}
                {/*<Box>*/}
                {/*     <SatisfactionChartCard chartData.js={ chartData.js}></SatisfactionChartCard>*/}
                {/*</Box>*/}
            </Stack>

            <Grid container spacing={gridSpacing} alignItems="center">
                <Grid item xs={12} md={6} lg={6}>
                    <ConversionsChartCard chartData={chartData.ConversionsChartCardData}/>
                </Grid>
                <Grid item xs={12} md={6} lg={6}>
                    <SatisfactionChartCard chartData={chartData.SatisfactionChartCardData}/>
                </Grid>
            </Grid>

        </>
    )
}

export default IndexPage;
