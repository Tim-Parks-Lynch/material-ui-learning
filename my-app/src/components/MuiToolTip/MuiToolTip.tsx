import React from 'react';
import { Tooltip, IconButton, Box } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';

const MuiToolTip = () => {
  return (
    <Box sx={{ mx: '16px', my: '16px' }}>
      {/* // displays the delete trash icon and if you hover over it you get the words 'Delete' */}
      <Tooltip title="Delete">
        <IconButton>
          <DeleteIcon />
        </IconButton>
      </Tooltip>
      {/* // displays the delete trash icon 
      and if you hover over it you get the words 
      'Delete' on the right hand side */}
      <Tooltip title="Delete" placement="right">
        <IconButton>
          <DeleteIcon />
        </IconButton>
      </Tooltip>

      {/* // displays the delete trash icon 
      and if you hover over it you get the words 
      'Delete' on the right hand side but with an arrow indicator instead of 
      just a rectange saying delete*/}
      <Tooltip title="Delete" placement="right" arrow>
        <IconButton>
          <DeleteIcon />
        </IconButton>
      </Tooltip>

      {/* // displays the delete trash icon 
      and if you hover over it you get the words 
      'Delete' on the right hand side but with an arrow indicator instead of 
      just a rectange saying delete, also includes a delay for entering and 
      leaving */}
      <Tooltip title="Delete" placement="right" arrow enterDelay={500} leaveDelay={500}>
        <IconButton>
          <DeleteIcon />
        </IconButton>
      </Tooltip>
    </Box>
  );
};

export default MuiToolTip;
