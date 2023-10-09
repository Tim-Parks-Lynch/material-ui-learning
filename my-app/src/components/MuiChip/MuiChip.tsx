import React, { useState } from 'react';
import { Stack, Chip, Avatar } from '@mui/material';
import FaceIcon from '@mui/icons-material/Face';

const MuiChip = () => {
  const [chips, setChips] = useState(['Chip1', 'Chip2', 'Chip3']);

  const handleClick = () => {
    console.log('Chip clicked');
  };

  const handleDelete = () => {
    console.log('Delete chip clicked');
  };

  //   const handleDeleteChip = (chipToDelete: string): void => {
  //     setChips((chips) => chips.filter((chip) => chip !== chipToDelete));
  //   };

  // only works if used with a callback in the onDelete below
  const handleDeleteChip = (chipToDelete: string) => {
    console.log('chip deleted clicked');
    setChips((chips) => chips.filter((chip) => chip !== chipToDelete));
  };

  return (
    <Stack direction="row" spacing={1} mx={1}>
      {/* chip that handles on Click and delete*/}
      {/* onDelete adds a little circle with a X in it, must click this for the delete*/}
      <Chip label="Clickable Chip" color="success" onClick={handleClick} />
      <Chip label="Deletable Chip" color="error" onClick={handleClick} onDelete={handleDelete} />

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

      {/* Mapping through an array of chips */}
      {/* for some reason onDelete has to be an arrow/callback function for ts to shut up */}
      {chips.map((chip) => (
        <Chip
          key={chip}
          label={chip}
          onClick={handleClick}
          onDelete={() => handleDeleteChip(chip)}
          //   onDelete={handleDeleteChip}
        />
      ))}
    </Stack>
  );
};

export default MuiChip;
