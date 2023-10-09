import React from 'react';
import {
  Box,
  List,
  ListItem,
  ListItemText,
  ListItemIcon,
  ListItemAvatar,
  Avatar,
  ListItemButton,
  Divider,
} from '@mui/material';
import MailIcon from '@mui/icons-material/Mail';

const MuiList = () => {
  return (
    <Box sx={{ width: '400px', bgcolor: '#efefef', my: '16px', mx: '16px' }}>
      <List>
        {/* to fix padding issues with the list button use disablePadding prop*/}
        <ListItem disablePadding>
          {/* Makes the list a button */}
          <ListItemButton>
            {/* Lets you add an icon and avatar like your icons*/}
            <ListItemIcon>
              <ListItemAvatar>
                <Avatar>
                  <MailIcon />
                </Avatar>
              </ListItemAvatar>
            </ListItemIcon>
            <ListItemText primary="List Item 1" />
          </ListItemButton>
        </ListItem>
        {/* Adds a divider between the list items */}
        <Divider />

        <ListItem disablePadding>
          {/* Add secondary text */}
          <ListItemButton>
            <ListItemIcon>
              <ListItemAvatar>
                <Avatar>
                  <MailIcon />
                </Avatar>
              </ListItemAvatar>
            </ListItemIcon>
            <ListItemText primary="List Item 2" secondary="secondary text" />
          </ListItemButton>
        </ListItem>
        <Divider />

        <ListItem disablePadding>
          <ListItemButton>
            <ListItemIcon>
              <ListItemAvatar>
                <Avatar>
                  <MailIcon />
                </Avatar>
              </ListItemAvatar>
            </ListItemIcon>
            <ListItemText primary="List Item 3" />
          </ListItemButton>
        </ListItem>
        <Divider />
      </List>
    </Box>
  );
};

export default MuiList;
