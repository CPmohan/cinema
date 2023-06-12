import React from "react";
import { Form, Alert } from "react-bootstrap";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <>
      <div className="p-4 box">
        <div className="row align-items-center">
          <div className="col-md-6">
            <img
              src="https://i.pinimg.com/originals/72/e5/29/72e529e4e09f45496c470a0b47110398.jpg"
              alt="Cinema"
              className="img-fluid"
              style={{ maxWidth: "80%" }}
            />
          </div>
          <div className="col-md-6 d-flex justify-content-center">
            <div>
              <h3 className="mb-3">Welcome to cinema</h3>

              <Form>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                  <Form.Control type="email" placeholder="Email address" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                  <Form.Control type="password" placeholder="Password" />
                </Form.Group>

                <div className="d-grid gap-2">
                  <Button
                    variant="primary"
                    type="Submit"
                    style={{
                      backgroundColor: "#FFA500",
                      borderColor: "#FFA500",
                      color: "black",
                    }}
                  >
                    Log In
                  </Button>
                </div>
              </Form>
              <hr />
              <div className="p-4 box mt-3 text-center">
                Don't have an account?{" "}
                <Link to="/signup" style={{ color: "#FFA500" }}>
                  Sign up
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
