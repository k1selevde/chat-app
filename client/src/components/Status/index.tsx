import * as React from 'react'


import './Status.scss'

interface StatusProps {
    fullname?: string;
    isOnline?: boolean;
}

const Status: React.FC<StatusProps>  = ({fullname = 'Petr1223', isOnline = true}) => {
    return (
        <div className="status">
            <div className="status__wrap">
                <h3 className="status__fullname">{fullname}</h3>
                <div className="status_condition">
                    <div className="status__condition--icon"></div>
                    <div className="status__condition--title">{isOnline ? 'online' : 'offline'}</div>
                </div>
            </div>
        </div>
    );
}



export default Status;