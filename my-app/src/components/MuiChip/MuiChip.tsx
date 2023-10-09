import React from 'react';
import { Stack, Chip, Avatar } from '@mui/material';
import FaceIcon from '@mui/icons-material/Face';

const MuiChip = () => {
  return (
    <Stack direction="row" spacing={1}>
      {/* regular chip */}
      <Chip label="Chip" />

      {/* chip with color */}
      <Chip label="Chip" color="primary" />

      {/* chip with size, default=medium */}
      <Chip label="Chip" color="primary" size="small" />

      {/* chip with avatar or icon */}
      <Chip
        label="Chip"
        color="primary"
        size="small"
        variant="outlined"
        avatar={<Avatar>T</Avatar>}
      />
      {/* cute */}
      <Chip label="Chip" color="primary" size="small" variant="outlined" icon={<FaceIcon />} />

      {/* chip with outlined variant and various other props*/}
      <Chip label="Chip outlined" size="small" variant="outlined" />
      <Chip label="Chip outlined" color="primary" size="small" variant="outlined" />
      <Chip label="Chip outlined" color="error" size="small" variant="outlined" />
    </Stack>
  );
};

export default MuiChip;
