import React from 'react'
import Moment from 'react-moment';

function NotificationCard({ notification }) {

    return (
        <div className="notification-card">


            <div className="notification-card__body">
                <div className="notification-card__body__title">{notification.title}</div>
                <div className="notification-card__body__desc">{notification.body}</div>
                <div className="notification-card__body__footer">
                    <div className="notification-card__body__footer__date"><Moment format="YYYY/MM/DD">{notification.date}</Moment></div>
                </div>
            </div>

        </div>
    )
}

export default NotificationCard
