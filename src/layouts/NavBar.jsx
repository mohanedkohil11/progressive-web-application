import React, { Fragment } from 'react'
import { NavLink } from 'react-router-dom'
import { Link } from 'react-router-dom';

import { ReactComponent as NotificationSvg } from "../assets/notification.svg";
import { ReactComponent as MessagesSvg } from "../assets/chatting.svg";
import { ReactComponent as DashboardSvg } from "../assets/dashboard.svg";
import { ReactComponent as ProfileSvg } from "../assets/user.svg";

function NavBar(props) {

    return (
        <Fragment>

            <nav className="navBar" style={{ height: `${props.showNavBar ? '' : '0'}` }}>

                <div className="navBar__container general-container">

                    <NavLink to="notifications" className="navBar__container__item"
                        activeClassName="navBar__container__item-selected">
                        <NotificationSvg />
                    Notifications
                </NavLink>

                    <NavLink to="messages" className="navBar__container__item"
                        activeClassName="navBar__container__item-selected">
                        <MessagesSvg />
                    Messages
                </NavLink>

                    <NavLink to="dashboard" className="navBar__container__item"
                        activeClassName="navBar__container__item-selected">
                        <DashboardSvg />
                    Dashboard
                </NavLink>

                    <NavLink to="profile" className="navBar__container__item"
                        activeClassName="navBar__container__item-selected">
                        <ProfileSvg />
                    Profile
                </NavLink>

                </div>

            </nav>

        </Fragment>
    )
}

export default NavBar
