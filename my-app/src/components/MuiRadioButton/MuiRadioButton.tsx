import React, { useState } from 'react';
import { Box, FormControl, FormLabel, FormControlLabel, RadioGroup, Radio, FormHelperText } from '@mui/material';

export const MuiRadioButton = () => {
  const [value, setValue] = useState<string>('');
  console.log({ value });

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValue(event.target.value);
  };

  return (
    <Box>
      <Box>
        <FormControl>
          <FormLabel id="job-experience-group-label">Years of experience column</FormLabel>
          <RadioGroup
            value={value}
            onChange={handleChange}
            name="job-experience-group"
            aria-labelledby="job-experience-group-label"
            //   aligns the radio buttons FormControlLabel horizontally in a row
          >
            <FormControlLabel control={<Radio />} label="0-2" value="0-2" />
            <FormControlLabel control={<Radio />} label="3-5" value="3-5" />
            <FormControlLabel control={<Radio />} label="6-10" value="6-10" />
          </RadioGroup>
        </FormControl>
      </Box>

      <Box>
        <FormControl>
          <FormLabel id="job-experience-group-row-label">Years of experience row</FormLabel>
          <RadioGroup
            value={value}
            onChange={handleChange}
            name="job-experience-group-row"
            aria-labelledby="job-experience-group-row-label"
            //   aligns the radio buttons FormControlLabel horizontally in a row
            row
          >
            <FormControlLabel control={<Radio />} label="0-2" value="0-2" />
            <FormControlLabel control={<Radio />} label="3-5" value="3-5" />
            <FormControlLabel control={<Radio />} label="6-10" value="6-10" />
          </RadioGroup>
        </FormControl>
      </Box>

      <Box>
        <FormControl>
          <FormLabel id="job-experience-group-row-color-size-label">Radio row w/ color & size</FormLabel>
          <RadioGroup
            value={value}
            onChange={handleChange}
            name="job-experience-group-row-color-size"
            aria-labelledby="job-experience-group-row-color-size-label"
            //   aligns the radio buttons FormControlLabel horizontally in a row
            row
          >
            <FormControlLabel control={<Radio size="medium" color="info" />} label="0-2" value="0-2" />
            <FormControlLabel control={<Radio />} label="3-5" value="3-5" />
            <FormControlLabel control={<Radio />} label="6-10" value="6-10" />
          </RadioGroup>
        </FormControl>
      </Box>

      <Box>
        {/* can set error on FormControl programmatically unlike below*/}
        <FormControl error>
          <FormLabel id="job-experience-group-row-color-size-error-label">Radio row w/ color & size</FormLabel>
          <RadioGroup
            value={value}
            onChange={handleChange}
            name="job-experience-group-row-color-size-error"
            aria-labelledby="job-experience-group-row-color-size-error-label"
            //   aligns the radio buttons FormControlLabel horizontally in a row
            row
          >
            <FormControlLabel control={<Radio size="medium" color="info" />} label="0-2" value="0-2" />
            <FormControlLabel control={<Radio />} label="3-5" value="3-5" />
            <FormControlLabel control={<Radio />} label="6-10" value="6-10" />
          </RadioGroup>
          {/* Example of FormHelperText Below */}
          <FormHelperText>Invalid Selection</FormHelperText>
        </FormControl>
      </Box>
    </Box>
  );
};
