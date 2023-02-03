import * as React from 'react';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import MenuIcon from '@mui/icons-material/Menu';
import { Colors } from '../../../utils/Colors';

export default function NavSmall() {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div>
      <Button
        id="positioned-button"
        aria-controls={open ? 'positioned-menu' : undefined}
        aria-haspopup="true"
        aria-expanded={open ? 'true' : undefined}
        onClick={handleClick}
      >
        <MenuIcon sx={{color:'white'}}/>
      </Button>
      <Menu
        id="positioned-menu"
        aria-labelledby="demo-positioned-button"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        anchorOrigin={{
          vertical: 'top',
          horizontal: 'left',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'left',
        }}
      >
        <MenuItem divider={true} sx={{color:Colors.blueDark}} onClick={handleClose}>Home</MenuItem>
        <MenuItem divider={true} sx={{color:Colors.blueDark}} onClick={handleClose}>Nosotros</MenuItem>
        <MenuItem divider={true} sx={{color:Colors.blueDark}} onClick={handleClose}>Productos</MenuItem>
        <MenuItem divider={true} sx={{color:Colors.blueDark}} onClick={handleClose}>Equipos</MenuItem>
        <MenuItem divider={true} sx={{color:Colors.blueDark}} onClick={handleClose}>Servicios</MenuItem>
      </Menu>
    </div>
  );
}