import { Box, Typography, useTheme } from '@mui/material';
import { DataGrid } from "@mui/x-data-grid";
import { tokens } from "../../theme";
import teamData from "../../data/miamiHeat.json";
import Header from '../../components/Header.jsx';
import { useState } from "react";
import { Link } from "react-router-dom";
import { ProSidebar, Menu, MenuItem } from "react-pro-sidebar";



const Item = ({ title, to, selected, setSelected }) => {
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);
    return (
      <MenuItem
        active={selected === title}
        style={{
          color: colors.grey[100],
        }}
        onClick={() => setSelected(title)}
      >
        <Typography>{title}</Typography>
        <Link to={to} />
      </MenuItem>
    );
  };


const Homepage = () => {
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);

    const columns = [
        {field: "nbaId", headerName: "NBA ID"},
        {field: "name", headerName: "Name", cellClassName: "name-column--cell"},
        {field: "age", headerName: "Age"},
        {field: "ppg", headerName: "Points Per Game"},
        {field: "ast", headerName: "Assists"},
        {field: "blk", headerName: "Blocks"},
        {field: "fg%", headerName: "Field Goal %"},
        {field: "fga", headerName: "Field Goals Attempted"},
        {field: "fgm", headerName: "Field Goals Made"},
        {field: "ft%", headerName: "Free Throw %"},
        {field: "fta", headerName: "Free Throws Attempted"},
        {field: "ftm", headerName: "Free Throws Made"},
        {field: "fg%", headerName: "Field Goal %"},
        {field: "fga", headerName: "Field Goals Attempted"},
        {field: "fgm", headerName: "Field Goals Made"},
        {field: "fg%", headerName: "Field Goal %"},
        {field: "fga", headerName: "Field Goals Attempted"},
        {field: "fgm", headerName: "Field Goals Made"},
    ];
    const [selected, setSelected] = useState("General Player Stats");

    return <Box m = "20px">
        <Box display = "flex" justifyContent="start" allignItems = "center">
            <Header title = "TEAM STATISTICS" subtitle = "Currently displaying Miami Heat Data"/>
            <ProSidebar>
                <Menu iconShape="square">
                    <Item
                    title="General Player Stats"
                    to="/"
                    selected={selected}
                    setSelected={setSelected}
                    />
                    <Item
                    title="General Team Stats"
                    to="/team-stats"
                    selected={selected}
                    setSelected={setSelected}
                    />
                </Menu>   
            </ProSidebar>
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
                    rows = {teamData.boxScorePerGame}
                    columns = {columns}
                    getRowId={(row) => row.nbaId}
                />
            </Box>
    </Box>
}

export default Homepage;