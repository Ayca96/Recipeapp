import * as React from 'react';
import Box from '@mui/material/Box';
import SwipeableDrawer from '@mui/material/SwipeableDrawer';
import Button from '@mui/material/Button';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import { useNavigate } from 'react-router-dom';
// import Logo from "../../assets/Design ohne Titel.png"
import MenuBookIcon from '@mui/icons-material/MenuBook';
import MenuIcon from '@mui/icons-material/Menu';
import Date from '../CurrentDate';
import CurrentDate from '../CurrentDate';


const links = [
  {
    title: "Home",
    url: "/",
    // icon:"/assets/navbar/ic_analytics.svg",
    // icon: icon("ic_analytics"),
  },
  {
    title: "Register",
    url: "/register",
    // icon: icon("firms"),
  },
  {
    title: "Login",
    url: "/login",
    // icon: icon("brand"),
  },
  {
    title: "About",
    url: "/about",
    // icon: icon("purchase"),
  },
  {
    title: "Recipes",
    url: "/recipe",
    // icon: icon("sales"),
  },

];

export default function NavBar() {
  const [state, setState] = React.useState({
    
   right: false,
  });

 const Navigate=useNavigate()

  const toggleDrawer = (anchor, open) => (event) => {
    if (
      event &&
      event.type === 'keydown' &&
      (event.key === 'Tab' || event.key === 'Shift')
    ) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  const list = (anchor) => (
    <Box
      sx={{ width: anchor === 'top' || anchor === 'bottom' ? 'auto' : 150 }}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <List>
        {links.map((text, index) => (
          <ListItem key={index} disablePadding>
            <ListItemButton  onClick={() => Navigate(text.url)}>
              {/* <ListItemIcon>
                { <InboxIcon />}
              </ListItemIcon> */}
              <ListItemText primary={text.title} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
   
    
    </Box>
  );

  return (
    <div>
      {["right"].map((anchor) => (
        <React.Fragment key={anchor}>
         <Box sx={{
          backgroundColor:"#A2C15A",
          display: 'flex',
          justifyContent: 'center', 
          alignItems: 'center', 
          height: '100px',
          margin: 0,
          padding: 0,
          
          }}>
          <Box sx={{marginRight:4, color:"white", fontSize:25}}> Aycas Recipe
          
          </Box>
          {<MenuBookIcon/>}
           <Button sx={{borderRadius:"50px","&:hover":{backgroundColor:"green"}}} onClick={toggleDrawer(anchor, true)}><MenuIcon sx={{color:"black", }} /></Button>

           <div>
          <CurrentDate/>
          </div>
         </Box>
         
          <SwipeableDrawer
            anchor={anchor}
            open={state[anchor]}
            onClose={toggleDrawer(anchor, false)}
            onOpen={toggleDrawer(anchor, true)}
          >
            {list(anchor)}
          </SwipeableDrawer>
        </React.Fragment>
      ))}

      
      
    </div>
  );
}
