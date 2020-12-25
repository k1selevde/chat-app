import * as React from 'react'


import { Search, Dialogs } from '../../containers'

import Profile from '../Profile'



import './Sidebar.scss';



const Sidebar: React.FC  = () => {
    return (
        <div className="sidebar">
            <div className="sidebar-header">
                <div>
                    <Profile />
                    <Search />

                    <Dialogs />
                </div>

            </div>
        </div>
    );
}

export default Sidebar;