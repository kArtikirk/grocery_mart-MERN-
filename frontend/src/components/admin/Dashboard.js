import React from 'react';
import Topbar from './topbar/Topbar';
import Sidebar from './sidebar/Sidebar';
import Home from './Adminhome';
import './Dashboard.css'
function Dashboard() {
    return (
        <div>
            <Topbar />
            <div className="container">
                <Sidebar />
                <Home />
            </div>
        </div>
    );
}

export default Dashboard;