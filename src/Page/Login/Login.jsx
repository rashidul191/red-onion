import React from "react";
import { Form, Button } from "react-bootstrap";
import SocialSignIn from "./SocialSignIn/SocialSignIn";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <div className="container">
      <div className="w-50 mx-auto my-3 border border-3 border-info p-4">
        <h2>Please Login!!!</h2>
        <Form>
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

          {/* <Form.Group className="mb-3" controlId="formBasicCheckbox">
            <Form.Check type="checkbox" label="Check me out" />
          </Form.Group> */}

          <p>
            {" "}
            <span className="btn btn-link">Forget Password</span>
          </p>

          <Button className="w-50" variant="primary" type="submit">
            Login
          </Button>
        </Form>
      </div>
      <p className="text-center">
        New Account? <Link to="/register">Please Register</Link>
      </p>

      <SocialSignIn></SocialSignIn>
    </div>
  );
};

export default Login;
