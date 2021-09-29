import "./App.css";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import HomePageMenu from "./components/HomeComponents/HomePageMenu";
import AboutMe from "./components/MyProfileComponents/AboutMe";
import { Grid, Typography, Paper, darken } from "@material-ui/core";
import { ThemeProvider, createMuiTheme } from "@material-ui/core/styles";
import React from "react";
import SideBar from "./components/SideBar";
import SwitchButton from "./components/SwitchButton";
import Resume from "./components/MyProfileComponents/Resume";
import MyProjects from "./components/MyProfileComponents/MyProjects";
function App() {
  const [mode, setMode] = React.useState(true);

  const darkTheme = createMuiTheme({
    palette: {
      type: "dark",
      background: {
        default: "#111821",
        paper: "#111821",
      },
      text: {
        primary: "#fff",
        secondary: "#cccccc",
      },
    },
  });
  const whiteTheme = createMuiTheme({
    palette: {
      type: "light",
    },
    text: {
      primary: "black",
      secondary: "black",
    },
  });

  return (
    <ThemeProvider theme={mode ? darkTheme : whiteTheme}>
      <Paper variant="outlined" style={{ minHeight: "100vh" }}>
        <BrowserRouter>
          <div onChange={() => setMode(!mode)}>
            <SideBar />
          </div>
          <Switch>
            <Route path="/Projects" component={MyProjects} />
            <Route path="/Resume" component={Resume} />
            <Route path="/" component={AboutMe} />
            {/* <Route path="/" component={HomePageMenu} /> */}
          </Switch>
          <div onChange={() => setMode(!mode)}></div>
        </BrowserRouter>
      </Paper>
    </ThemeProvider>
  );
}

export default App;
