import React, { useState } from 'react';
import {
  Box,
  FormControlLabel,
  Checkbox,
  FormControl,
  FormLabel,
  FormGroup,
  FormHelperText,
} from '@mui/material';
import BookmarkBorderIcon from '@mui/icons-material/BookmarkBorder';
import BookmarIcon from '@mui/icons-material/Bookmark';

export const MuiCheckbox = () => {
  const [checked, setChecked] = useState<boolean>(false);
  const [checkedFormGroup, setCheckedFormGroup] = useState<string[]>([]);

  console.log({ checked });

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setChecked(event.target.checked);
  };

  const handleFormGroup = (event: React.ChangeEvent<HTMLInputElement>) => {
    const index = checkedFormGroup.indexOf(event.target.value);

    if (index === -1) {
      setCheckedFormGroup([...checkedFormGroup, event.target.value]);
    } else {
      setCheckedFormGroup(checkedFormGroup.filter((value) => value !== event?.target.value));
    }
  };

  console.log(checkedFormGroup);
  return (
    <Box>
      {/* traditional checkbox with color and size on checkbox, error could also be used */}
      <Box>
        <FormControlLabel
          label="I accept terms and conditions"
          control={
            <Checkbox size="medium" color="warning" checked={checked} onChange={handleChange} />
          }
        />
      </Box>
      {/* Icon as checkbox */}
      <Box>
        <Checkbox
          icon={<BookmarIcon />}
          checkedIcon={<BookmarIcon />}
          checked={checked}
          onChange={handleChange}
        />
      </Box>

      <Box>
        <FormControl>
          <FormLabel>Skills</FormLabel>
          <FormGroup>
            <FormControlLabel
              label="HTML"
              value="html"
              control={
                <Checkbox
                  value="html"
                  checked={checkedFormGroup.includes('html')}
                  onChange={handleFormGroup}
                />
              }
            />
            <FormControlLabel
              label="CSS"
              value="css"
              control={
                <Checkbox checked={checkedFormGroup.includes('css')} onChange={handleFormGroup} />
              }
            />
            <FormControlLabel
              label="JavaScript"
              value="javascript"
              control={
                <Checkbox
                  checked={checkedFormGroup.includes('javascript')}
                  onChange={handleFormGroup}
                />
              }
            />
          </FormGroup>
        </FormControl>
      </Box>

      {/* row prop */}
      <Box>
        <FormControl>
          <FormLabel>Skills</FormLabel>
          <FormGroup row>
            <FormControlLabel
              label="HTML"
              value="html"
              control={
                <Checkbox
                  value="html"
                  checked={checkedFormGroup.includes('html')}
                  onChange={handleFormGroup}
                />
              }
            />
            <FormControlLabel
              label="CSS"
              value="css"
              control={
                <Checkbox checked={checkedFormGroup.includes('css')} onChange={handleFormGroup} />
              }
            />
            <FormControlLabel
              label="JavaScript"
              value="javascript"
              control={
                <Checkbox
                  checked={checkedFormGroup.includes('javascript')}
                  onChange={handleFormGroup}
                />
              }
            />
          </FormGroup>
          <FormHelperText>Invalid Selection </FormHelperText>
        </FormControl>
      </Box>
    </Box>
  );
};
