import * as React from 'react'


import './Profile.scss'

interface ProfileProps {
    fullname: string
}

const Profile  = ({fullname = 'den4ikwqewqewqqeww'}) => {
    return (
        <div className="profile">
            <div className="profile__avatar">
            </div>
            <h3 className="profile__fullname">{fullname}</h3>

        </div>
    );
}

export default Profile;