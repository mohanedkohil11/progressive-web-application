import React, { useEffect } from 'react'
import HomeCard from '../../reusable/HomeCard'
import { Link } from 'react-router-dom';

import { ReactComponent as NotificationSvg } from "../../assets/notification.svg";
import { ReactComponent as MessagesSvg } from "../../assets/chatting.svg";
import { ReactComponent as DashboardSvg } from "../../assets/dashboard.svg";
import { ReactComponent as ProfileSvg } from "../../assets/user.svg";

function Home() {
    //This component to handle the contents of the landing page

    return (
        <div className="home">

            <div className="home__cards">
                <Link to="/notifications">
                    <HomeCard Icon={<NotificationSvg />} title="Notifications" />
                </Link>
                <Link to="/messages">
                    <HomeCard Icon={<MessagesSvg />} title="Messages" />
                </Link>
                <Link to="dashboard">
                    <HomeCard Icon={<DashboardSvg />} title="Dashboard" />
                </Link>
                <Link to="profile">
                    <HomeCard Icon={<ProfileSvg />} title="Profile" />
                </Link>
            </div>
        </div>
    )
}

export default Home
