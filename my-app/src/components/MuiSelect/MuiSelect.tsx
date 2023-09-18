import React, { useState } from 'react';
import { Box, TextField, MenuItem } from '@mui/material';

export const MuiSelect = () => {
  const [country, setCountry] = useState<string>('');

  // Required for multiselect box below
  const [multiSelect, setMultiSelect] = useState<string[]>([]);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setCountry(event.target.value as string);
    console.log('inside of handleChage', { country });
  };
  console.log('outside of handleChange', { country });

  const handleMultiStateChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    setMultiSelect(typeof value === 'string' ? value.split(',') : value);
    console.log('inside of multiStatChange', multiSelect);
  };
  console.log('outside of multistate change', multiSelect);

  return (
    // Box is a div tag that we can put height and width on
    <Box width="750px" height="750px" margin="10px">
      <Box width="250px" margin="25px">
        <TextField label="Select country" value={country} onChange={handleChange} select fullWidth>
          <MenuItem value="USA">USA</MenuItem>
          <MenuItem value="AU">Australia</MenuItem>
          <MenuItem value="EU">Europe</MenuItem>
        </TextField>
      </Box>

      {/* Multiselect box */}
      <Box width="250px" margin="25px">
        <TextField
          label="Select multiple or one country"
          value={multiSelect}
          onChange={handleMultiStateChange}
          select
          fullWidth
          SelectProps={{
            multiple: true,
          }}
        >
          <MenuItem value="USA">USA</MenuItem>
          <MenuItem value="AU">Australia</MenuItem>
          <MenuItem value="EU">Europe</MenuItem>
        </TextField>
      </Box>

      {/* Multiselect box with other props like color, size, and helper text */}
      <Box width="250px" margin="25px">
        <TextField
          label="Select multiple or one country"
          helperText="Select prop with color, size, and helper text"
          value={multiSelect}
          onChange={handleMultiStateChange}
          select
          fullWidth
          size="medium"
          SelectProps={{
            multiple: true,
          }}
          color="success"
        >
          <MenuItem value="USA">USA</MenuItem>
          <MenuItem value="AU">Australia</MenuItem>
          <MenuItem value="EU">Europe</MenuItem>
        </TextField>
      </Box>
    </Box>
  );
};
