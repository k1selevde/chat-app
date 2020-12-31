import * as React from 'react'
import { Message } from '../'


import './Messages.scss'

interface MessagesProps {

}

let messages = [
    '1erwerwe',
    '1erwerwe',
    '1erwerwe',
    '1erwerwe',
    '1erwerwe',
    '1erwerwe',
    '1erwerwe',
    '1erwerwe',
    '1erwerwe',
    '1erwerwe',
    '1erwerwe',
    '1erwerwe',
    '1erwerwe',

]

const Messages: React.FC<MessagesProps>  = () => {
    return (
        <div className="messages__wrap">

            messagesBlock
            {messages.map(mes => (
                <div>
                    <Message />
                </div>
            ))}

        </div>
    );
}

export default Messages;