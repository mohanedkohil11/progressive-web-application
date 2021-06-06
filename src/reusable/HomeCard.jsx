import React from 'react'

function HomeCard({ Icon, title }) {



    return (
        <div className="home-card">
            <div className="home-card__animation">
                {Icon}
            </div>
            <div className="home-card__title">
                {title}
            </div>
        </div>
    )
}

export default HomeCard
