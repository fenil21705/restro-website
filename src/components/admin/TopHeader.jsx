import React from 'react';
import { Search, Bell, User, Menu } from 'lucide-react';

const TopHeader = ({ title, onToggleSidebar }) => {
    return (
        <header className="admin-header">
            <button className="menu-toggle-btn" onClick={onToggleSidebar}>
                <Menu size={24} />
            </button>
            <h2 className="header-title">{title}</h2>

            <div className="header-actions">
                <div className="search-bar">
                    <Search size={18} className="search-icon" />
                    <input type="text" placeholder="Search..." />
                </div>

                <button className="icon-btn">
                    <Bell size={20} />
                    <span className="notification-dot"></span>
                </button>

                <div className="profile-dropdown">
                    <div className="avatar">
                        <User size={20} />
                    </div>
                    <span className="admin-name">Admin User</span>
                </div>
            </div>
        </header>
    );
};

export default TopHeader;
