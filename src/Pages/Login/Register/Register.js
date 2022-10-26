import React, { useContext, useState } from "react";
import { Button, Form } from "react-bootstrap";
import toast from "react-hot-toast";
import { Link } from "react-router-dom";
import { AuthContext } from "../../../AuthProvider/AuthProvider/AuthProvider";

const Register = () => {
    const [error, setError] = useState('');
    const { createUser, updateUserProfile, verifyEmail } =
      useContext(AuthContext);
    const [accepted, setAccepted] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    const form = event.target;
    const name = form.name.value;
    const photoURL = form.photoURL.value;
    const email = form.email.value;
    const password = form.password.value;
    // console.log(name, photoURL, email, password);

    createUser(email, password)
      .then((result) => {
        const user = result.user;
        //   console.log(user);
          form.reset();
          setError('');
          handleUpdateUserProfile(name, photoURL);
          handleEmailVerification();
          toast.success("check your email for verify you email address!");
      })
        .catch((err) => {
            console.error(err);
            setError(err.message)
      });
    };

    const handleUpdateUserProfile = (name, photoURL) => {
        const profile = {
            displayName: name,
            photoURL: photoURL
        }
        updateUserProfile(profile)
            .then(() => { })
            .catch(error => console.error(error))
    }
    
    const handleChecked = (event) => {
        setAccepted(event.target.checked);
    }

    const handleEmailVerification = () => {
        verifyEmail()
            .then(() => { })
        .catch(err => console.error(err))
    }

  return (
    <Form onSubmit={handleSubmit}>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Your Name</Form.Label>
        <Form.Control
          name="name"
          type="text"
          placeholder="Enter name"
          required
        />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Photo URL</Form.Label>
        <Form.Control name="photoURL" type="text" placeholder="Photo URL" />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control
          name="email"
          type="email"
          placeholder="Enter email"
          required
        />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control
          name="password"
          type="password"
          placeholder="Password"
          required
        />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicCheckbox">
        <Form.Check
                  type="checkbox"
                  onClick={handleChecked}
          label={
            <>
              Accept <Link to="/terms">Terms and conditions</Link>
            </>
          }
        />
      </Form.Group>
      <Button variant="primary" type="submit" disabled={!accepted}>
        Register
      </Button>
      <Form.Text className="text-muted text-danger">{error}</Form.Text>
    </Form>
  );
};

export default Register;
