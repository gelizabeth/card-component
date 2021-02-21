import React from 'react';
import './scss/card-component.scss';

const Card = ({user}) => {
    return (
        <div className="card">
        <div className="card__header"></div>
        <div className="card__body">
            <div className="user__img"> <img src={user.profileImage} alt=""/> </div>
            <p className="user__name">{user.name} <span>{user.age}</span></p>
            <p className="user__city">{user.city}</p>
        </div>
        <div className="card__footer">
            <div className="counter">{user.followersCount} <span>Followers</span></div>
            <div className="counter">{user.likesCount} <span>Likes</span></div>
            <div className="counter">{user.photosCount} <span>Photos</span></div>
        </div>
            
        </div>
    )
}

export default Card
