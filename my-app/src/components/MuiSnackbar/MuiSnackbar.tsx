import React, { useState, forwardRef } from 'react';
import { Snackbar, Button, Alert, AlertProps } from '@mui/material';

const SnackbarAlert = forwardRef<HTMLDivElement, AlertProps>(function SnackbarAlert(props, ref) {
  return <Alert elevation={6} ref={ref} {...props} />;
});

const MuiSnackbar = () => {
  const [open, setOpen] = useState(false);

  const handleClick = () => {
    setOpen(true);
  };

  const handleClose = (event?: React.SyntheticEvent | Event, reason?: string) => {
    if (reason === 'clickaway') {
      return;
    }
    setOpen(false);
  };

  return (
    <>
      <Button onClick={handleClick}>Submit</Button>
      {/* Shows up in black and white */}
      <Snackbar
        message="Form submitted successfully!"
        autoHideDuration={4000}
        open={open}
        onClose={handleClose}
        anchorOrigin={{
          vertical: 'top',
          horizontal: 'center',
        }}
      />
      {/* <Button>Submit</Button> */}

      {/* Custom Snackbar with color*/}
      {/* <Snackbar
        open={open}
        autoHideDuration={6000}
        onClose={handleClose}
        anchorOrigin={{
          vertical: 'top',
          horizontal: 'center',
        }}
      >
        <SnackbarAlert onClose={handleClose} severity="success">
          Form submitted successfully
        </SnackbarAlert>
      </Snackbar> */}
    </>
  );
};

export default MuiSnackbar;
