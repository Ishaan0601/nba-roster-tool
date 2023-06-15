import { ColorModeContext, useMode } from "./theme";
import { CssBaseline, ThemeProvider } from "@mui/material";
import { Routes, Route } from "react-router-dom";
import Topbar from "./scenes/global/Topbar";
import Sidebar from "./scenes/global/Sidebar";
import Teampage from "./scenes/teampage";
import ScoutForm from "./scenes/scoutingForm";
//import PlayerBio from "./scenes/playerBio";
// import Roster from "./scenes/createRoster";

function App() {
  const [theme, colorMode] = useMode();

  return ( 
    <ColorModeContext.Provider value = { colorMode }>
      <ThemeProvider theme = { theme }>
        <CssBaseline />
        <div className="app">
          <Sidebar />
          <main class = "content">
            <Topbar />
            <Routes>
              <Route path = "/" element = {<Teampage/>}></Route>
              <Route path = "/scouting-form" element = {<ScoutForm/>}></Route>
              {/* <Route path = "/player-info" element = {<PlayerBio/>}></Route> */}
              {/* <Route path = "/roster" element = {<Roster/>}></Route> */}
            </Routes>
          </main>
        </div>
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
}

export default App;
