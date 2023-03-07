import React from 'react';
import { useDispatch } from 'react-redux';
import { register } from 'redux/auth/operations';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';

// import styles from './RegisterForm.module.css';

import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';

export const RegisterForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = e => {
    e.preventDefault();
    const form = e.currentTarget;
    dispatch(
      register({
        name: form.elements.name.value,
        email: form.elements.email.value,
        password: form.elements.password.value,
      })
    );
    form.reset();
  };

  return (
    <Box
      component="form"
      sx={{
        '& > :not(style)': { m: 1, width: '25ch' },
      }}
      noValidate
      autoComplete="off"
      onSubmit={handleSubmit}
    >
      <Stack spacing={2}>
        <TextField
          id="outlined-basic"
          name="name"
          type="text"
          label="Username"
          variant="outlined"
        />
        <TextField
          type="email"
          name="email"
          id="filled-basic"
          label="Email"
          variant="outlined"
        />
        <TextField
          type="password"
          name="password"
          id="standard-basic"
          label="Password"
          variant="outlined"
        />
        <Button
          type="submit"
          variant="contained"
          sx={{ height: 55, width: '200' }}
        >
          Register
        </Button>
      </Stack>

      {/* <button type="submit">Register</button> */}
    </Box>
  );
};
