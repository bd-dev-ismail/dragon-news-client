import React, { useContext, useState } from 'react';
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import toast from 'react-hot-toast';
import { useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../../context/AuthProvider/AuthProvider';
import useTitle from '../../../hooks/useTitle';
const Login = () => {
  const [error, setError] = useState('');
  const { signIn, setLoading } = useContext(AuthContext);
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";
  useTitle('Login')
  const handalSignIn = (e) =>{
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;
    signIn(email, password)
      .then((result) => {
        const user = result.user;
        console.log(user);
        form.reset();
        setError('');
        if (user.emailVerified) {
          navigate(from, { replace: true });
        }
        else{
          setError('Please Verifiy Your Email! Check Your Mail to verify Your Email Address');
          toast.error(
            "Please Verifiy Your Email! ! Check Your Mail to verify Your Email Address"
          );
        }
      })
      .catch((error) => setError(error.message))
      .finally(()=>{
        setLoading(false);
      })
  }
    return (
      <Form onSubmit={handalSignIn}>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control type="email" name="email" required placeholder="Enter email" />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" name="password" required placeholder="Password" />
        </Form.Group>
        <Button variant="primary" type="submit">
          LogIn
        </Button>
        <Form.Text className="text-danger">{error}</Form.Text>
      </Form>
    );
};

export default Login;