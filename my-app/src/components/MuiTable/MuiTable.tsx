import React from 'react';
import {
  TableContainer,
  Table,
  TableHead,
  TableBody,
  TableRow,
  TableCell,
  Paper,
} from '@mui/material';

const MuiTable = () => {
  return (
    <TableContainer component={Paper} sx={{ maxHeight: '300px' }}>
      {/* sticky header component usefule when height is set in TableContainer */}
      <Table aria-label="simple table" stickyHeader>
        <TableHead>
          <TableRow>
            <TableCell>Id:</TableCell>
            <TableCell>First Name:</TableCell>
            <TableCell>Last Name:</TableCell>
            <TableCell>Email:</TableCell>
            <TableCell>Gender:</TableCell>
            {/* align prop */}
            <TableCell align="center">IP Address:</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {tableData.map((row) => (
            <TableRow key={row.id} sx={{ '&:last-child td, &:last-child th': { boder: 0 } }}>
              <TableCell>{row.id}</TableCell>
              <TableCell>{row.first_name}</TableCell>
              <TableCell>{row.last_name}</TableCell>
              <TableCell>{row.email}</TableCell>
              <TableCell>{row.gender}</TableCell>
              <TableCell align="center">{row.ip_address}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

const tableData = [
  {
    id: 1,
    first_name: 'Cyril',
    last_name: 'Surmeyers',
    email: 'csurmeyers0@cyberchimps.com',
    gender: 'Male',
    ip_address: '213.184.67.90',
  },
  {
    id: 2,
    first_name: 'Aldo',
    last_name: 'Runciman',
    email: 'arunciman1@intel.com',
    gender: 'Polygender',
    ip_address: '29.37.197.108',
  },
  {
    id: 3,
    first_name: 'Mireielle',
    last_name: 'Glasscott',
    email: 'mglasscott2@nifty.com',
    gender: 'Female',
    ip_address: '165.156.102.178',
  },
  {
    id: 4,
    first_name: 'Erinn',
    last_name: 'Robelow',
    email: 'erobelow3@state.tx.us',
    gender: 'Female',
    ip_address: '124.79.60.202',
  },
  {
    id: 5,
    first_name: 'Emanuele',
    last_name: 'Maffin',
    email: 'emaffin4@ibm.com',
    gender: 'Male',
    ip_address: '146.226.245.160',
  },
  {
    id: 6,
    first_name: 'Madison',
    last_name: 'Parren',
    email: 'mparren5@arizona.edu',
    gender: 'Male',
    ip_address: '47.20.246.104',
  },
  {
    id: 7,
    first_name: 'Shermy',
    last_name: 'Lodder',
    email: 'slodder6@discuz.net',
    gender: 'Male',
    ip_address: '189.97.238.13',
  },
  {
    id: 8,
    first_name: 'Joanne',
    last_name: 'Rodolfi',
    email: 'jrodolfi7@techcrunch.com',
    gender: 'Female',
    ip_address: '74.186.165.158',
  },
  {
    id: 9,
    first_name: 'Rheta',
    last_name: 'Elfleet',
    email: 'relfleet8@over-blog.com',
    gender: 'Female',
    ip_address: '38.132.73.141',
  },
  {
    id: 10,
    first_name: 'Robinet',
    last_name: 'Gain',
    email: 'rgain9@tripadvisor.com',
    gender: 'Female',
    ip_address: '156.130.68.145',
  },
];

export default MuiTable;
