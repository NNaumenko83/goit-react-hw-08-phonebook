import { RegisterForm } from 'components';
import Container from '@mui/material/Container';

const Register = () => {
  return (
    <Container
      sx={{ paddingTop: 15, display: 'flex', justifyContent: 'center' }}
    >
      <RegisterForm />
    </Container>
  );
};

export default Register;
