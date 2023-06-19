import { Box, useTheme, Grid } from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";
import { tokens } from "../../theme";
import {Image} from 'mui-image'
import Header from "../../components/Header";
import data from "../../data/oladipo.json";
import ScoutCard from "../../components/scoutCard";
import { useState, useEffect } from "react";

const PlayerBio = () => {
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);

    useEffect(() => {
        fetch('https://olivine-whispering-ear.glitch.me/scoutingReports')
        .then(res => res.json())
        .then(data => setReport(data))
    },[])

    const [report, setReport] = useState([]);

    const columns = [
        {field: "gameId", headerName: "Game ID"},
        {field: "season", headerName: "Season", cellClassName: "name-column--cell"},
        {field: "seasonType", headerName: "Season Type"},
        {field: "date", headerName: "Date", cellClassName: "date-column"},
        {field: "team", headerName: "Team"},
        {field: "opponent", headerName: "Opponent"},
        {field: "outcomeFormatted", headerName: "W or L"},
        {field: "pts", headerName: "PTS"},
        {field: "ast", headerName: "AST"},
        {field: "blk", headerName: "BLK"},
        {field: "reb", headerName: "REB"},
        {field: "stl", headerName: "STL"},
        {field: "ft%", headerName: "FT%"},
        {field: "fta", headerName: "FTA"},
        {field: "ftm", headerName: "FTM"},
        {field: "fg%", headerName: "FG%"},
        {field: "fga", headerName: "FGA"},
        {field: "fgm", headerName: "FGM"},
        {field: "pf", headerName: "PF"},
        {field: "oreb", headerName: "OREB"},
        {field: "dreb", headerName: "DREB"},
    ];

    return (
        <Box m = "20px">
            <Box display="flex" justifyContent = "space-between" alignItems="center">
                <Header title = "PLAYER INFORMATION" subtitle = "Currently Showing Victor Oladipo"/>
            </Box>

            <Box display = "grid" gridTemplateColumns = "repeat(12, 1fr)" gridAutoRows = "140px" gap ="40px">
                <Box gridColumn = "span 2" gridRow="span 2"  display = "flex" alignItems = "center" justifyContent="center">
                    <Image src = "https://cdn.nba.com/headshots/nba/latest/1040x760/203506.png"/>
                </Box>

                <Box gridColumn = "span 6" gridRow="span 2"  display = "flex" alignItems = "center" justifyContent="center">
                    <Grid container spacing = {3}>
                        {report.map(reports => (
                            <Grid item key = {reports.id} xs = {12} md = {6} lg = {4}> 
                                <ScoutCard report = {reports}/>
                            </Grid>
                        ))}
                    </Grid>
                </Box>
                {/* <Box gridColumn = "span 2" gridRow="span 2" display = "flex" alignItems = "center" justifyContent="center">
                    <Button onClick={handleOpen} sx = {{color: 'white', fontSize: "20px"}}>Show Scout Reports</Button>
                    <Backdrop
                        sx={{ color: '#fffff', zIndex: (theme) => theme.zIndex.drawer + 1 }}
                        open={open}
                        onClick={()=>setOpen(false)}
                        >
                        <Box display="flex" justifyContent = "space-between" alignItems="center">
                            <Typography variant="h1" >Scout Reports</Typography>
                        </Box>
                        <Typography variant="h1" >Scout Reports</Typography>
                    </Backdrop>
                </Box> */}
            </Box>
            <Box m = "40px 0 0 0" height = "75vh" sx = {{
                        "& .MuiDataGrid-root": {
                            border: "none"
                        },
                        "& .MuiDataGrid-cell": {
                            borderBottom: "none"
                        },
                        "& .name-column--cell": {
                            color: colors.greenAccent[300]
                        },
                        "& .MuiDataGrid-columnHeaders": {
                            backgroundColor: colors.blueAccent[700],
                            borderBottom: "none"
                        },
                        "& .MuiDataGrid-virtualScroller": {
                            backgroundColor: colors.primary[400],
                        },
                        "& .MuiDataGrid-footerContainer": {
                            backgroundColor: colors.blueAccent[700],
                            borderTop: "none"
                        },
                    }}>
                    <DataGrid 
                        rows = {data.gameLog}
                        columns = {columns}
                        getRowId={(row) => row.gameId}
                    />
                    </Box>
        </Box>
    )
}

export default PlayerBio;