import { LoginForm } from 'components';
import Container from '@mui/material/Container';

const Login = () => {
  return (
    <Container
      sx={{ paddingTop: 15, display: 'flex', justifyContent: 'center' }}
    >
      <LoginForm />
    </Container>
  );
};

export default Login;
