import React from 'react';
import app_config from '../../config';
import { Formik } from 'formik';
import Swal from 'sweetalert2';
import { useNavigate } from 'react-router-dom';

const Signup = () => {
  const url = app_config.apiurl;

  const navigate = useNavigate();

  const signupForm = async (formdata, { resetForm }) => {
    console.log(formdata);
    formdata.role = 'admin';
    const res = await fetch(`${url}/user/add`, {
      method: 'POST',
      body: JSON.stringify(formdata),
      headers: {
        'Content-Type': 'application/json'
      }
    });

    console.log(res.status);

    if (res.status === 201) {
      Swal.fire({
        icon: 'success',
        title: 'Success',
        text: 'Logged In'
      });
      const data = await res.json();
      console.log(data);
      navigate('/main/signin');
    }
  };

  return (
    <div className='full-page' style={{backgroundImage: `url('https://w.wallha.com/ws/14/nLF3MvBg.png')`}}>
      <section>
        <div className="container h-100 py-5">
          <div className="row d-flex justify-content-center align-items-center h-100">
            <div className="col-lg-12 col-xl-11">
              <div className="card text-black" style={{ borderRadius: 25 }}>
                <div className="card-body p-md-5">
                  <div className="row justify-content-center">
                    <div className="col-md-10 col-lg-6 col-xl-5 order-2 order-lg-1">
                      <p className="text-center h1 fw-bold mb-5 mx-1 mx-md-4 mt-4">Sign up</p>

                      <Formik initialValues={{ name: '', email: '', password: '' }} onSubmit={signupForm}>
                        {({ values, handleSubmit, handleChange }) => (
                          <form className="mx-1 mx-md-4" onSubmit={handleSubmit}>
                            <div className="d-flex flex-row align-items-center mb-4">
                              <i className="fas fa-user fa-lg me-3 fa-fw" />
                              <div className="flex-fill mb-0">
                                <input type="text" id="name" className="form-control" value={values.name} onChange={handleChange} />
                                <label className="form-label" htmlFor="form3Example1c">
                                  Your Name
                                </label>
                              </div>
                            </div>
                            <div className="d-flex flex-row align-items-center mb-4">
                              <i className="fas fa-envelope fa-lg me-3 fa-fw" />
                              <div className="flex-fill mb-0">
                                <input type="email" id="email" className="form-control" value={values.email} onChange={handleChange} />
                                <label className="form-label" htmlFor="form3Example3c">
                                  Your Email
                                </label>
                              </div>
                            </div>
                            <div className="d-flex flex-row align-items-center mb-4">
                              <i className="fas fa-lock fa-lg me-3 fa-fw" />
                              <div className="flex-fill mb-0">
                                <input type="password" id="password" className="form-control" value={values.password} onChange={handleChange} />
                                <label className="form-label" htmlFor="form3Example4c">
                                  Password
                                </label>
                              </div>
                            </div>
                            {/* <div className="d-flex flex-row align-items-center mb-4">
                            <i className="fas fa-key fa-lg me-3 fa-fw" />
                            <div className="form-outline flex-fill mb-0">
                              <input
                                type="password"
                                id="form3Example4cd"
                                className="form-control"
                              />
                              <label className="form-label" htmlFor="form3Example4cd">
                                Repeat your password
                              </label>
                            </div>
                          </div> */}
                            <div className="form-check d-flex justify-content-center mb-5">
                              <input className="form-check-input me-2" type="checkbox" defaultValue="" id="form2Example3c" />
                              <label className="form-check-label" htmlFor="form2Example3">
                                I agree all statements in <a href="#!">Terms of service</a>
                              </label>
                            </div>
                            <div className="d-flex justify-content-center mx-4 mb-3 mb-lg-4">
                              <button type="submit" className="btn btn-primary btn-lg">
                                Register
                              </button>
                            </div>
                          </form>
                        )}
                      </Formik>
                    </div>
                    <div className="col-md-10 col-lg-6 col-xl-7 order-2 order-lg-1">

                      <img className='w-100' src="https://assets.telegraphindia.com/telegraph/2022/Sep/1663430911_untitled.jpg" alt="" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Signup;
