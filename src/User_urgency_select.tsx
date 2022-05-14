import * as React from 'react';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import TextField from '@mui/material/TextField';
import Title from './Title';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';

export default function BasicSelect() {
  const [urgency, setAge] = React.useState('');

  const handleChange = (event: SelectChangeEvent) => {
    setAge(event.target.value as string);
  };

  return (
    <React.Fragment>
        <Title>Cleaning issue</Title>
        <Box
            component="form"
            sx={{
                '& > :not(style)': { m: 1, width: '25ch' },
            }}
            noValidate
            autoComplete="off"
        >
            <TextField id="standard-basic" label="Cleaning task" variant="standard" />
        
        </Box>
        
        <Box
            component="form"
            sx={{
                '& > :not(style)': { m: 1, width: '25ch' },
            }}
            noValidate
            autoComplete="off"
        >
        <FormControl fullWidth>
            <InputLabel id="demo-simple-select-label">Urgency</InputLabel>
            <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={urgency}
            label="Level"
            onChange={handleChange}
            >
            <MenuItem value={10}>Low</MenuItem>
            <MenuItem value={20}>Medium</MenuItem>
            <MenuItem value={30}>High</MenuItem>
            </Select>
        </FormControl>
        </Box>
        
        <Box
            component="form"
            sx={{
                '& > :not(style)': { m: 1, width: '25ch' },
            }}
            noValidate
            autoComplete="off"
        >
            <TextField id="standard-basic" label="Location" variant="standard" />
        </Box>

        <Stack spacing={2} direction="row">
            <Button variant="contained">Save</Button>
        </Stack>

    </React.Fragment>
  );
}