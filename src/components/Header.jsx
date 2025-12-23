// import { AppBar, Box, Button, IconButton, Toolbar, Typography } from "@mui/material";

// export const Header = () => {

//   return (
//     <Box>
//       <AppBar color="success">
//         <Toolbar>
//           <Typography sx={{flexGrow: 1}} >
//             Logo
//           </Typography>
//           <Box sx={{display: "flex", width: "30%", justifyContent: "space-around"}}>
//           <Button color="white" sx={{background: "red"}}>Home</Button>
//           <Button color="white" sx={{background: "red"}}>About</Button>
//           <Button color="white" sx={{background: "red"}}>Contact</Button>
//           </Box>
//         </Toolbar>
//       </AppBar>
//     </Box>
//   )
// }



import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';

export function Header() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            News
          </Typography>
          <Button color="inherit">Login</Button>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
