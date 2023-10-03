import React from 'react';
import { SpeedDial, SpeedDialAction, SpeedDialIcon } from '@mui/material';
import CopyIcon from '@mui/icons-material/FileCopyOutlined';
import PrintIcon from '@mui/icons-material/Print';
import ShareIcon from '@mui/icons-material/Share';
import EditIcon from '@mui/icons-material/Edit';

// Needs a click handler to handle onClick actions

const MuiSpeedDial = () => {
  return (
    <SpeedDial
      ariaLabel="Navigation speed dial"
      sx={{ position: 'absolute', bottom: 16, right: 16 }}
      //   regular icon below
      //   icon={<SpeedDialIcon />}
      // with open icon prop, changes the open Icon from + to an edit icon
      icon={<SpeedDialIcon openIcon={<EditIcon />} />}
    >
      <SpeedDialAction icon={<CopyIcon />} tooltipTitle="Copy" />
      <SpeedDialAction icon={<PrintIcon />} tooltipTitle="Print" />
      <SpeedDialAction icon={<ShareIcon />} tooltipTitle="Share" />
      {/* tooltip always present option */}
      {/* <SpeedDialAction icon={<ShareIcon />} tooltipTitle="Share" tooltipOpen/> */}
    </SpeedDial>
  );
};

export default MuiSpeedDial;
