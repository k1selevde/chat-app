import * as React from 'react'


import {Status, Messages, ChatInput, Sidebar} from '../../containers'

import './Home.scss';


const user = true
const Home: React.FC<any>  = (props) => {
    return (
        <section className="home">
            <div className="chat">
                <div className="chat__sidebar">
                    <Sidebar/>
                </div>
                <div className="chat__dialog--wrap">
                    {user && (
                        <div className="chat__dialog">
                            <Status/>
                            <Messages/>
                            <ChatInput/>
                        </div>
                    )}
                </div>
            </div>
        </section>
    );
}

export default Home;