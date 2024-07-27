import React from "react";
import "../page/LoginPage.css";
import { useState } from "react";
import { LoginApi } from "../services/Api";
import { storeUserData } from "../services/Stroage";
import isAuthenticated from "../services/Auth";
import { Link, Navigate } from "react-router-dom";

const LoginPage = () => {
  const initialStateErrors = {
    email: { required: false },
    password: { required: false },
    custom_error: null,
  };

  const [errors, setErrors] = useState(initialStateErrors);
  const [loading, setLoading] = useState(false);
  const [inputs, setInputs] = useState({
    email: "",
    password: "",
  });
  const handleSubmit = (event) => {
    console.log(inputs);
    event.preventDefault();
    let errors = { ...initialStateErrors };
    let hasError = false;
    if (inputs.email.trim() === "") {
      errors.email.required = true;
      hasError = true;
    }
    if (inputs.password.trim() === "") {
      errors.password.required = true;
      hasError = true;
    }
    setErrors({ ...errors });
    if (!hasError) {
      setLoading(true);
      LoginApi(inputs)
        .then((response) => {
          storeUserData(response.data.idToken);
        })
        .catch((err) => {
          if (err.code == "ERR_BAD_REQUEST") {
            setErrors({
              ...errors,
              custom_error: "Invalid Credentials.",
            });
          }
          console.log(err);
        })
        .finally(() => {
          setLoading(false);
        });
    }
  };
  const handleInput = (event) => {
    setInputs({ ...inputs, [event.target.name]: event.target.value });
  };

  if (isAuthenticated()) {
    return <Navigate to="/dashboard" />;
  }
  return (
    <section className="login-block">
      <div className="container">
        <div className="row ">
          <div className="col login-sec">
            <h2 className="text-center">Login Now</h2>
            <form className="login-form" onSubmit={handleSubmit} action="">
              <div className="form-group">
                <label htmlFor="exampleInputEmail1" className="text-uppercase">
                  Email
                </label>
                <input
                  type="email"
                  className="form-control"
                  name="email"
                  onChange={handleInput}
                  id=""
                  placeholder="email"
                />
                {errors.email.required && (
                  <span className="text-danger">Email is required.</span>
                )}
              </div>
              <div className="form-group">
                <label
                  htmlFor="exampleInputPassword1"
                  className="text-uppercase"
                >
                  Password
                </label>
                <input
                  className="form-control"
                  type="password"
                  name="password"
                  onChange={handleInput}
                  placeholder="password"
                  id=""
                />
                {errors.password.required && (
                  <span className="text-danger">Password is required.</span>
                )}
              </div>
              <div className="form-group">
                {loading && (
                  <div className="text-center">
                    <div className="spinner-border text-primary" role="status">
                      <span className="sr-only">Loading...</span>
                    </div>
                  </div>
                )}
                <span className="text-danger">
                  {errors.custom_error && <p>{errors.custom_error}</p>}
                </span>
                <input
                  type="submit"
                  className="btn btn-login float-right"
                  disabled={loading}
                  value="Login"
                />
              </div>
              <div className="clearfix"></div>
              <div className="form-group">
                Create new account ? Please{" "}
                <Link to={"/register"}>Register</Link>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LoginPage;