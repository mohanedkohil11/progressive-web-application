import React from 'react'
import Moment from 'react-moment';

function MessageCard({ message }) {
    return (
        <div className="messageCard">

            <div className="messageCard__body">
                <div className="messageCard__body__reply">Reply</div>
                <div className="messageCard__body__name">{message.userName}</div>
                <div className="messageCard__body__msg">{message.message}</div>
                <div className="messageCard__body__footer">
                    <div className="messageCard__body__footer__date"><Moment format="YYYY/MM/DD">{message.date}</Moment></div>
                </div>
            </div>
        </div>
    )
}

export default MessageCard
