import * as React from "react";
import PropTypes from "prop-types";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import AlternateEmailIcon from "@mui/icons-material/AlternateEmail";
import PersonIcon from "@mui/icons-material/Person";
import ComputerIcon from "@mui/icons-material/Computer";
import DescriptionIcon from "@mui/icons-material/Description";
import ContactMailIcon from "@mui/icons-material/ContactMail";
import SwitchButton from "./SwitchButton";
import { Link } from "react-router-dom";
import AppBar from "@mui/material/AppBar";
import MenuIcon from "@mui/icons-material/Menu";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import MediaQuery from "react-responsive";

const drawerWidth = 240;

function ResponsiveDrawer(props) {
  // const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const drawer = (
    <div style={{ paddingRight: "5%", paddingLeft: "5%" }}>
      <div className="mt-3" style={{ textAlign: "center", color: "white" }}>
        <b style={{ fontSize: "150%" }}> Omer Perez</b>
      </div>
      <div className="mt-3 d-flex justify-content-center">
        <img
          style={{
            width: "170px",
            height: "170px",
            borderRadius: "50%",
          }}
          src="../Images/Profile Image.png"
        />
      </div>
      <div className="mt-3" style={{ textAlign: "center" }}>
        <p style={{ color: "white", fontSize: "95%" }}>
          Hi, my name is Omer Perez and I'm a junior Full Stack developer.
          Welcome to my personal website!
        </p>
        <div className="d-flex justify-content-center">
          <div className="row" style={{ minWidth: "100px" }}>
            <div className="col-2 offset-1">
              <a href="https://www.linkedin.com/in/omer-perez/" target="_blank">
                <IconButton
                  aria-label="delete"
                  size="large"
                  style={{ color: "white" }}
                >
                  <LinkedInIcon
                    fontSize="large"
                    style={{
                      borderRadius: "50%",
                      backgroundColor: "#54B689",
                      color: "white",
                      border: "2px solid white",
                    }}
                  />
                </IconButton>
              </a>
            </div>
            <div className="col-2 offset-1">
              <a href="https://github.com/OmerPerez" target="_blank">
                <IconButton
                  aria-label="delete"
                  size="large"
                  style={{ color: "white" }}
                >
                  <GitHubIcon
                    fontSize="large"
                    style={{
                      borderRadius: "50%",
                      color: "#54B689",
                      backgroundColor: "white",
                    }}
                  />
                </IconButton>
              </a>
            </div>
            <div className="col-2 offset-1">
              <IconButton
              onClick={()=> window.open("mailto:omerperez222@gmail.com")}
                aria-label="delete"
                size="large"
                style={{ color: "white" }}
              >
                <AlternateEmailIcon
                  fontSize="large"
                  style={{
                    borderRadius: "50%",
                    color: "#54B689",
                    backgroundColor: "white",
                  }}
                />
              </IconButton>
            </div>
          </div>
        </div>
      </div>
      <Divider className="mt-2" style={{ backgroundColor: "white" }} />
      <div style={{ padding: "1rem 1rem" }}>
        <Link to="/AboutMe" style={{ textDecoration: "none" }}>
          <IconButton
            aria-label="delete"
            size="large"
            style={{ color: "white" }}
          >
            <PersonIcon
              fontSize="medium"
              style={{
                borderRadius: "50%",
                color: "#cccccc",
                marginRight: "7px",
              }}
            />
            <b style={{ fontSize: "65%" }}>About Me</b>
          </IconButton>
        </Link>
        {/* <Link to="/Projects" style={{ textDecoration: "none" }}>
          <IconButton
            aria-label="delete"
            size="large"
            style={{ color: "white" }}
          >
            <ComputerIcon
              fontSize="medium"
              style={{
                borderRadius: "50%",
                color: "#cccccc",
                marginRight: "7px",
              }}
            />
            <b style={{ fontSize: "65%" }}>Projects</b>
          </IconButton>
        </Link> */}
        <Link to="/Resume" style={{ textDecoration: "none" }}>
          <IconButton
            aria-label="delete"
            size="large"
            style={{ color: "white" }}
          >
            <DescriptionIcon
              fontSize="medium"
              style={{
                borderRadius: "50%",
                color: "#cccccc",
                marginRight: "7px",
              }}
            />
            <b style={{ fontSize: "65%" }}>Resume</b>
          </IconButton>
        </Link>
        <div>
          <IconButton
            aria-label="delete"
            size="large"
            style={{ color: "white" }}
            onClick={() => window.open("https://wa.me/+9720522520484?")}
          >
            <ContactMailIcon
              fontSize="medium"
              style={{
                borderRadius: "50%",
                color: "#cccccc",
                marginRight: "7px",
              }}
            />
            <b style={{ fontSize: "65%" }}>Contact</b>
          </IconButton>
        </div>
      </div>
      <Divider style={{ backgroundColor: "white" }} />
      <div
        className="d-flex justify-content-center mt-3"
        style={{ color: "white" }}
      >
        <svg
          style={{ width: "1.5rem", height: "1.5rem", marginRight: "10px" }}
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 512 512"
          data-fa-i2svg=""
        >
          <path
            fill="currentColor"
            d="M8 256c0 136.966 111.033 248 248 248s248-111.034 248-248S392.966 8 256 8 8 119.033 8 256zm248 184V72c101.705 0 184 82.311 184 184 0 101.705-82.311 184-184 184z"
          ></path>
        </svg>
        <b>Dark Mode</b>
      </div>
      <div className="d-flex justify-content-center mt-2 mb-2">
        <SwitchButton />
      </div>
    </div>
  );

  const container = undefined;

  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <AppBar
        position="fixed"
        sx={{
          width: { lg: `calc(100% - ${drawerWidth}px)` },
          ml: { lg: `${drawerWidth}px` },
        }}
      >
        <Toolbar sx={{ display: { lg: "none" }, backgroundColor: "#111821" }}>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { lg: "none" } }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" noWrap component="div"></Typography>
        </Toolbar>
      </AppBar>
      <Box
        component="nav"
        sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
        aria-label="mailbox folders"
      >
        {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: "block", lg: "none" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
              backgroundColor: "#1e2a3a",
              borderRight: "3px solid #54B689",
            },
          }}
        >
          {drawer}
        </Drawer>
        <Drawer
          variant="permanent"
          sx={{
            display: { xs: "none", lg: "block" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
              backgroundColor: "#1e2a3a",
              borderRight: "3px solid #54B689",
            },
          }}
          open
        >
          {drawer}
        </Drawer>
      </Box>
      <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
        {/* <Toolbar /> */}
      </Box>
    </Box>
  );
}

// ResponsiveDrawer.propTypes = {
/**
 * Injected by the documentation to work in an iframe.
 * You won't need it on your project.
 */
//   window: PropTypes.func,
// };

export default ResponsiveDrawer;

// import * as React from "react";
// import PropTypes from "prop-types";
// import Box from "@mui/material/Box";
// import CssBaseline from "@mui/material/CssBaseline";
// import Divider from "@mui/material/Divider";
// import Drawer from "@mui/material/Drawer";
// import IconButton from "@mui/material/IconButton";
// import LinkedInIcon from "@mui/icons-material/LinkedIn";
// import GitHubIcon from "@mui/icons-material/GitHub";
// import AlternateEmailIcon from "@mui/icons-material/AlternateEmail";
// import PersonIcon from "@mui/icons-material/Person";
// import ComputerIcon from "@mui/icons-material/Computer";
// import DescriptionIcon from "@mui/icons-material/Description";
// import ContactMailIcon from "@mui/icons-material/ContactMail";
// import SwitchButton from "./SwitchButton";
// import { Link } from "react-router-dom";

// const drawerWidth = 240;

// function SideBar(props) {
//   const { window } = props;
//   const [mobileOpen, setMobileOpen] = React.useState(false);

//   const handleDrawerToggle = () => {
//     setMobileOpen(!mobileOpen);
//   };

//   const drawer = (
//     <div style={{ paddingRight: "5%", paddingLeft: "5%" }}>
//       <div className="mt-3" style={{ textAlign: "center", color: "white" }}>
//         <b style={{ fontSize: "150%" }}> Omer Perez</b>
//       </div>
//       <div className="mt-3 d-flex justify-content-center">
//         <img
//           style={{
//             width: "170px",
//             height: "170px",
//             borderRadius: "50%",
//           }}
//           src="../Images/Profile Image.png"
//         />
//       </div>
//       <div className="mt-3" style={{ textAlign: "center" }}>
//         <p style={{ color: "white", fontSize: "95%" }}>
//           Hi, my name is Omer Perez and I'm a junior Full Stack developer.
//           Welcome to my personal website!
//         </p>
//         <div className="d-flex justify-content-center">
//           <div className="row" style={{ minWidth: "100px" }}>
//             <div className="col-2 offset-1">
//               <a href="https://www.linkedin.com/in/omer-perez/" target="_blank">
//                 <IconButton
//                   aria-label="delete"
//                   size="large"
//                   style={{ color: "white" }}
//                 >
//                   <LinkedInIcon
//                     fontSize="large"
//                     style={{
//                       borderRadius: "50%",
//                       backgroundColor: "#54B689",
//                       color: "white",
//                       border: "2px solid white",
//                     }}
//                   />
//                 </IconButton>
//               </a>
//             </div>
//             <div className="col-2 offset-1">
//               <a href="https://github.com/OmerPerez" target="_blank">
//                 <IconButton
//                   aria-label="delete"
//                   size="large"
//                   style={{ color: "white" }}
//                 >
//                   <GitHubIcon
//                     fontSize="large"
//                     style={{
//                       borderRadius: "50%",
//                       color: "#54B689",
//                       backgroundColor: "white",
//                     }}
//                   />
//                 </IconButton>
//               </a>
//             </div>
//             <div className="col-2 offset-1">
//               <IconButton
//                 aria-label="delete"
//                 size="large"
//                 style={{ color: "white" }}
//               >
//                 <AlternateEmailIcon
//                   fontSize="large"
//                   style={{
//                     borderRadius: "50%",
//                     color: "#54B689",
//                     backgroundColor: "white",
//                   }}
//                 />
//               </IconButton>
//             </div>
//           </div>
//         </div>
//       </div>
//       <Divider className="mt-2" style={{ backgroundColor: "white" }} />
//       <div style={{ padding: "1rem 1rem" }}>
//         <Link to="/AboutMe" style={{ textDecoration: "none" }}>
//           <IconButton
//             aria-label="delete"
//             size="large"
//             style={{ color: "white" }}
//           >
//             <PersonIcon
//               fontSize="medium"
//               style={{
//                 borderRadius: "50%",
//                 color: "#cccccc",
//                 marginRight: "7px",
//               }}
//             />
//             <b style={{ fontSize: "65%" }}>About Me</b>
//           </IconButton>
//         </Link>
//         <Link to="/Projects" style={{ textDecoration: "none" }}>
//           <IconButton
//             aria-label="delete"
//             size="large"
//             style={{ color: "white" }}
//           >
//             <ComputerIcon
//               fontSize="medium"
//               style={{
//                 borderRadius: "50%",
//                 color: "#cccccc",
//                 marginRight: "7px",
//               }}
//             />
//             <b style={{ fontSize: "65%" }}>Projects</b>
//           </IconButton>
//         </Link>
//         <Link to="/Resume" style={{ textDecoration: "none" }}>
//           <IconButton
//             aria-label="delete"
//             size="large"
//             style={{ color: "white" }}
//           >
//             <DescriptionIcon
//               fontSize="medium"
//               style={{
//                 borderRadius: "50%",
//                 color: "#cccccc",
//                 marginRight: "7px",
//               }}
//             />
//             <b style={{ fontSize: "65%" }}>Resume</b>
//           </IconButton>
//         </Link>
//         <div>
//           <IconButton
//             aria-label="delete"
//             size="large"
//             style={{ color: "white" }}
//           >
//             <ContactMailIcon
//               fontSize="medium"
//               style={{
//                 borderRadius: "50%",
//                 color: "#cccccc",
//                 marginRight: "7px",
//               }}
//             />
//             <b style={{ fontSize: "65%" }}>Contact</b>
//           </IconButton>
//         </div>
//       </div>
//       <Divider style={{ backgroundColor: "white" }} />
//       <div
//         className="d-flex justify-content-center mt-3"
//         style={{ color: "white" }}
//       >
//         <svg
//           style={{ width: "1.5rem", height: "1.5rem", marginRight: "10px" }}
//           xmlns="http://www.w3.org/2000/svg"
//           viewBox="0 0 512 512"
//           data-fa-i2svg=""
//         >
//           <path
//             fill="currentColor"
//             d="M8 256c0 136.966 111.033 248 248 248s248-111.034 248-248S392.966 8 256 8 8 119.033 8 256zm248 184V72c101.705 0 184 82.311 184 184 0 101.705-82.311 184-184 184z"
//           ></path>
//         </svg>
//         <b>Dark Mode</b>
//       </div>
//       <div className="d-flex justify-content-center mt-2">
//         <SwitchButton />
//       </div>
//     </div>
//   );

//   const container =
//     window !== undefined ? () => window().document.body : undefined;
//   return (
//     <>
//       <div>
//         <Box sx={{ display: "flex" }}>
//           <CssBaseline />
//           <Box
//             component="nav"
//             sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
//             aria-label="mailbox folders"
//           >
//             <Drawer
//               variant="permanent"
//               sx={{
//                 display: { xs: "none", sm: "block" },
//                 "& .MuiDrawer-paper": {
//                   boxSizing: "border-box",
//                   height: "100vh",
//                   width: "280px",
//                   backgroundColor: "#1e2a3a",
//                   borderRight: "3px solid #54B689",
//                 },
//               }}
//               open
//             >
//               {drawer}
//             </Drawer>
//           </Box>
//         </Box>
//       </div>
//     </>
//   );
// }

// SideBar.propTypes = {
//   window: PropTypes.func,
// };

// export default SideBar;
