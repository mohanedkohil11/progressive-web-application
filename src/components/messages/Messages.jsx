import React, { Fragment, useEffect, useState } from 'react'
import MessageCard from '../../reusable/MessageCard'


function Messages() {

    //static messages data

    const messages = [
        {
            id: 1,
            userName: "Username",
            message: "Message Body Message Body Message Body Message Body Message Body Message Body Message Body Message Body Message Body Message Body Message Body Message Body",
            date: `${new Date(Math.random() * Date.now())}`
        },

        {
            id: 1,
            userName: "Username",
            message: "Message Body Message Body Message Body Message Body Message Body Message Body Message Body Message Body Message Body Message Body Message Body Message Body",
            date: `${new Date(Math.random() * Date.now())}`
        },

        {
            id: 1,
            userName: "Username",
            message: "Message Body Message Body Message Body Message Body Message Body Message Body Message Body Message Body Message Body Message Body Message Body Message Body",
            date: `${new Date(Math.random() * Date.now())}`
        },

        {
            id: 1,
            userName: "Username",
            message: "Message Body Message Body Message Body Message Body Message Body Message Body Message Body Message Body Message Body Message Body Message Body Message Body",
            date: `${new Date(Math.random() * Date.now())}`
        },

        {
            id: 1,
            userName: "Username",
            message: "Message Body Message Body Message Body Message Body Message Body Message Body Message Body Message Body Message Body Message Body Message Body Message Body",
            date: `${new Date(Math.random() * Date.now())}`
        },

        {
            id: 1,
            userName: "Username",
            message: "Message Body Message Body Message Body Message Body Message Body Message Body Message Body Message Body Message Body Message Body Message Body Message Body",
            date: `${new Date(Math.random() * Date.now())}`
        },

    ]
    return (
        <Fragment>

            <div className="messages general-container">
                {messages.map((message, index) => {
                    return <MessageCard message={message} key={index} />
                })}
            </div>
        </Fragment>
    )
}

export default Messages
