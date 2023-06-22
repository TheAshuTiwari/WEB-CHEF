import React from 'react';
import app_config from '../../config';
import { useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';
import { Formik, useFormik } from 'formik';
import { useUserContext } from '../../context/UserProvider';

const Signin = () => {
  const navigate = useNavigate();

  const url = app_config.apiurl;
  const { themeColor, themeColorLight, title } = app_config;
  const { setLoggedIn } = useUserContext();

  const loginform = useFormik({
    initialValues: {
      email: '',
      password: ''
    },
    onSubmit: async (values) => {
      console.log(values);
      const res = await fetch(`${url}/user/auth`, {
        method: 'POST',
        body: JSON.stringify(values),
        headers: {
          'Content-Type': 'application/json'
        }
      });
      console.log(res.status);
      if (res.status === 201) {
        const data = (await res.json()).result;
        // console.log("Login Successful");
        Swal.fire({
          icon: 'success',
          title: 'Success',
          text: 'Login Successful!!'
        });
        setLoggedIn(true);
        if (data.role === 'admin') {
          sessionStorage.setItem('admin', JSON.stringify(data));
          navigate('/admin/dashboard');
        } else {
          sessionStorage.setItem('user', JSON.stringify(data));
          navigate('/user/generatedesign');
        }
      } else {
        Swal.fire({
          icon: 'error',
          title: 'Error',
          text: 'Login Failed!!'
        });
      }
    }
  });

  return (
    <div className='full-page' style={{backgroundImage: `url('https://w.wallha.com/ws/14/nLF3MvBg.png')`}}>
      <div className="container py-5 h-100">
        <div className="row d-flex justify-content-center align-items-center h-100">
          <div className="col-12 col-md-8 col-lg-6 col-xl-5">
            <div className="card bg-white text-black" style={{ borderRadius: '1rem' }}>
              <div className="card-body p-5 text-center">
                <form onSubmit={loginform.handleSubmit}>
                  <div className="mb-md-5 mt-md-4 pb-5">
                    <h2 className="fw-bold mb-2 text-uppercase">Login</h2>
                    <p className="text-white-50 mb-5">Please enter your login and password!</p>
                    <div className="form-white mb-4">
                      <label className="form-label" htmlFor="typeEmailX">
                        Email
                      </label>
                      <input type="email" id="email" onChange={loginform.handleChange} value={loginform.values.email} className="form-control form-control-lg" />
                    </div>
                    <div className="form-white mb-4">
                      <label className="form-label" htmlFor="typePasswordX">
                        Password
                      </label>
                      <input type="password" id="password" onChange={loginform.handleChange} value={loginform.values.password} className="form-control form-control-lg" />
                    </div>
                    <p className="small mb-5 pb-lg-2">
                      <a className="" href="#!">
                        Forgot password?
                      </a>
                    </p>
                    <button className="btn btn-outline-primary btn-lg px-5" type="submit">
                      Login
                    </button>
                    <div className="d-flex justify-content-center text-center mt-4 pt-1">
                      <a href="#!" className="">
                        <i className="fab fa-facebook-f fa-lg" />
                      </a>
                      <a href="#!" className="">
                        <i className="fab fa-twitter fa-lg mx-4 px-2" />
                      </a>
                      <a href="#!" className="">
                        <i className="fab fa-google fa-lg" />
                      </a>
                    </div>
                  </div>
                </form>
                <div>
                  <p className="mb-0">
                    Don't have an account?{' '}
                    <a href="#!" className="text-white-50 fw-bold">
                      Sign Up
                    </a>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signin;
