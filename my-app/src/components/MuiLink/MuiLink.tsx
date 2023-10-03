import React from 'react';
import { Stack, Link } from '@mui/material';
const MuiLink = () => {
  return (
    <Stack spacing={2} direction="row" m={4}>
      <Link href="#">Link</Link>
      <Link href="#" color="secondary">
        Secondary
      </Link>
      <Link href="#" color="success.main" underline="hover">
        Hover underline on Link
      </Link>
      <Link href="#" color="success.main" underline="none">
        No underline on Link
      </Link>
      {/* variant, default is typography/inherit */}
      <Link href="#" variant="body2" color="success.main" underline="none">
        variant with body2 typography
      </Link>
    </Stack>
  );
};

export default MuiLink;
