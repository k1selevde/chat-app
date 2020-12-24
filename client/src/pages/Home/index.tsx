import * as React from 'react'
import Sidebar from "../../components/Sidebar";

import { Status,Messages } from '../../containers'

const user = true
const Home: React.FC<any>  = (props) => {
    return (
        <section className="home">
            <div className="chat">
                <div className="chat__sidebar">
                    <Sidebar/>
                </div>
                {user && (
                    <div className="chat__dialog">
                        <Status />
                        <Messages />
                    </div>
                )}
            </div>
        </section>
    );
}

export default Home;