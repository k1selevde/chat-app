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
                        <div className="chat__dialog">
                            <div className="chat__dialog--status"><Status/></div>
                            <div className="chat__dialog--messages"><Messages/></div>
                            <div className="chat__dialog--chatInput"><ChatInput/></div>
                        </div>
                    )
                </div>
            </div>
        </section>
    );
}

export default Home;