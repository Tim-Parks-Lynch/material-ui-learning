import React from 'react';
import { Stack, Badge } from '@mui/material';
import MailIcon from '@mui/icons-material/Mail';

const MuiBadge = () => {
  return (
    <Stack spacing={2} direction="row">
      {/* Badge displays on the upper right of the mail icon */}
      <Badge badgeContent={5} color="primary">
        <MailIcon />
      </Badge>

      {/* Badge content 0 equals no badge being displayed */}
      <Badge badgeContent={0} color="primary">
        {/* can overwrite above behavior using the showZero prop */}
        {/* <Badge badgeContent={0} color="primary" showZero> */}

        <MailIcon />
      </Badge>

      {/* Badge displays on the upper right of the mail icon with alt color*/}
      <Badge badgeContent={5} color="success">
        <MailIcon />
      </Badge>

      {/* Badge displays on the upper right of the mail icon with alt color*/}
      <Badge badgeContent={5} color="success">
        <MailIcon />
      </Badge>

      {/* Badge content over 99 adds 99+ to the badge*/}
      <Badge badgeContent={101} color="error">
        <MailIcon />
      </Badge>

      {/* Badge content with max prop*/}
      <Badge badgeContent={580} color="warning" max={999}>
        <MailIcon />
      </Badge>

      {/* Badge content with variant prop*/}
      {/* Can be used to show that something has changed without giving a badgeCount */}
      <Badge variant="dot" color="secondary" max={999}>
        <MailIcon />
      </Badge>

      {/* Badge content hidden*/}
      {/* Can be used to hide the badge */}
      {/* invisible would really be set to something like unreadEmails.length === 0
       */}
      <Badge variant="dot" color="secondary" max={999} invisible={true}>
        <MailIcon />
      </Badge>
    </Stack>
  );
};

export default MuiBadge;
