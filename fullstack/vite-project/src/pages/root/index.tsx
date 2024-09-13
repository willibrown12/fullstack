
import Drawer from '@mui/material/Drawer';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';

import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';

import HomeIcon from '@mui/icons-material/Home';
import BarChartIcon from '@mui/icons-material/BarChart';
import { Link } from 'react-router-dom';
import { routes } from '../../App';
import AddBusinessIcon from '@mui/icons-material/AddBusiness';
const drawerWidth = 240;

export default function PermanentDrawerLeft() {
  return (
    
     
      <Drawer
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          '& .MuiDrawer-paper': {
            width: drawerWidth,
            boxSizing: 'border-box',
          },
        }}
        variant="permanent"
        anchor="left"
      >
        <Toolbar><h3>menu</h3></Toolbar>
      

        <Divider />
       <List>
    {routes.map((route) => (
        <ListItem key={route.lable} disablePadding>
            <Link style={{ color: "black", textDecoration: "none" }} to={route.path}>
                <ListItemButton>
                    <ListItemIcon>
                    {getIconsMapper(route.lable)}
                    </ListItemIcon>
                    <ListItemText primary={route.lable} />
                </ListItemButton>
            </Link>
        </ListItem>
    ))}
</List>
    
      </Drawer>
    
  );
}

import LocalShippingIcon from '@mui/icons-material/LocalShipping';
import PostAddIcon from '@mui/icons-material/PostAdd';

import InventoryIcon from '@mui/icons-material/Inventory';
const iconsMapping = {
    home: <HomeIcon/>,
    customers:<AddBusinessIcon/>,
    orders:<LocalShippingIcon/>,
    data:<PostAddIcon/>,
    charts:<BarChartIcon/>,
    products:<InventoryIcon/>

    
}
function getIconsMapper(label: string) {
    // @ts-ignore
    return iconsMapping[label] 
}