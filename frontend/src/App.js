import './App.css';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import Admin from './components/admin';
import Main from './components/main';
import Signin from './components/main/Signin';
import Signup from './components/main/Signup';
import Home from './components/main/Home';
import UserAuth from './auth/UserAuth';
import User from './components/user';
import UserProfile from './components/user/UserProfile';
import AdminProfile from './components/admin/AdminProfile';
import NotFound from './components/NotFound';
import Contact from './components/main/Contact';
import About from './components/main/About';
import AdminAuth from './auth/AdminAuth';
import UserProvider from './context/UserProvider';
import AdminProvider from './context/AdminProvider';
import { useState } from 'react';
import DesignGenerator from './components/user/DesignGenerator';
import ManageUser from './components/admin/ManageUser';
import Dashboard from './components/admin/Dashboard';

function App() {
  const [currentUser, setCurrentUser] = useState(JSON.parse(sessionStorage.getItem('user')));

  const [currentAdmin, setCurrentAdmin] = useState(JSON.parse(sessionStorage.getItem('admin')));

  return (
    <BrowserRouter>
      <AdminProvider currentUser={currentAdmin}>
        <UserProvider currentUser={currentUser}>
          <Routes>
            <Route element={<Navigate to="/main/home" />} path="/" />
            <Route
              element={
                <AdminAuth>
                  <Admin />
                </AdminAuth>
              }
              path="admin"
            >
              <Route element={<AdminProfile />} path="profile" />
              <Route element={<ManageUser />} path="manageuser" />
              <Route element={<Dashboard />} path="dashboard" />
            </Route>

            <Route element={<Main />} path="main">
              <Route element={<Home />} path="home" />
              <Route element={<Signin />} path="signin" />
              <Route element={<Signup />} path="signup" />
              <Route element={<Contact />} path="contact" />
              <Route element={<About />} path="about" />
            </Route>

            <Route
              element={
                <UserAuth>
                  <User />
                </UserAuth>
              }
              path="user"
            >
              <Route path="profile" element={<UserProfile />} />
              <Route path="generatedesign" element={<DesignGenerator />} />
            </Route>
            <Route path="*" element={<NotFound />} />
          </Routes>
        </UserProvider>
      </AdminProvider>
    </BrowserRouter>
  );
}

export default App;
