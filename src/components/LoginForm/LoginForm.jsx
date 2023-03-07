import { useDispatch } from 'react-redux';
import { logIn } from 'redux/auth/operations';
// import css from './LoginForm.module.css';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

export const LoginForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = e => {
    e.preventDefault();
    const form = e.currentTarget;
    dispatch(
      logIn({
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
      {/* <button type="submit">Log In</button> */}
      <Button
        type="submit"
        variant="contained"
        sx={{ height: 55, width: '25ch' }}
      >
        Log In
      </Button>
    </Box>
    // <form onSubmit={handleSubmit} autoComplete="off">
    //   <label>
    //     Email
    //     <input type="email" name="email" />
    //   </label>
    //   <label>
    //     Password
    //     <input type="password" name="password" />
    //   </label>
    //   <button type="submit">Log In</button>
    // </form>
  );
};
