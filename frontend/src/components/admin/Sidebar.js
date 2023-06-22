import { stack as Menu } from 'react-burger-menu';
import React from 'react';
import './sidebar.css';
import { NavLink } from 'react-router-dom';

const Sidebar = () => {
  return (
    <Menu>
      <div className="sidebar-item">
        <NavLink id="profile" className="menu-item" to="/admin/profile">
          Admin Profile
        </NavLink>
      </div>
      <div className="sidebar-item">
        <NavLink id="profile" className="menu-item" to="/admin/manageuser">
          Manage Users
        </NavLink>
      </div>
      <div className="sidebar-item">
        <NavLink id="profile" className="menu-item" to="/admin/dashboard">
          View Dashboard 
        </NavLink>
      </div>
      
      
    </Menu>
  );
};

export default Sidebar;
