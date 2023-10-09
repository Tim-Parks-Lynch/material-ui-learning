import React from 'react';
import { Stack, Alert, AlertTitle, Button } from '@mui/material';
import CheckIcon from '@mui/icons-material/Check';

const MuiAlert = () => {
  const handleClose = () => {
    console.log('onClose clicked');
  };

  return (
    <Stack spacing={2}>
      <Alert severity="error" onClose={handleClose}>
        <AlertTitle>Error</AlertTitle>There was an error
      </Alert>
      <Alert severity="warning" onClose={handleClose}>
        <AlertTitle>Warning</AlertTitle>Something triggered a warning
      </Alert>
      <Alert severity="info" onClose={handleClose}>
        <AlertTitle>Info</AlertTitle>Here is an info alert
      </Alert>
      <Alert severity="success" onClose={handleClose}>
        <AlertTitle>Success</AlertTitle>
        Your action was successful
      </Alert>

      {/* variant outlined */}
      <Alert variant="outlined" severity="error" onClose={handleClose}>
        <AlertTitle>Error</AlertTitle>
        There was an error
      </Alert>
      <Alert variant="outlined" severity="warning" onClose={handleClose}>
        <AlertTitle>Warning</AlertTitle>
        Something triggered a warning
      </Alert>
      <Alert variant="outlined" severity="info" onClose={handleClose}>
        <AlertTitle>Info</AlertTitle>
        Here is an info alert
      </Alert>
      <Alert variant="outlined" severity="success" onClose={handleClose}>
        <AlertTitle>Success</AlertTitle>
        Your action was successful
      </Alert>

      {/* variant filled */}
      <Alert variant="filled" severity="error" onClose={handleClose}>
        <AlertTitle>Error</AlertTitle>
        There was an error
      </Alert>
      <Alert variant="filled" severity="warning" onClose={handleClose}>
        <AlertTitle>Warning</AlertTitle>
        Something triggered a warning
      </Alert>
      <Alert variant="filled" severity="info" onClose={handleClose}>
        <AlertTitle>Info</AlertTitle>
        Here is an info alert
      </Alert>
      <Alert
        action={
          <Button color="inherit" size="small" onClick={() => console.log('Clicked')}>
            Undo
          </Button>
        }
        variant="filled"
        severity="success"
        onClose={handleClose}
      >
        <AlertTitle>Success</AlertTitle>
        Your action was successful
      </Alert>

      {/* different icon */}
      <Alert
        variant="filled"
        severity="success"
        icon={<CheckIcon fontSize="inherit" />}
        onClose={handleClose}
      >
        <AlertTitle>Success</AlertTitle>
        Your action was successful
      </Alert>
    </Stack>
  );
};

export default MuiAlert;
