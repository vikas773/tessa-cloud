import React from 'react';
import { Bell, ChevronDown } from 'lucide-react';
import logo from '../assets/tessa_cloud_logo.png';

export default function Navbar() {
  return (
    <header className="navbar-wrapper">
      <div className="container navbar-container">
        {/* Left Side: Brand Logo and Menu Links */}
        <div className="nav-left">
          <div className="brand">
            <img src={logo} alt="Tessa Cloud Logo" className="brand-logo" />
          </div>
          
          <nav className="nav-links">
            <div className="nav-item">Dashboard</div>
            
            {/* Masters Dropdown Menu */}
            <div className="dropdown-container">
              <div className="nav-item dropdown-trigger">
                Masters <ChevronDown size={14} />
              </div>
              <div className="dropdown-menu">
                <a href="#places" className="dropdown-item">Places</a>
                <a href="#departments" className="dropdown-item">Departments</a>
                <a href="#categories" className="dropdown-item">Categories</a>
              </div>
            </div>
            
            <div className="nav-item">Assets</div>
            
            <div className="nav-item active">Places</div>
          </nav>
        </div>

        {/* Right Side: Notifications and User Avatar */}
        <div className="nav-right">
          <button className="notification-btn" aria-label="Notifications">
            <Bell size={20} />
            <span className="notification-badge">3</span>
          </button>
          
          <div className="user-profile">
            <div className="avatar-badge">A</div>
            <div className="user-details">
              <span className="user-name">Admin User</span>
              <span className="user-role">Administrator</span>
            </div>
            <ChevronDown size={14} className="user-arrow" style={{ marginLeft: '4px', color: '#9CA3AF' }} />
          </div>
        </div>
      </div>
    </header>
  );
}
