import React, { useState } from 'react';
import { Stack, Autocomplete, TextField } from '@mui/material';
import { ReactJSXElement } from '@emotion/react/types/jsx-namespace';

type Skill = {
  id: number;
  label: string;
};

const skills = ['HTML', 'CSS', 'JavaScript', 'TypeScript', 'React'];

const skillsOptions = skills.map((skill, index) => ({
  id: index + 1,
  label: skill,
}));

const MuiAutocomplete = () => {
  const [value, setValue] = useState<string | null>(null);
  const [skill, setSkill] = useState<Skill | null>(null);

  console.log(value);
  console.log(skill);

  return (
    // default implementation
    <Stack spacing={2} width="250px">
      <Autocomplete
        options={skills}
        renderInput={(params) => <TextField {...params} label="Skills" />}
        value={value}
        onChange={(event: any, newValue: string | null) => setValue(newValue)}
      />
      {/* the freeSolo prop below allows you to enter values and not just pick from a list */}
      <Autocomplete
        options={skills}
        renderInput={(params) => <TextField {...params} label="Skills" />}
        value={value}
        onChange={(event: any, newValue: string | null) => setValue(newValue)}
        freeSolo
      />

      {/* works with an array of objects without freeSolo prop */}
      <Autocomplete
        options={skillsOptions}
        renderInput={(params) => <TextField {...params} label="Skills" />}
        value={skill}
        onChange={(event: any, newValue: Skill | null) => setSkill(newValue)}
      />
    </Stack>
  );
};

export default MuiAutocomplete;
