import React from "react";
import { Form, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import SocialSignIn from "../SocialSignIn/SocialSignIn";

const Registration = () => {
  return (
    <div className="container">
      <div className="w-50 mx-auto my-3 border border-3 border-info p-4">
        <h2>Please Register!!!</h2>
        <Form>
        <Form.Group className="mb-3" controlId="formBasicName">
            <Form.Label>Your Name</Form.Label>
            <Form.Control type="text" name="name" placeholder="Enter name" />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control type="email" name="email" placeholder="Enter email" />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control
              type="password"
              name="password"
              placeholder="Password"
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicCheckbox">
            <Form.Check type="checkbox" label="Agree Terms & Condition" />
          </Form.Group>

          <Button className="w-50" variant="primary" type="submit">
            Register
          </Button>
        </Form>
      </div>
      <p className="text-center">
        Already have an account? <Link to="/login">Please Login</Link>
      </p>

      <SocialSignIn></SocialSignIn>
    </div>
  );
};

export default Registration;
