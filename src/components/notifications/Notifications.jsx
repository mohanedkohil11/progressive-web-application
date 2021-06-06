import React, { Fragment, useEffect, useState } from 'react'
import NotificationCard from '../../reusable/NotificationCard'

function Notifications() {
    const notifications = [
        {
            id: 1,
            title: "Notification Title",
            body: "Notification Body Notification Body Notification Body Notification Body Notification Body Notification Body Notification Body Notification Body Notification Body",
            date: `${new Date(Math.random() * Date.now())}`
        },
        {
            id: 2,
            title: "Notification Title",
            body: "Notification Body Notification Body Notification Body Notification Body Notification Body Notification Body Notification Body Notification Body Notification Body",
            date: `${new Date(Math.random() * Date.now())}`
        },
        {
            id: 3,
            title: "Notification Title",
            body: "Notification Body Notification Body Notification Body Notification Body Notification Body Notification Body Notification Body Notification Body Notification Body",
            date: `${new Date(Math.random() * Date.now())}`
        },
        {
            id: 4,
            title: "Notification Title",
            body: "Notification Body Notification Body Notification Body Notification Body Notification Body Notification Body Notification Body Notification Body Notification Body",
            date: `${new Date(Math.random() * Date.now())}`
        },
        {
            id: 5,
            title: "Notification Title",
            body: "Notification Body Notification Body Notification Body Notification Body Notification Body Notification Body Notification Body Notification Body Notification Body",
            date: `${new Date(Math.random() * Date.now())}`
        },
        {
            id: 6,
            title: "Notification Title",
            body: "Notification Body Notification Body Notification Body Notification Body Notification Body Notification Body Notification Body Notification Body Notification Body",
            date: `${new Date(Math.random() * Date.now())}`
        },
    ]

    return (
        <Fragment>
            <div className="notifications general-container">
                {
                    notifications.map((notification, index) => {
                        return <NotificationCard notification={notification} key={index} />
                    })
                }
            </div>
        </Fragment>
    )
}

export default Notifications
