import React from 'react'
import app_config from '../../config'
import { useNavigate } from 'react-router-dom'
import Swal from 'sweetalert2'
import { Formik } from 'formik'

const Signin = () => {

  const navigate = useNavigate()

  const url = app_config.apiurl

  const signinForm = async (formdata, { resetForm }) => {
    console.log(formdata)
    const res = await fetch(`${url}/user/auth`, {
      method: 'POST',
      body: JSON.stringify(formdata),
      headers: {
        'Content-Type': 'application/json'
      }
    })
    console.log(res.status)
    if (res.status === 200) {
      Swal.fire({
        icon: 'success',
        title: 'Success',
        text: 'Logged In'
      })
      const data = await res.json();
      console.log(data)
      sessionStorage.setItem('user', JSON.stringify(data));

    } else if (res.status === 401) {
      Swal.fire({
        icon: 'error',
        title: 'Error',
        text: 'Credential Incorrect'
      })
    } else {
      Swal.fire({
        icon: 'error',
        title: 'Error',
        text: 'Something Wrong'
      })
    }
  }




  return (
    <div>
      <section className="vh-100">
        <div className="container py-5 h-100">
          <div className="row d-flex align-items-center justify-content-center h-100">
            <div className="col-md-8 col-lg-7 col-xl-6">
              <img
                src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.svg"
                className="img-fluid"
                alt="Phone image"
              />
            </div>

            <Formik
              initialValues={{ name: '', email: '', password: '' }}
              onSubmit={signinForm}>
              {({ values, handleSubmit, handleChange }) => (
                <div className="col-md-7 col-lg-5 col-xl-5 offset-xl-1">
                  <form onSubmit={handleSubmit}>
                    {/* Email input */}
                    <div className=" mb-4">
                      <input
                        type="text"
                        id="name"
                        className="form-control form-control-lg"
                        value={values.name}
                        onChange={values.handleChange}
                      />
                      <label className="form-label" htmlFor="form1Example13">
                        Name
                      </label>
                    </div>
                    {/* Password input */}
                    <div className=" mb-4">
                      <input
                        type="email"
                        id="email"
                        className="form-control form-control-lg"
                        value={values.email}
                        onChange={values.handleChange}

                      />
                      <label className="form-label" htmlFor="form1Example23">
                        Email
                      </label>
                    </div>
                    <div className=" mb-4">
                      <input
                        type="password"
                        id="password"
                        className="form-control form-control-lg"
                        value={values.password}
                        onChange={values.handleChange}

                      />
                      <label className="form-label" htmlFor="form1Example23">
                        Password
                      </label>
                    </div>
                    <div className="d-flex justify-content-around align-items-center mb-4">
                      {/* Checkbox */}
                      <div className="form-check">
                        <input
                          className="form-check-input"
                          type="checkbox"
                          defaultValue=""
                          id="form1Example3"
                          defaultChecked=""
                        />
                        <label className="form-check-label" htmlFor="form1Example3">
                          {" "}
                          Remember me{" "}
                        </label>
                      </div>
                      <a href="#!">Forgot password?</a>
                    </div>
                    {/* Submit button */}
                    <button type="submit" className="btn btn-primary btn-lg btn-block">
                      Sign in
                    </button>
                    <div className="divider d-flex align-items-center my-4">
                      <p className="text-center fw-bold mx-3 mb-0 text-muted">OR</p>
                    </div>
                    <a
                      className="btn btn-primary btn-lg btn-block"
                      style={{ backgroundColor: "#3b5998" }}
                      href="#!"
                      role="button"
                    >
                      <i className="fab fa-facebook-f me-2" />
                      Continue with Facebook
                    </a>
                    <a
                      className="btn btn-primary btn-lg btn-block"
                      style={{ backgroundColor: "#55acee" }}
                      href="#!"
                      role="button"
                    >
                      <i className="fab fa-twitter me-2" />
                      Continue with Twitter
                    </a>
                  </form>
                </div>
              )}
            </Formik>





          </div>
        </div>
      </section>

    </div>
  )
}

export default Signin