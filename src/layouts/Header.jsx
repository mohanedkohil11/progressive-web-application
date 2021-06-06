import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { ReactComponent as MenuSvg } from "../assets/menu.svg";

function Header(props) {
    //get the current route from react-router-dom
    const location = useLocation();

    return (
        <div className="header">
            <div className="header__title general-container">

                <Link to="/" >

                    {(() => {
                        switch (location.pathname) {
                            case "/":
                                return "Home";

                            case "/notifications":
                                return "Notifications";

                            case "/messages":
                                return "Messages";

                            case "/dashboard":
                                return "Dashboard";

                            case "/profile":
                                return "Profile";

                            default:
                                return "Home";
                        }
                    })()}

                </Link>
                <div style={{ display: 'flex' }} onClick={() => {
                    props.navBar.setShowNavBar(!props.navBar.showNavBar)
                }}>
                    <MenuSvg />
                </div>

            </div>
        </div >
    )
}

export default Header
