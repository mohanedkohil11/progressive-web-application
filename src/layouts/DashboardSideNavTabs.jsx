import React from 'react'

function DashboardSideNavTabs() {
    return (
        <nav className="dashboard-side-nav">
            <li className="dashboard-side-nav__item">
                <div className="dashboard-side-nav__link">
                    <span>Users</span>
                </div>
            </li>

            <li className="dashboard-side-nav__item dashboard-side-nav__item__active">
                <div className="dashboard-side-nav__link">
                    <span>Analysis</span>
                </div>
            </li>

            <li className="dashboard-side-nav__item">
                <div className="dashboard-side-nav__link">
                    <span>Latest Activities</span>
                </div>
            </li>

            <li className="dashboard-side-nav__item">
                <div className="dashboard-side-nav__link">
                    <span>Settings</span>
                </div>
            </li>
        </nav>
    )
}

export default DashboardSideNavTabs
