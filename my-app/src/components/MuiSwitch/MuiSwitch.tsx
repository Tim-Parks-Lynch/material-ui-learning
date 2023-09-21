import React, { useState } from 'react';
import { Box, FormControlLabel, Switch, Stack, Rating } from '@mui/material';

export const MuiSwitch = () => {
  const [checked, setChecked] = useState(false);
  //   Can't have null as a return type in useState, it freaks out about controlled/uncontrolled components
  //   const [rating, setRating] = useState<number | null>(null);
  const [rating, setRating] = useState<number | null>(3);

  //   console.log({ checked });
  console.log({ rating });

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setChecked(event.target.checked);
  };

  const ratingsHandleChange = (_event: React.ChangeEvent<{}>, newRating: number | null) => {
    setRating(newRating);
  };

  return (
    <Box
      mx={2}
      my={4}
      // px={2} py={2}
    >
      <FormControlLabel
        label="Dark mode"
        control={<Switch checked={checked} onChange={handleChange} />}
      />
      {/* By adding this second one we get a button group and can toggle both buttons on and off together */}
      <FormControlLabel
        label="CSS"
        value="css"
        control={<Switch checked={checked} onChange={handleChange} size="medium" color="success" />}
      />
      {/* Ratings component */}
      <Stack mx={2} my={2} spacing={2}>
        <Rating value={rating} onChange={ratingsHandleChange} />
      </Stack>
    </Box>
  );
};
