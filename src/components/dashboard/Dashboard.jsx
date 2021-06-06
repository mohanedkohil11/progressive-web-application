import React from 'react'
import DashboardSideNavTabs from '../../layouts/DashboardSideNavTabs'
import Analysis from './Analysis'

function Dashboard() {
    //This component is to handle the Dashboard page
    
    return (
        <div className="dashboard general-container">
            <div className="dashboard__side-nav">
                <DashboardSideNavTabs />
            </div>
            <div className="dashboard__body">
                <Analysis />
            </div>
        </div>
    )
}

export default Dashboard
