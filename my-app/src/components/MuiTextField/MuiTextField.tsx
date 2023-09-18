import React from 'react';
import { Stack, TextField, Typography, InputAdornment } from '@mui/material';
import VisibilityOutlinedIcon from '@mui/icons-material/VisibilityOutlined';
import VisibilityIcon from '@mui/icons-material/Visibility';
import IconButton from '@mui/material/IconButton';
import { Visibility, VisibilityOff } from '@mui/icons-material';

export const MuiTextField = () => {
  // used to handle passwordVisability state below
  const [showPassword, setShowPassword] = React.useState(false);
  const [value, setValue] = React.useState('');

  const handleClickShowPassword = () => {
    setShowPassword((show) => !show);
  };

  const handleMouseDownPassword = (_event: React.MouseEvent<HTMLButtonElement>) => {
    _event?.preventDefault();
  };

  return (
    <Stack spacing={4}>
      <Typography variant="h4">Label and Variants </Typography>
      <Stack direction="row" spacing={2}>
        <TextField label="Outlined Variant"></TextField>
        <TextField label="filled Variant" variant="filled"></TextField>
        <TextField label="standard Variant" variant="standard"></TextField>
      </Stack>

      <Typography variant="h4">Size and Color variants </Typography>
      <Stack direction="row" spacing={2}>
        <TextField label="Size small and color" size="small" color="error"></TextField>
        <TextField
          label="Size medium, color, and filled variant"
          size="medium"
          color="warning"
          variant="filled"
        ></TextField>
        <TextField
          label="Size large, color, and standard variant"
          size="medium"
          color="success"
          variant="standard"
        ></TextField>
      </Stack>

      <Typography variant="h4">Form related props </Typography>
      <Stack direction="row" spacing={2}>
        <TextField label="required prop" required></TextField>
        <TextField label="helper text" helperText="This is helper text"></TextField>
        <TextField
          label="Type Prop"
          type="password"
          helperText="Noticet that it shows input as ***** in this field because we set type to password"
        ></TextField>
        <TextField
          label="Disabled Prop"
          type="password"
          helperText="should be disabled because we set disabled prop"
          disabled
        ></TextField>
        <TextField
          label="Read-Only using InputProps prop"
          helperText="Read-Only using InputProps prop"
          InputProps={{ readOnly: true }}
          //   value="This is read only"
        ></TextField>
      </Stack>

      <Typography variant="h4">Input Adornment</Typography>
      <Typography variant="subtitle1">Adornments act like prefixs and suffixs</Typography>
      <Stack direction="row" spacing={2}>
        <TextField
          label="Amount"
          InputProps={{
            startAdornment: <InputAdornment position="start">$</InputAdornment>,
          }}
          helperText="Adds a $ sign to the front of the field"
        ></TextField>
        <TextField
          label="Weight"
          InputProps={{
            endAdornment: <InputAdornment position="end">lbs</InputAdornment>,
          }}
          helperText="Adds a lbs sign to the end of the field"
        ></TextField>

        <TextField
          label="Amount"
          InputProps={{
            startAdornment: <InputAdornment position="start">$</InputAdornment>,
          }}
          helperText="Adds a $ sign to the front of the field"
        ></TextField>
        <TextField
          label="Weight"
          InputProps={{
            endAdornment: (
              <InputAdornment position="end">
                <VisibilityOff></VisibilityOff>
              </InputAdornment>
            ),
          }}
          helperText="Adds a lbs sign to the end of the field"
        ></TextField>
        {/* Toggle Password Visability ON/OFF */}
        <TextField
          label="Toggle password visability on/off"
          type={showPassword ? 'text' : 'password'}
          InputProps={{
            endAdornment: (
              <InputAdornment position="end" onClick={handleClickShowPassword}>
                {showPassword ? <Visibility /> : <VisibilityOff />}
              </InputAdornment>
            ),
          }}
          helperText="Adds a visibility sign to the end of the field"
        ></TextField>
      </Stack>

      <Typography variant="h4">Error prop for visual error </Typography>
      <Stack direction="row" spacing={2}>
        <TextField
          label="Form Input with Error Prop"
          value={value}
          onChange={(e) => setValue(e.target.value)}
          error={!value}
          helperText={!value ? 'Required' : 'Do not share your password with anyone'}
        ></TextField>
      </Stack>
    </Stack>
  );
};
