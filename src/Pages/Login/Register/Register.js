import React, { useContext, useState } from 'react';
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import toast from 'react-hot-toast';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../../context/AuthProvider/AuthProvider';
import useTitle from '../../../hooks/useTitle';

const Register = () => {
   const [error, setError] = useState('');
   const [accepted, setAccepted] = useState(false);
  const { createUser, updateUserProfile, verifyEmail } =
    useContext(AuthContext);
    useTitle('|Register')
  const navigate = useNavigate();
    const handalSubmit = (e) =>{
        e.preventDefault();
        const form = e.target;
        const name = form.name.value;
        const photoURL = form.photoURL.value;
        const email = form.email.value;
        const password = form.password.value;
        console.log(name, photoURL, email, password);
        createUser(email, password)
          .then((result) => {
            const user = result.user;
            console.log(user);
            handalUserProfile(name, photoURL);
            handalEmailVerification();
            toast.success('Please Verify Your Email Address! if need check your spam folder')
            form.reset();
            setError('')
            navigate('/');
          })
          .catch((error) => setError(error.message));
    };
    const handalUserProfile = (name, photoURL)=>{
      const profile = {
        displayName: name,
        photoURL: photoURL,
      };
      updateUserProfile(profile)
      .then(()=>{})
      .catch(error => console.error(error));
    }
    const handalAccepted = (e)=>{
      setAccepted(e.target.checked)
    }
    const handalEmailVerification = ()=>{
      verifyEmail()
        .then(() => {})
        .catch((error) => setError(error.message));
    }
    return (
      <Form onSubmit={handalSubmit}>
        <Form.Group className="mb-3" controlId="formBasicName">
          <Form.Label>Your Name</Form.Label>
          <Form.Control type="text" name="name" placeholder="Enter Name" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicPhoto">
          <Form.Label>Photo Url</Form.Label>
          <Form.Control type="text" name="photoURL" placeholder="Photo URL" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control
            type="email"
            name="email"
            placeholder="Enter email"
            required
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            name="password"
            placeholder="Password"
            required
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicCheckbox">
          <Form.Check
          onClick={handalAccepted}
            type="checkbox"
            label={
              <>
                Accept <Link to="/terms">Terms & Condition</Link>
              </>
            }
          />
        </Form.Group>
        <Button variant="primary" type="submit" disabled={!accepted}>
          Register
        </Button>
        <Form.Text className="text-danger">{error}</Form.Text>
      </Form>
    );
};

export default Register;