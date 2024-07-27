import React from "react";
import { useState } from "react";
import "../page/Registerpage.css";
import { RegisterApi } from "../services/Api";
import { storeUserData } from "../services/Stroage";
import isAuthenticated from "../services/Auth";
import { Link, Navigate } from "react-router-dom";

const Registerpage = () => {
  const initialStateErrors = {
    email: { required: false },
    password: { required: false },
    name: { required: false },
    custom_error: null,
  };

  const [errors, setErrors] = useState(initialStateErrors);
  const [loading, setLoading] = useState(false);
  const [inputs, setInputs] = useState({
    email: "",
    password: "",
    name: "",
  });

  const handleSubmit = (event) => {
    event.preventDefault();
    let errors = { ...initialStateErrors };
    let hasError = false;
    if (inputs.name.trim() === "") {
      errors.name.required = true;
      hasError = true;
    }
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
      RegisterApi(inputs)
        .then((response) => {
          storeUserData(response.data.idToken);
        })
        .catch((err) => {
          // if (err.response.data.error.message == "EMAIL_EXISTS") {
          //   setErrors( {...errors,
          //     custom_error: "Already this email has been registered ",
          //   });
          // }
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
    <section className="register-block">
      <div className="container">
        <div className="row">
          <div className="col register-sec">
            <h2 className="text-center">Sign In</h2>
            <form onSubmit={handleSubmit} className="register-form" action="">
              <div className="form-group">
                <label htmlFor="name" className="text-uppercase">
                  Name
                </label>
                <input
                  type="text"
                  className="form-control"
                  onChange={handleInput}
                  name="name"
                  id="name"
                />
                {errors.name.required && (
                  <span className="text-danger">Name is required.</span>
                )}
              </div>
              <div className="form-group">
                <label htmlFor="email" className="text-uppercase">
                  Email
                </label>
                <input
                  type="text"
                  className="form-control"
                  onChange={handleInput}
                  name="email"
                  id="email"
                />
                {errors.email.required && (
                  <span className="text-danger">Email is required.</span>
                )}
              </div>
              <div className="form-group">
                <label htmlFor="password" className="text-uppercase">
                  Password
                </label>
                <input
                  className="form-control"
                  type="password"
                  onChange={handleInput}
                  name="password"
                  id="password"
                />
                {errors.password.required && (
                  <span className="text-danger">Password is required.</span>
                )}
              </div>
              <div className="form-group">
                <span className="text-danger">
                  {errors.custom_error && <p>{errors.custom_error}</p>}
                </span>
                {loading && (
                  <div className="text-center">
                    <div className="spinner-border text-primary" role="status">
                      <span className="sr-only">Loading...</span>
                    </div>
                  </div>
                )}
                <input
                  type="submit"
                  className="btn btn-login float-right"
                  disabled={loading}
                  value="Register"
                />
              </div>
              <div className="clearfix"></div>
              <div className="form-group">
                Already have an account? Please <Link to={"/login"}>Login</Link>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Registerpage;
