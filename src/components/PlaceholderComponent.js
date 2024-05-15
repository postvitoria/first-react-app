import React from 'react'
import '../chat-style.css'
import { ChatboxEllipsesOutline } from 'react-ionicons'

export const PlaceholderComponent = () => {
    return (
        <div>
            <div className='placeholder-container'>
                <ChatboxEllipsesOutline color={'#61dafb'} height="125px" width="125px" className=''/>
                <h3 className='placeholder-title'>Chat with your friends</h3>
                <span className='placeholder-subtitle'>Click on any of your contacts to start chatting with them!</span>
            </div>
        </div>
    )
}
