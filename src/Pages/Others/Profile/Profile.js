import React, { useContext, useRef, useState } from 'react';
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { AuthContext } from '../../../context/AuthProvider/AuthProvider';
const Profile = () => {
    const {user} = useContext(AuthContext);
    const [name, setName] = useState(user?.displayName);
    const photoURLRef = useRef(user?.photoURL)
    const handalSubmit = (event) =>{
        event.preventDefault();
        console.log(photoURLRef.current.value);
    }
    const handalNameChange = event =>{
        setName(event.target.value);
    }
    return (
      <Form onSubmit={handalSubmit}>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control
            style={{ background: "#e4e4e4" }}
            readOnly
            defaultValue={user?.email}
            type="email"
            placeholder="Enter email"
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicName">
          <Form.Label>Your Name</Form.Label>
          <Form.Control
            onChange={handalNameChange}
            defaultValue={name}
            type="text"
            placeholder="Your Name"
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicPhoto">
          <Form.Label>Photo URL</Form.Label>
          <Form.Control
            ref={photoURLRef}
            defaultValue={user?.photoURL}
            type="text"
            placeholder="Photo URL"
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicCheckbox">
          <Form.Check type="checkbox" label="Check me out" />
        </Form.Group>
        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    );
};

export default Profile;