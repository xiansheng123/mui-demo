// import React, {useState, useEffect} from "react";
// import MUIDataTable from "mui-datatables";
// import {makeStyles, createMuiTheme, MuiThemeProvider} from "@material-ui/core/styles";
// import {Icon, Fab} from "@mui/material";
// import history from "history.js";
// import LinearBuffer from './EditUserHelper/progresscircle';
// import deleteUser from './DeleteUser/DeleteUser'
// import localStorageService from "../../../services/localStorageService";
// import apiDataReturner from "./userAxios";
//
//
// const useStyles = makeStyles(theme => ({
//     button: {
//         margin: theme.spacing(1)
//     },
//     input: {
//         display: "none"
//     }
// }));
// /*
//     Customization of mui
//  */
// const getMuiTheme = () => createMuiTheme({
//     overrides: {
//         MUIDataTableBodyCell: {
//             root: {
//                 backgroundColor: "#FFFFFE"
//             }
//         }
//     }
// });
//
// /* eslint-disable */
// const TableSearchRender = () => {
//     // console.log('POS: ' + localStorageService.getItem("auth_user"));
//
//     if (localStorageService.getItem("auth_user") == null) {
//         history.push({
//             pathname: "/session/signin"
//         });
//     }
//
//     const [responsive, setResponsive] = useState("vertical");
//     const [dataRenderHook, setDataRenderHook] = useState([]);
//     const [tableBodyHeight, setTableBodyHeight] = useState("650px");
//     const [tableBodyMaxHeight, setTableBodyMaxHeight] = useState("");
//     const [tracker, setTracker] = useState();
//
//     const classes = useStyles();
//
//     // Redirect to edit
//     const newMountpage = (rowData) => {
//         var pickedUpRowData = rowData.rowData;
//         let path = `/Admin/users/editUser`;
//         history.push({
//             pathname: path,
//             state: {detail: pickedUpRowData}
//         });
//     };
//
//     /* Deletion */
//     const deleteRow = (rowDatam) => {
//         deleteUser(rowDatam);
//         var x = apiDataReturner();
//         const promise = new Promise((resolve, reject) => {
//             setTimeout(() => {
//                 setTracker(x);
//             }, 3000);
//         });
//
//         promise.then(values => {
//             setDataRenderHook(values);
//         });
//     };
//     /* User Locker/Unlocker */
//     const LockerUnlocker = (Iopticore_ID, state) => {
//         lockerUnlocker(Iopticore_ID, Boolean(state));
//         var x = apiDataReturner();
//         const promise = new Promise((resolve, reject) => {
//             setTimeout(() => {
//                 setTracker(x);
//             }, 3000);
//         });
//
//         promise.then(values => {
//             setDataRenderHook(values);
//         });
//
//     }
//
//     const ChangeHandler = (event) => {
//         console.log(event);
//     };
//
//     const columns = [
//         {
//             name: "userID",
//             label: "Iopticore_ID",
//             options: {
//                 filter: true,
//                 sort: true,
//                 responsive: 'scrollFullHeightFullWidth',
//                 display: false
//             }
//         },
//         {
//             name: "userName",
//             label: "Corporate ID",
//             options: {
//                 filter: true,
//                 responsive: 'scrollFullHeightFullWidth',
//                 sort: true,
//             }
//         },
//         {
//             name: "name",
//             label: "User Name",
//             options: {
//                 filter: true,
//                 responsive: 'scrollFullHeightFullWidth',
//                 sort: true,
//             }
//         },
//         {
//             name: "email",
//             label: "Email",
//             options: {
//                 filter: true,
//                 responsive: 'scrollFullHeightFullWidth',
//                 sort: true,
//             }
//         },
//         {
//             name: "role",
//             label: "Role",
//             options: {
//                 filter: true,
//                 responsive: 'scrollFullHeightFullWidth',
//                 sort: true,
//             }
//         },
//         {
//             name: "external",
//             label: "IsExternal",
//             options: {
//                 filter: true,
//                 sort: true,
//                 responsive: 'scrollFullHeightFullWidth',
//                 filterOptions: {
//                     names: ["Yes", "No"],
//                     logic(v, filterVal) {
//                         const show =
//                             (filterVal.indexOf("Yes") >= 0 && (v === true || v === 'true')) ||
//                             (filterVal.indexOf("No") >= 0 && (v === false || v === 'false'));
//                         return !show;
//                     }
//                 },
//                 customBodyRender: (val) => {
//                     return val === true ? "Yes" : "No";
//                 }
//             }
//         },
//         {
//             name: "locked",
//             label: "Access",
//             options: {
//                 filter: true,
//                 sort: true,
//                 empty: true,
//                 filter: true,
//                 sort: true,
//                 responsive: 'scrollFullHeightFullWidth',
//                 filterOptions: {
//                     names: ["Yes", "No"],
//                     logic(v, filterVal) {
//                         const show =
//                             (filterVal.indexOf("Yes") >= 0 && (v === true || v === 'true')) ||
//                             (filterVal.indexOf("No") >= 0 && (v === false || v === 'false'));
//                         return !show;
//                     }
//                 },
//                 customBodyRender: (val, tableMeta) => {
//                     //console.log('v: ' + val + ' ' + JSON.stringify(tableMeta))  ;
//                     return val === true ? (
//                         <Fab
//                             size="small"
//                             variant="extended"
//                             aria-label="Delete"
//                             className={classes.button}
//                             color="default"
//                             onClick={() => LockerUnlocker(tableMeta.rowData[0], tableMeta.rowData[6])}
//                         >
//                             <img src="https://img.icons8.com/plasticine/25/000000/unlock.png"/>
//                             &nbsp;<b>UnLock&nbsp;</b>
//                         </Fab>
//                     ) : (
//                         <Fab
//                             size="small"
//                             variant="extended"
//                             aria-label="Delete"
//                             className={classes.button}
//                             color="default"
//                             onClick={() => LockerUnlocker(tableMeta.rowData[0])}
//                         >
//                             <img src="https://img.icons8.com/dusk/25/000000/unlock.png"/>
//                             <b>&nbsp;&nbsp;Lock&nbsp;&nbsp;&nbsp;&nbsp;</b>
//                         </Fab>
//                     );
//                 }
//             }
//         },
//         {
//             name: "Edit",
//             options: {
//                 filter: true,
//                 sort: false,
//                 empty: true,
//                 responsive: 'scrollFullHeightFullWidth',
//                 customBodyRender: (value, tableMeta, updateValue) => {
//                     return (
//                         <Fab
//                             size="small"
//                             color="primary"
//                             aria-label="Edit"
//                             className={classes.button}
//                             onClick={() => newMountpage(tableMeta)}
//                         >
//                             <Icon>edit_icon</Icon>
//                         </Fab>
//                     );
//                 }
//             }
//         },
//         {
//             name: "Delete",
//             options: {
//                 filter: true,
//                 textAlign: 'center',
//                 sort: false,
//                 empty: true,
//                 responsive: 'scrollMaxWidth',
//                 customBodyRender: (value, tableMeta, updateValue) => {
//                     return (
//                         <Fab size="small"
//                              color="secondary"
//                              aria-label="Edit"
//                              className={classes.button}
//                              onClick={() => deleteRow(tableMeta.rowData[0])}
//                         >
//                             <Icon>delete_icon</Icon>
//                         </Fab>
//                     );
//                 }
//             }
//         }];
//
//     const options = {
//         selectableRows: 'none',
//         filter: true,
//         textAlign: 'center',
//         filterType: "dropdown",
//         fixedHeaderOptions: true,
//         rowsPerPage: 5,
//         pagination: true,
//         responsive: 'stacked',
//         enableNestedDataAccess: '.',
//         tableBodyHeight,
//         tableBodyMaxHeight
//     };
//
//     //var recentReceivedToken = localStorage.getItem('jwtAuthtokenManager');
//
//
//     var res = [];
//     useEffect(() => {
//         var x = apiDataReturner();
//         const promise = new Promise((resolve, reject) => {
//             setTimeout(() => {
//                 resolve(x);
//             }, 2000);
//         });
//
//         promise.then(values => {
//             setDataRenderHook(values);
//         });
//     }, [tracker]);
//
//     if (dataRenderHook.length === 0) {
//         return (
//
//             <React.Fragment>
//                 <div style={{padding: 0}}>
//
//                     <MuiThemeProvider theme={getMuiTheme()}>
//                         <div
//                             style={{
//                                 display: "flex",
//                                 justifyContent: "center",
//                                 alignItems: "center"
//                             }}
//                         >
//                             <LinearBuffer/>
//                         </div>
//                     </MuiThemeProvider>
//
//                 </div>
//
//             </React.Fragment>
//         )
//     } else {
//         return (
//             <div>
//                 <React.Fragment>
//                     <div style={{padding: 0}}>
//
//                         <MuiThemeProvider theme={getMuiTheme()}>
//                             <MUIDataTable
//                                 title={"IoptiCore User List"}
//                                 data={dataRenderHook}
//                                 columns={columns}
//                                 options={options}
//                             />
//                         </MuiThemeProvider>
//
//                     </div>
//
//                 </React.Fragment>
//             </div>
//         );
//     }
//
// }
//
// export default TableSearchRender;
