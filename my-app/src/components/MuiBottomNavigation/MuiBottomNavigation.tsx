import React, { useState } from 'react';
import { BottomNavigation, BottomNavigationAction, CssBaseline } from '@mui/material';
import HomeIcon from '@mui/icons-material/Home';
import FavoriteIcon from '@mui/icons-material/Favorite';
import PersonIcon from '@mui/icons-material/Person';

const MuiBottomNavigation = () => {
  const [value, setValue] = useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <CssBaseline>
      <BottomNavigation
        // sx={{ width: '100%', position: 'absolute', bottom: 0 }}
        sx={{ width: '100%', position: 'sticky', bottom: 0 }}
        value={value}
        onChange={handleChange}
        showLabels
      >
        <BottomNavigationAction label="Home" icon={<HomeIcon />} />
        <BottomNavigationAction label="Favorites" icon={<FavoriteIcon />} />
        <BottomNavigationAction label="Profile" icon={<PersonIcon />} />
      </BottomNavigation>
    </CssBaseline>
  );
};

export default MuiBottomNavigation;
