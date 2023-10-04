import React from 'react';
import { Stack, Avatar, AvatarGroup } from '@mui/material';

const MuiAvatar = () => {
  return (
    <Stack spacing={4}>
      <Stack direction="row" spacing={1}>
        <Avatar>TJ</Avatar>
        <Avatar>PJ</Avatar>

        {/* Change color */}
        <Avatar sx={{ bgcolor: 'primary.light' }}>TJ</Avatar>
        <Avatar sx={{ bgcolor: 'success.light' }}>PJ</Avatar>

        {/* img source */}
        <Avatar
          src="https://randomuser.me/api/portraits/women/79.jpg"
          alt="Jane Doe"
          sx={{ bgcolor: 'primary.light' }}
        >
          TJ
        </Avatar>
        <Avatar
          src="https://randomuser.me/api/portraits/men/20.jpg"
          sx={{ bgcolor: 'success.light' }}
        >
          PJ
        </Avatar>

        {/* width and height */}
        <Avatar
          src="https://randomuser.me/api/portraits/women/79.jpg"
          alt="Jane Doe"
          sx={{ bgcolor: 'primary.light', width: 48, height: 48 }}
        >
          TJ
        </Avatar>
        <Avatar
          src="https://randomuser.me/api/portraits/men/20.jpg"
          sx={{ bgcolor: 'success.light', width: 48, height: 48 }}
        >
          PJ
        </Avatar>

        {/* square shaped avatar or rounded - ugly */}
        <Avatar
          variant="square"
          src="https://randomuser.me/api/portraits/women/79.jpg"
          alt="Jane Doe"
          sx={{ bgcolor: 'primary.light', width: 48, height: 48 }}
        >
          TJ
        </Avatar>
        <Avatar
          src="https://randomuser.me/api/portraits/men/20.jpg"
          sx={{ bgcolor: 'success.light', width: 48, height: 48 }}
        >
          PJ
        </Avatar>

        {/* Avatar grouping with max showing as 1*/}
        <AvatarGroup max={3}>
          <Avatar
            src="https://randomuser.me/api/portraits/women/79.jpg"
            alt="Jane Doe"
            sx={{ bgcolor: 'primary.light' }}
          >
            TJ
          </Avatar>
          <Avatar
            src="https://randomuser.me/api/portraits/men/20.jpg"
            sx={{ bgcolor: 'success.light' }}
          >
            PJ
          </Avatar>
          <Avatar
            src="https://randomuser.me/api/portraits/men/18.jpg"
            sx={{ bgcolor: 'success.light' }}
          >
            PJ
          </Avatar>
        </AvatarGroup>
      </Stack>
    </Stack>
  );
};

export default MuiAvatar;
